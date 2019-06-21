/*jslint node: true */
"use strict";
var check_daemon = require('core/check_daemon.js');

check_daemon.notifyAdmin("check hub is down");
// check_daemon.checkDaemonAndRestart('node starthub.js', 'node starthub.js 1>log.log 2>>err.log');

