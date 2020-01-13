var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID

const repository = require('./repository')

/**
 * FETCH ALL records for a given collection
 */ 
module.exports.getAllCategories = (req, res) => {    
   repository.getAllCategories(req,res)
  }