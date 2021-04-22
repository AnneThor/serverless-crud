'use strict'

const clients = require('./Models/clientSchema.js');

exports.handler = async (event) => {

  const id = event.pathParameters.clientID;

  try {
    await clients.delete({ id });
    let reply = JSON.stringify({ "message": `Successfully deleted record ${id}` })
    return {
      statusCode: 200,
      body: reply
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message
    }
  }

}
