/*jslint node: true */
"use strict";
require('relay');
var conf = require('./conf');
var network = require('core/network');
var eventBus = require('core/event_bus.js');
var push = require('./push');
const price_feed = require('./exchange_price_feed');

if (conf.trustedRegistries && Object.keys(conf.trustedRegistries).length > 0)
	require('./asset_metadata.js');

eventBus.on('peer_version', function (ws, body) {
	if (body.program == conf.clientName) {
		if (conf.minClientVersion && compareVersions(body.program_version, conf.minClientVersion) == '<')
			network.sendJustsaying(ws, 'new_version', {version: conf.minClientVersion});
		if (compareVersions(body.program_version, '1.5.1') == '<')
			ws.close(1000, "mandatory upgrade");
	}
});

function compareVersions(currentVersion, minVersion) {
	if (currentVersion === minVersion) return '==';

	var cV = currentVersion.match(/([0-9])+/g);
	var mV = minVersion.match(/([0-9])+/g);
	var l = Math.min(cV.length, mV.length);
	var diff;

	for (var i = 0; i < l; i++) {
		diff = parseInt(cV[i], 10) - parseInt(mV[i], 10);
		if (diff > 0) {
			return '>';
		} else if (diff < 0) {
			return '<'
		}
	}

	diff = cV.length - mV.length;
	if (diff == 0) {
		return '==';
	} else if (diff > 0) {
		return '>';
	} else if (diff < 0) {
		return '<';
	}
}

function init() {
    var rpc = require('json-rpc2');
    var server = rpc.Server.$create({
        'websocket': true, // is true by default
        'headers': { // allow custom headers is empty by default
            'Access-Control-Allow-Origin': '*'
        }
    });

    server.expose('ping', function(args, opt, cb) {
        cb(null,"pong")
    });

    var httpServer = server.listen(conf.rpcPort, conf.rpcInterface);
    httpServer.timeout = 900*1000;

}

init();