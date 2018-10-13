Instructions
======

Build
------
// Install MongoDB on your machine 
[Guide][3]

// Start MongoD on your machine
// You can edit the options and configurations through /etc/mongod.conf
// See the logs through /var/log/mongodb/mongod.log
> sudo service mongod start

// Installs all packages in package.json
> npm install

Debug
------
// Run the mongodb shell
> mongo --host 127.0.0.1:27017

Run
------
// Runs the dev script which will run "nodemon --inspect server/server.js --exec babel-node"
> npm run dev

Stopping
------
// Stop the mongodb server
> sudo service mongod stop

References
------
[1]: https://www.youtube.com/watch?v=Hf7xSCnbyiI
[2]: https://blog.apollographql.com/modularizing-your-graphql-schema-code-d7f71d5ed5f2
[3]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/