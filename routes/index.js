const express = require('express');
const furnitures = require('../models/furnitures.js')
const router = express.Router();

// get furniture items
router.get('/', (request, result, next) => {
  furnitures.find({}, (error, furnitureResult) => {
    console.log(furnitureResult)
    result.render('index', {
      title: 'Furniture AR',
      data: furnitureResult
    })
  })
})

// get furniture detail
router.get('/:id', (request, result, next) => {
  furnitures.findOne({'id': request.params.id}, (error, furnitureResult) => {
    console.log(furnitureResult)
    result.render('detail', {
      title: 'Furniture AR | Details',
      data: furnitureResult
    })
  })
})

module.exports = router;
