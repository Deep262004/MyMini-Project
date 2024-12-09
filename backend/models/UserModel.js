const {Schema, model } = require('../connection');

const mySchema = new Schema({
      id : {type : String, required : true},
      title: {type : String, unique : true},
      cover: {type : String, unique : true},
      description:  {type: String, default:''},
      content: {type : String, required : true},
      publishedBy: {type : String, required : true},
      createdAt : { type : Date, default : Date.now}
      });

module.exports = model('users', mySchema);