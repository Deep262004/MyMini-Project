const {Schema, model } = require('../connection');

const contactSchema = new Schema(
      {
      firstName: {type : String, required : true},
      lastName: {type : String, unique : true},
      email: {type : String, unique : true},
      phoneNumber:  {type: int},
      details: {type : String, unique : true},
      });

      module.exports = model('enquiry', contactSchema);