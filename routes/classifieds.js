
'use strict';

const express = require('express');
const knex = require('../knex')

const router = express.Router();

router.get('/', (req, res, next) => {
  knex('classifieds')
  .select('id', 'title', 'description', 'price', 'item_image')
  .then(posts => {
    res.json(posts)
  })
})

router.get('/:id', (req, res, next) => {
  knex('classifieds')
    .select('id', 'title', 'description', 'price', 'item_image')
    .where('id', req.params.id)
    .then(post => {
      res.json(post[0])
    })
})

router.post('/', (req, res, next) => {
  knex('classifieds')
    .insert([{
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      item_image: req.body.item_image
    }], '*')
      .then(post => {
        let newPost = {
          id: post[0].id,
          title: post[0].title,
          description: post[0].description,
          price: post[0].price,
          item_image: post[0].item_image
        }
        res.json(newPost)
      })
})

module.exports = router;
