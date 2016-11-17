const express    = require('express');
const router     = express.Router();
const db         = require('./../db');
const ObjectId   = require('mongodb').ObjectID;
const controller = require('./../controllers/Collection.controller');

router.param('collectionName', (req, res, next, collectionName) => {
  req.collection = db.get().collection(collectionName);
  next();
});

router.get('/:collectionName', controller.getCollection);
router.post('/:collectionName', controller.postCollection);
router.put('/:collectionName/:id', controller.putCollection);
router.delete('/:collectionName/:id', controller.deleteCollection);
router.get('/:collectionName/:id', controller.getCollectionById);

module.exports = router;
