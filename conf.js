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
    'WXNM4L4OTGIKSQHMMMBE6TUW6YJ4SHGY',
    'J4LFUWCFCXLWNNCLGMVGQKXUOUULNPDW',
    'DLVXBKXVNSOLGSXVAJBUYQUG5OEGWTV5',
    'JNR2E5BPXI576ZEVR5S5HVTYC6EZNDPW',
    'SLNK5ISPUQRJX2VIMUTU7YHMNTGOWUEC',
    'SDO4KLWIPLLKBWMW5FJSWBCWBHHOC2OI'
];


// exports.admin_email='zz634682577@163.com';
// exports.from_email='wenzhengzhang@chenhaninfo.com';
// exports.smtpTransport ="relay";
// exports.smtpUser='wenzhengzhang@chenhaninfo.com';
// exports.smtpPassword='Aa123123';
// exports.smtpRelay='smtp.mxhichina.com';
// exports.smtpPort='25';



exports.initial_peers = [
    'ws://172.31.34.124:8286',
    'ws://172.31.34.120:8286',
    'ws://172.31.34.125:8286',
    'ws://172.31.34.118:8286'
];

exports.trustedRegistries = {
	// 'O4JNHW52CF5BDGASQEVLAVZGBMNHYZ2S': 'market'
};

console.log('finished hub conf');
