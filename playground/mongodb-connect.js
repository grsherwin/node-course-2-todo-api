// cd desktop/nodeCourse/node-todo-api

// ./mongod -dbpath ~/mongo-data

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


var user = {name: 'Glen', age: 59};
var {name} = user;
console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Eat lunch',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
    console.log('todo inserted')
  });

  // db.collection('users').insertOne({
  //   name: 'Glen Sherwin',
  //   age: 59,
  //   location: "Nashville"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log('user inserted')
  //   console.log(result.ops[0]._id.getTimestamp());
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  client.close();
});
