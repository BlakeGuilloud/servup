'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postCollection = postCollection;
exports.getCollection = getCollection;
exports.getCollectionById = getCollectionById;
exports.putCollection = putCollection;
exports.deleteCollection = deleteCollection;
var ObjectId = require('mongodb').ObjectID;

function postCollection(req, res, next) {
  req.collection.insert(req.body, {}, function (err, results) {
    if (err) {
      return next(err);
    }

    res.send(results.ops[0]);
  });
}

function getCollection(req, res, next) {
  req.collection.find({}).toArray(function (err, results) {
    if (err) return next(err);

    res.send(results);
  });
}

function getCollectionById(req, res, next) {
  req.collection.find({ '_id': ObjectId(req.params.id) }).toArray(function (err, result) {
    if (err) return next(err);

    res.send(result[0]);
  });
}

function putCollection(req, res) {
  delete req.body._id;
  req.collection.update({ '_id': ObjectId(req.params.id) }, { $set: req.body });
  req.collection.find({ '_id': ObjectId(req.params.id) }).toArray(function (err, result) {
    if (err) return next(e);

    res.send(result[0]);
  });
}

function deleteCollection(req, res) {
  var result = req.collection.remove({ _id: ObjectId(req.params.id) });

  res.send(result);
}