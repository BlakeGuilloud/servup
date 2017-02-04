const ObjectId = require('mongodb').ObjectID;

export function postCollection(req, res, next) {
  req.collection
    .insert(req.body, {}, (err, results) => {
      if (err) { return next(err); }

      res.send(results.ops[0]);
    });
}

export function getCollection(req, res, next) {
    req.collection
      .find({})
      .toArray((err, results) => {
        if (err) return next(err);

        res.send(results);
      });
}

export function getCollectionById(req, res, next) {
  req.collection
    .find({'_id': ObjectId(req.params.id)})
    .toArray((err, result) => {
      if (err) return next(err);

      res.send(result[0]);
    });
}

export function putCollection(req, res) {
  delete req.body._id;
  req.collection
    .update({'_id': ObjectId(req.params.id)}, { $set:req.body });
  req.collection
    .find({'_id': ObjectId(req.params.id)})
    .toArray((err, result) => {
      if (err) return next(e);

      res.send(result[0]);
    });
}

export function deleteCollection(req, res) {
  const result = req.collection.remove({_id: ObjectId(req.params.id)});

  res.send(result);
}
