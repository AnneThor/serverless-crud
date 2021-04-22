// in AWS the db is named clients

'use strict'

const clients = require('./Models/clientSchema.js');
const uuid = require('uuid').v4;

exports.handler = async (event) => {

  console.log(event);

  try {
    const body = JSON.parse(event.body);
    const { firstName, lastName, phone } = body;
    const id = uuid();

    const record = new clients({ id, firstName, lastName, phone })
    const data = await record.save();
    const savedData = JSON.stringify(data);

    return {
      statusCode: 201,
      body: savedData
    }

  } catch (err) {
    return {
      statusCode: 500,
      body: err.message
    }
  }

}
