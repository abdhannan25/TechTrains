const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name_: {type: String, required: true},    
    emailId: {type: String, required: true},     
    comment: {type: String, required: true},
})

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;