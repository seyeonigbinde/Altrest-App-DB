const express = require('express')
const helpers = require('./users_model')
const restricted = require('../middlewares/restricted')

const User = require('../users/users_model')

const router = express.Router()

router.get('/users', (req, res, next) => {
  helpers.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(next); 
});


router.get('/user/:id', (req, res) => {
  const user_id = req.params.id 
  User.findById(user_id)
  .then(user => {
      res.json(user);
  })
  .catch(err => res.status(500).json({ 
      message: err.message, 
      stack: err.stack 
  }))
});

router.get('/maintenance', (req, res, next) => {
  helpers.findRequest()
    .then(maintenance => {
      res.status(200).json(maintenance)
    })
    .catch(next); 
});

router.get('/maintenance/:id', (req, res) => {
  const maintenance_id = req.params.id 
  User.findRequestById(maintenance_id)
  .then(maintenance => {
      res.json(maintenance);
  })
  .catch(err => res.status(500).json({ 
      message: err.message, 
      stack: err.stack 
  }))
});

router.post('/maintenance', (req, res, next) => {
  User.addRequest(req.body)
    .then(newRequest => {
      res.status(201).json(newRequest);
    })
    .catch(next);
})

router.delete("/maintenance/:id", (req, res, next) => {
  const maintenance_id = req.params.id 
  User.deleteRequest(maintenance_id)
    .then((count) => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "maintenance not found" });
      }
    })
    .catch(next);
});

module.exports = router
