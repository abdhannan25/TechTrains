const router = require('Express').Router();
const req = require('express/lib/request');
let Faculty = require('../models/faculty.model')

router.route('/').get((req, res)=>{
    Faculty.find()
    .then(faculty => res.json(faculty))
    .catch(err=> res.status(400).json('Error: '+ err));
});
module.exports = router;
