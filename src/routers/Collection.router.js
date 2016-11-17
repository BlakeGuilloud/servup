const express    = require('express');
const router     = express.Router();
const db         = require('./../db');
const controller = require('./../controllers/Collection.controller');

router.param('collectionTitle', (req, res, next, collectionTitle) => {
  req.collection = db.get().collection(collectionTitle);
  next();
});

router.get('/:collectionTitle', controller.getCollection);
router.post('/:collectionTitle', controller.postCollection);
router.put('/:collectionTitle/:id', controller.putCollection);
router.delete('/:collectionTitle/:id', controller.deleteCollection);
router.get('/:collectionTitle/:id', controller.getCollectionById);

module.exports = router;
