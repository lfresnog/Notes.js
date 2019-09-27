"use strict";

var _yargs = _interopRequireDefault(require("yargs"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Add
_yargs["default"].command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Title of the note',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'body of the note',
      demandOption: true,
      type: 'string'
    },
    author: {
      describe: 'body of the note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: _utils.add
}); //List


_yargs["default"].command({
  command: 'list',
  describe: 'List titles of notes',
  handler: _utils.list
}); //Remove


_yargs["default"].command({
  command: 'remove',
  describe: 'Remove a note',
  index: {
    describe: 'Info necessary to choose the note to remove',
    demandOption: true,
    type: 'number'
  },
  handler: _utils.remove
}); //Read


_yargs["default"].command({
  command: 'read',
  describe: 'Read a note',
  index: {
    describe: 'Info necessary to choose the note to read',
    demandOption: true,
    type: 'number'
  },
  handler: _utils.read
});

_yargs["default"].parse();