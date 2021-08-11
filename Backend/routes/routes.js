const { response } = require('express')
const express =require('express')
const router = express.Router()
const signInTemplateCopy = require('../models/SignInModels')

router.post('/signin',(req,res)=>{
    const signedInUser = new signInTemplateCopy({
       username: req.body.username,
       email:req.body.email,
       password:req.body.password,
       confirm:req.body.confirm
    })
    signedInUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })
})


module.exports = router