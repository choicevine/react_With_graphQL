const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

// Replace with your mongoLab URI
//  mongodb+srv://<username>:<password>@cluster0-4dbth.mongodb.net/test?retryWrites=true&w=majority
// const MONGO_URI = 'mongodb+srv:dotman:jesus1@cluster0-4dbth.mongodb.net/test?retryWrites=true&w=majority';
// if (!MONGO_URI) {
//   throw new Error('You must provide a MongoLab URI');
// }

// mongoose.Promise = global.Promise;
// mongoose.connect(MONGO_URI);
// mongoose.connection
//     .once('open', () => console.log('Connected to MongoLab instance.'))
//     .on('error', error => console.log('Error connecting to MongoLab:', error));
//'mongodb+srv:dotman:jesus1@cluster0-4dbth.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect('mongodb://brad:rook@gloriousdb-shard-00-00-p2gnu.mongodb.net:27017,gloriousdb-shard-00-01-p2gnu.mongodb.net:27017,gloriousdb-shard-00-02-p2gnu.mongodb.net:27017/test?ssl=true&replicaSet=GloriousDB-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
console.log("Connected successfully!");
});
//mongodb://brad:rook@gloriousdb-shard-00-00-p2gnu.mongodb.net:27017,gloriousdb-shard-00-01-p2gnu.mongodb.net:27017,gloriousdb-shard-00-02-p2gnu.mongodb.net:27017/test?ssl=true&replicaSet=GloriousDB-shard-0&authSource=admin&retryWrites=true&w=majority


app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
