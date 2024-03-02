const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LawyerSchema = new Schema({
    FirstName : String ,
    LastName : String ,
    Email : String,
    Image : String , 
    Address : String ,
    State : String , 
    Pincode : Number ,
    PhoneNumber : Number , 
    Experience : String , 
    Rating : Number,
    Resume : String ,
    Description : String ,
    Specialization : String
});

module.exports = mongoose.model('Lawyer' , LawyerSchema);