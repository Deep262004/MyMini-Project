const {Schema, model } = require('../connection');

const mySchema = new Schema({
       id : String,
       title: String,
       cover: String,
       description: String,
       content: String,
       publishedBy: String,
       createdBy: String,
      });

module.exports = model('users', mySchema);