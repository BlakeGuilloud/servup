import Collection from '../models/Collection.model';

export async function postCollection(collection) {
  let newCollection;
  try {
    newCollection = await Collection.create(collection);
  } catch (err) {
    console.log('err', err);
  }

  return Promise.resolve(newCollection);
}

export async function getCollections() {
  let collections;
  try {
    collections = await Collection.find({}).exec();
  } catch (err) {
    console.log('err', err);
  }

  return Promise.resolve(collections);
}

export async function patchCollection(collectionId, collectionData) {
  let updatedCollection;
  try {
    await Collection.findByIdAndUpdate(collectionId, collectionData);
    updatedCollection = getCollection(collectionId);
  } catch (err) {
    console.log('err', err);
  }

  return Promise.resolve(updatedCollection);
}

export async function deleteCollection(collectionId) {
  try {
    await Collection.findByIdAndRemove(collectionId);
  } catch (err) {
    console.log('err', err);
  }

  return Promise.resolve();
}

export async function getCollection(id) {
  let collection;
  try {
    collection = await Collection.findOne({ _id: id }).exec();
  } catch (err) {
    console.log('err', err);
  }
  console.log('collectin', collection);

  return Promise.resolve(collection);
}
