'use strict';

const loginModule = require('..');
const assert = require('assert').strict;

assert.strictEqual(loginModule(), 'Hello from loginModule');
console.info('loginModule tests passed');
