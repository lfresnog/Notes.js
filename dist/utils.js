"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.list = list;
exports.remove = remove;
exports.read = read;

var _v = _interopRequireDefault(require("uuid/v1"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Notes
var book = {
  notes: []
};

function add(argv) {
  var note = {
    title: argv.title,
    body: argv.body,
    author: argv.author,
    id: (0, _v["default"])()
  };
  var path = './notes.txt';

  _fs["default"].access(path, _fs["default"].F_OK, function (err) {
    if (err) {
      book.notes.push(note);
      var str = JSON.stringify(book);

      _fs["default"].writeFileSync("notes.txt", str);
    } else {
      var str1 = _fs["default"].readFileSync('notes.txt').toString();

      var _book = JSON.parse(str1);

      _book.notes.push(note);

      var str2 = JSON.stringify(_book);

      _fs["default"].writeFileSync("notes.txt", str2);
    }
  });
}

function list() {
  var str = _fs["default"].readFileSync('notes.txt').toString();

  var book = JSON.parse(str);
  book.notes.forEach(function (note, i) {
    console.log("".concat(i, ": ").concat(note.title));
  });
}

function remove(argv) {
  var str = _fs["default"].readFileSync('notes.txt').toString();

  var book = JSON.parse(str);
  book.notes.splice(argv.index - 1, 1);
  var str2 = JSON.stringify(book);

  _fs["default"].writeFileSync("notes.txt", str2);
}

function read(argv) {
  var str = _fs["default"].readFileSync('notes.txt').toString();

  var book = JSON.parse(str);

  try {
    console.log(book.notes[argv.index].body);
  } catch (error) {
    console.error("That note doesn't exist");
  }
}