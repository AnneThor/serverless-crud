'use strict';

const dynamoose = require('dynamoose');

const clientSchema = new dynamoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  phone: String
})

module.exports = dynamoose.model('clients', clientSchema);
