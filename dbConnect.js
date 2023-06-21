const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ansh1999:011Ansh@cluster0.4dyn7fc.mongodb.net/AnshMoney',{useNewUrlParser : true , useUnifiedTopology : true}) 
const connection = mongoose.connection

connection.on('error',err=> console.log(err)) 

connection.on('connected' , ()=> console.log('MongoDB Connection successfull')) 