const express = require('express')
const router = express.Router()
const usersController = require("../controllers/usersController")

router
.get("/", usersController.getAll)
.get("/user/:Id", usersController.getOne)
.get("/partA", usersController.getPartA)
.get("/partB", usersController.getPartB)

module.exports = router