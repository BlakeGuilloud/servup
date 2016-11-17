const mongoose = require('mongoose');

const schema = new mongoose.Schema({});

const Collection = mongoose.model('Collection', schema);

export default Collection;
