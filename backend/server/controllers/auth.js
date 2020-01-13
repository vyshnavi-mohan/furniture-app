const jwt = require('jsonwebtoken');

var mongodb = require('mongodb')

// var ObjectID = mongodb.ObjectID
var MongoClient = require('mongodb').MongoClient

const repository = require('./repository')
//const config = require('../config/auth')
const con = 'mongodb://localhost:27017/furniture'
//const config = require('../config/auth')

const secret = '34500';

/**
 * @api {post} / Authentication
 * @apiName LogIn
 * @apiGroup Auth
 *
 * @apiParam {String} username Users unique identifier.
 * @apiParam {String} password Users password.
 *
 * @apiSuccess {JWT} token Authorization token for the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "eyJhbGciOiJIUzI1N...",
 *     }
 * 
 * @apiError InvalidUserOrPass Invalid username or password.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "InvalidUserOrPass"
 *     }
 *
 * @apiSampleRequest /login
 */
module.exports.logIn = (req, res) => {
  condition = {
    username: req.body.username
  }
  MongoClient.connect(con, function (err, db) {
    if (err) throw err

    db.collection('signup').findOne(condition, function (err, result) {
      console.log(err, JSON.stringify(result))
      if (err) {
       
        const resultObj = {
          error: true
        }
        err.send(resultObj)
      }
      else if (result  &&  result != 'null') {
        console.log(JSON.stringify(result));
        // const match = await bcrypt.compare(req.body.password, result.password);
        if (result.password && req.body.password === result.password) {
          var jwtBearerToken = jwt.sign(
            {
              userId: result._id,
              username: result.username
            },
            secret,
            {
              algorithm: 'HS256',
              expiresIn: 9999,
              issuer: 'Xpress-Auth',
              subject: 'Authenticate & Authorize'
            }
          );
          res.send({
            'userId': result._id,
            'username': result.username,
            'token': jwtBearerToken
          })

        } else {
          const resultObj = {
            error: true
          }
          res.send(result)
        }

      } else {
        const resultObj = {
          error: true
        }
        res.send(resultObj)
      }

    })
  })

}


module.exports.signupdoc = (req, res) => {
  document =  {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username:req.body.username,
    password: req.body.password,
    phone:req.body.phone
  }
       
  repository.signup(req, res, 'signup', document)
}