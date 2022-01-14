const router = require('Express').Router();
const req = require('express/lib/request');
let Comment = require('../models/comments.model')

router.route('/').get((req, res)=>{
    Comment.find()
    .then(comments => res.json(comments))
    .catch(err=> res.status(400).json('Error: '+ err));
});

router.route('/:id').delete((req, res) => {
    Comment.findByIdAndDelete(req.params.id)
      .then(() => res.json('Comment  deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post((req, res) =>{
    const name_ = req.body.name_;
    const emailId = req.body.emailId;
    const comment = req.body.comment;

    const newComment = new Comment({
        name_,
        emailId,
        comment,
    });

    newComment.save()
    .then(() => res.json('Comment Added!'))
    .catch(err => res.status(400).json('Error: '+ err));

})

module.exports = router;
