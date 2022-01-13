const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: {type: String, required: true},    
    lectures: {type: Number, required: true},    
    students: {type: Number, required: true},  
})

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;