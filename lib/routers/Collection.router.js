'use strict';

var express = require('express');
var router = express.Router();
var db = require('./../db');
var ObjectId = require('mongodb').ObjectID;
var controller = require('./../controllers/Collection.controller');

router.param('collectionName', function (req, res, next, collectionName) {
  req.collection = db.get().collection(collectionName);
  next();
});

router.get('/:collectionName', controller.getCollection);
router.post('/:collectionName', controller.postCollection);
router.put('/:collectionName/:id', controller.putCollection);
router.delete('/:collectionName/:id', controller.deleteCollection);
router.get('/:collectionName/:id', controller.getCollectionById);

module.exports = router;