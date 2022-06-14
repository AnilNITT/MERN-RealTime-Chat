const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://localhost:27017/MERN_CHAT`, ()=> {
  console.log('connected to mongodb')
})
