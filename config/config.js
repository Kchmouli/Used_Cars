var mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb+srv://Mouli:Mouli@cluster0-t490o.mongodb.net/test?retryWrites=true')
 .then(() => {
 console.log("DB connected")
 }, err => {
 console.log("DB error")
 }
 );
