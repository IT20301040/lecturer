const mongoose = require('mongoose');


const LecturerSchema = new mongoose.Schema({
    FirstName :{
        type : String,
        required:true
    },
    LastName:{
        type: String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type : String,
        required:true
    },
    PhoneNumber:{
        type: String,
        required:true
    },
    Address:{
        type: String,
        required:true
    },
    BirthDay:{
        type: Date,
        required:true
    },
    Description:{
        type: String,
        required:true
    },
   

});

module.exports = mongoose.model('Lecturer',LecturerSchema);