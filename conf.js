/*jslint node: true */
"use strict";

exports.clientName = 'hub';

//数据库
exports.storage = 'sqlite';
exports.permanent_pairing_secret = '0000';
exports.WS_PROTOCOL = 'ws://';
exports.KEYS_FILENAME = 'keys.json';

exports.bLight = false;
exports.bServeAsHub = true;

exports.port = 10060;
exports.rpcPort = '10061';


exports.initial_witnesses = [
	'O4JNHW52CF5BDGASQEVLAVZGBMNHYZ2S',
	'QLKAIB33R7AVHABYC5PGER2LLIVH5YE2',
	'IOOOMPPD6FRHTNQBK763EAFUCIRJZYMP'
];


exports.admin_email='zz634682577@163.com';
exports.from_email='wenzhengzhang@chenhaninfo.com';
exports.smtpTransport ="relay";
exports.smtpUser='wenzhengzhang@chenhaninfo.com';
exports.smtpPassword='Aa123123';
exports.smtpRelay='smtp.mxhichina.com';
exports.smtpPort='25';



exports.initial_peers = [
    'wss://hub1.ebaoedu.com:10060',
    'wss://hub2.ebaoedu.com:10060',
    'wss://hub3.ebaoedu.com:10060',
    'wss://hub4.ebaoedu.com:10060'
];

exports.trustedRegistries = {
	'O4JNHW52CF5BDGASQEVLAVZGBMNHYZ2S': 'market'
};

console.log('finished hub conf');
