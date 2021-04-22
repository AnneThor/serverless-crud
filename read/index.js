'use strict'

const clients = require('./Models/clientSchema.js');

exports.handler = async (event) => {
  const id = event.pathParameters ? event.pathParameters.clientID : null;

  try {
    if (id) {
      const record = await clients.query("id").eq(id).exec();
      const client = JSON.stringify(record[0]);
      return {
        statusCode: 200,
        body: client
        }
      } else {
        const allRecords = await clients.scan().exec();
        const data = JSON.stringify(allRecords);
        return {
          statusCode: 200,
          body: data
        }
      }
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message
      }
  }
}
