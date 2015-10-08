'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
  name: String,
  users: [{ type: Schema.Types.ObjectId, ref:"User" }]
});

module.exports = mongoose.model('Group', GroupSchema);
