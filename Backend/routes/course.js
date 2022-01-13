const router = require('Express').Router();
const req = require('express/lib/request');
let Course = require('../models/courses.model')

router.route('/').get((req, res)=>{
    Course.find()
    .then(courses => res.json(courses))
    .catch(err=> res.status(400).json('Error: '+ err));
});


module.exports = router;
