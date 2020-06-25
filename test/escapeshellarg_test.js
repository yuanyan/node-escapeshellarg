var escapeshellarg = require('../');
var assert = require('assert');

assert.equal(escapeshellarg(String.raw`'`), String.raw`''\'''`)
assert.equal(escapeshellarg(String.raw`''`), String.raw`''\'''\'''`)
assert.equal(escapeshellarg(String.raw`\'`), String.raw`'\'\'''`)
assert.equal(escapeshellarg(String.raw`Hello's world`), String.raw`'Hello'\''s world'`)
