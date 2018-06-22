var mongoose = require('mongoose')

var reservationSchema = mongoose.Schema({
    Make: String,
    Model : String,
    Year : String,
    Type : String,
    Features : String,
    PurchaseDate : Date
   });
   module.exports.Consumer = mongoose.model('Consumer', reservationSchema);
