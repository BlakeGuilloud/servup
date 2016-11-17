'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require('mongoose');

var schema = new mongoose.Schema({});

var Collection = mongoose.model('Collection', schema);

exports.default = Collection;