const express = require('express');
const controlUser=require("../controllers/users");
const router = express.Router()

router.get('/',(req,res,next)=>{
    const data =controlUser.find({}).then((data)=>{
    res.json(data)
})});

router.get("/:id",(req,res,next)=>{
    const {id}=req.params;
    controlUser.findOne(id)
    .then((user)=>{
        res.json(user);
    })
    .catch(()=>{
        res.status(404).json({"err":"in valid id"})
    })
})

router.post("/",(req,res,next)=>{
    controlUser.create(req.body)
    .then((user)=>{
        res.json(user);
    }).catch((err)=>{
        res.status(422).send(err.message)
    })
})

router.patch("/:id", (req, res, next) => {
    const { id } = req.params;
    controlUser.edit(id, req.body)
        .then((response) => {
            res.json(response)
        })
        .catch(err => {
            res.status(400).end()
        })
})

router.delete("/:id",(req,res,next)=>{
    const id=req.params
    controlUser.Delete(id).then(()=>{
      res.status(200).end()
    }).catch((err)=>{
        res.status(422).end()
    })
})

module.exports = router ;