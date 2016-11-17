'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCollection = exports.deleteCollection = exports.patchCollection = exports.getCollections = exports.postCollection = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var postCollection = exports.postCollection = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(collection) {
    var newCollection;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newCollection = void 0;
            _context.prev = 1;
            _context.next = 4;
            return _Collection2.default.create(collection);

          case 4:
            newCollection = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);

            console.log('err', _context.t0);

          case 10:
            return _context.abrupt('return', _promise2.default.resolve(newCollection));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  return function postCollection(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getCollections = exports.getCollections = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var collections;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            collections = void 0;
            _context2.prev = 1;
            _context2.next = 4;
            return _Collection2.default.find({}).exec();

          case 4:
            collections = _context2.sent;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](1);

            console.log('err', _context2.t0);

          case 10:
            return _context2.abrupt('return', _promise2.default.resolve(collections));

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 7]]);
  }));

  return function getCollections() {
    return _ref2.apply(this, arguments);
  };
}();

var patchCollection = exports.patchCollection = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(collectionId, collectionData) {
    var updatedCollection;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            updatedCollection = void 0;
            _context3.prev = 1;
            _context3.next = 4;
            return _Collection2.default.findByIdAndUpdate(collectionId, collectionData);

          case 4:
            updatedCollection = getCollection(collectionId);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](1);

            console.log('err', _context3.t0);

          case 10:
            return _context3.abrupt('return', _promise2.default.resolve(updatedCollection));

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[1, 7]]);
  }));

  return function patchCollection(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteCollection = exports.deleteCollection = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(collectionId) {
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Collection2.default.findByIdAndRemove(collectionId);

          case 3:
            _context4.next = 8;
            break;

          case 5:
            _context4.prev = 5;
            _context4.t0 = _context4['catch'](0);

            console.log('err', _context4.t0);

          case 8:
            return _context4.abrupt('return', _promise2.default.resolve());

          case 9:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 5]]);
  }));

  return function deleteCollection(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var getCollection = exports.getCollection = function () {
  var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(id) {
    var collection;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            collection = void 0;
            _context5.prev = 1;
            _context5.next = 4;
            return _Collection2.default.findOne({ _id: id }).exec();

          case 4:
            collection = _context5.sent;
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](1);

            console.log('err', _context5.t0);

          case 10:
            console.log('collectin', collection);

            return _context5.abrupt('return', _promise2.default.resolve(collection));

          case 12:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[1, 7]]);
  }));

  return function getCollection(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var _Collection = require('../models/Collection.model');

var _Collection2 = _interopRequireDefault(_Collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }