const router = require('Express').Router();
const req = require('express/lib/request');
let Student = require('../models/student.model')

router.route('/').get((req, res)=>{
    Student.find()
    .then(students => res.json(students))
    .catch(err=> res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) =>{
    const studName = req.body.studName;
    const emailId = req.body.emailId;
    const dob = req.body.dob;
    const gender = req.body.gender;
    const city = req.body.city;
    const course = req.body.course;

    const newStudent = new Student({
        studName,
        emailId,
        dob,
        gender,
        city,
        course,
    });

    newStudent.save()
    .then(() => res.json('Student Added!'))
    .catch(err => res.status(400).json('Error: '+ err));

})

module.exports = router;
