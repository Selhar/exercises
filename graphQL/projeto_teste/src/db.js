import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connection.on('open', () => console.log('Connected to mongo server'));
mongoose.connection.on('error', (error) => console.log('Could not connect. \nError: ' + error));
mongoose.connect('mongodb://localhost:27017/test_project');