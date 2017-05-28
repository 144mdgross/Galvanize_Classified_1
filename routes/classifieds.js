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
    .insert([ req.body ])
      .returning(['id', 'title', 'description', 'price', 'item_image'])
      .then(post => res.json(post[0]))
})

router.patch('/:id', (req, res, next) => {
  knex('classifieds')
    .where('id', req.params.id)
    .update(req.body)
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .then(updated => res.json(updated[0]))
})

router.delete('/:id', (req, res, next) => {
  knex('classifieds')
    .where('id', req.params.id)
    .first()
    .del()
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .then(del => res.json(del[0]))
})

module.exports = router;
