const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url,{useUnifiedTopology: true, useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  if (err) {
  	console.log(err)
  }else{
  	console.log('succes')
  	client.close();
  }
});
