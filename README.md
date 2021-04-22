# serverless-crud
A simple CRUD app build using Node.js, AWS DynamoDB, dynamoose, AWS Lambda, AWS API Gateway

## Author: Anne Thorsteinson

## Setup

```.env``` requirements: no requirements

**[Live Version at AWS](https://kfua3zse5h.execute-api.us-west-2.amazonaws.com)

## App Functionality / Database

The app is built to service a ```clients``` database hosted by **AWS DynamoDB** that stores the following information

**Description of clients database**
id (primary key) | firstName | lastName | phone
---------------- | --------- | -------- | -----
random uuid (generated from [uuid package](https://www.npmjs.com/package/uuid)) | string | string | string

Requirements are loose here, with the id/primary key as the only required field

## Endpoints

There is no front end, so this app won't do much from the direct link but there are various endpoints with CRUD functionality:

```/client/create```: a ```POST``` method to this route structured with a post containing the necessary client fields ```{ "firstName": string, "lastName": string, "phone": string } will create, save and return the newly saved client record

```/client```: a ```GET``` method to this route will return a list of the full records of all clients in the clients database

[Test a GET to client](https://kfua3zse5h.execute-api.us-west-2.amazonaws.com/client)

```/client/{clientID}```: a ```GET``` method to this route will return either the full list of all client records (if the ```clientID``` param is left empty) or the client record of the client whose id is provided in the ```clientID``` param

[Test a GET to client/{clientID}](https://kfua3zse5h.execute-api.us-west-2.amazonaws.com/client/4603229f-9841-498f-b7c5-197d5c5ffaa7)

```/client/update/{clientID}```: a ```PUT``` method to this route will update the client record with the id corresponding to the ```clientID``` param

```/client/delete/{clientID}```: a ```DELETE``` method to this route will delete the client record with the id corresponding to the ```clientID``` param

## UML Diagram

![UML diagram of basic express server project](./assets/Lab18.png)
