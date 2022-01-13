const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studName: {type: String, required: true},    
    emailId: {type: String, required: true},    
    dob: {type: String, required: true},    
    gender: {type: String, required: true},        
    city: {type: String, required: true}, 
    course: {type: String, required: true},
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;