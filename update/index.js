'use strict'

const clients = require('./Models/clientSchema.js');

exports.handler = async (event) => {

  console.log(event);

  try {
    const updBody = JSON.parse(event.body);
    const id = event.pathParameters.clientID;

    const record = await clients.update({id}, updBody);
    console.log("UPDATED RECORD", record);
    const updatedRecord = JSON.stringify(record);

    return {
      statusCode: 200,
      body: updatedRecord
    }

  } catch (err) {
    return {
      statusCode: 500,
      body: err.message
    }
  }

}
