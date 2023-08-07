const express = require("express")
const router = express.Router()
//const { nanoid } = require("nanoid")

const idLenght = 8

router.get("/",(req,res) => {
    const sistemas = req.app.db.get("sistemas")

//    console.log(sistemas)

    res.send(sistemas)
})

module.exports = router