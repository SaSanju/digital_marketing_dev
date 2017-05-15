var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recordSkema = new Schema({
    companyname: String,
    personname: String,
    contactnumber: Number,
    email: String,
    url: String
});

module.exports = mongoose.model('Todo', recordSkema);