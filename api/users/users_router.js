const express = require('express')
const helpers = require('./users_model')

const router = express.Router()

router.get('/users', (req, res, next) => {
  helpers.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(next); 
});

router.get('/users/:id', (req, res, next) => {
  helpers.findById(res.params.id)
    .then(users => {
      res.status(200).json(users)
    })
    .catch(next); 
});


module.exports = router
