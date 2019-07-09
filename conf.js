/*jslint node: true */
"use strict";

exports.clientName = 'hub';

//数据库
exports.storage = 'sqlite';
exports.permanent_pairing_secret = '0000';
exports.WS_PROTOCOL = 'ws://';
exports.KEYS_FILENAME = 'keys.json';

// exports.minClientVersion = '0.1.5';

exports.bLight = false;
exports.bServeAsHub = true;

exports.port = 8286;
exports.rpcPort = '10061';

// exports.minClientVersion = '0.1.5';

exports.initial_witnesses = [
    "QO62LQRICJLZLI3HS2PXS6N4BEK4RDPY",
    "LJMBYQKXSOLPLLMD4JIMMNODBEMWWUGN",
    "IBBRYL5V5PUKJO7IH7HH4VRK5GJ5XYGQ",
    "HXSWP2FR5MAE2OJECZHTFFPWZ24H3P3B"
];


// exports.admin_email='zz634682577@163.com';
// exports.from_email='wenzhengzhang@chenhaninfo.com';
// exports.smtpTransport ="relay";
// exports.smtpUser='wenzhengzhang@chenhaninfo.com';
// exports.smtpPassword='Aa123123';
// exports.smtpRelay='smtp.mxhichina.com';
// exports.smtpPort='25';



exports.initial_peers = [
    'ws://47.244.154.153:8286',
    'ws://47.244.143.123:8286',
    'ws://47.244.154.66:8286',
    'ws://47.75.210.123:8286'
];

exports.trustedRegistries = {
	// 'O4JNHW52CF5BDGASQEVLAVZGBMNHYZ2S': 'market'
};

console.log('finished hub conf');
