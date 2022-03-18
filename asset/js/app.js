"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var tessst = function tessst() {
  var _console;

  (_console = console).log.apply(_console, arguments);
};

var abc = /*#__PURE__*/function () {
  function abc() {
    _classCallCheck(this, abc);

    return;
  }

  _createClass(abc, [{
    key: "testmethod",
    value: function testmethod() {
      console.log('testingclass');
    }
  }]);

  return abc;
}();

var testobj = new abc();
testobj.testmethod();
tessst('d', 'www', 'dsadas', 'dasdssad');