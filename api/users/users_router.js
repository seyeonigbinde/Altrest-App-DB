const express = require('express')
const helpers = require('./users_model')

const User = require('../users/users_model')

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

router.get('/maintenance', (req, res, next) => {
  helpers.findMaintenance()
    .then(maintenance => {
      res.status(200).json(maintenance)
    })
    .catch(next); 
});

router.post('/maintenance', (req, res, next) => {

  const { title, request, request_image, urgency } = req.body
  User.addRequest({ title, request, request_image, urgency  })
    .then(newRequest => {
      res.status(201).json(newRequest);
    })
    .catch(next);
})



module.exports = router
