const usersService = require('../services/usersService')

const getAll = (req,res) => {
    usersService.SelectAll().then(Data => {      
        res.setHeader("Content-Type","application/json")
        res.writeHead(200)
        res.end(JSON.stringify(Data))
    }).catch(err => { console.log(err) })
}

const getOne = (req,res) => {
    const Id = req.params.Id
    if(!Id){
        res.status(400).json({status: 400, message: "Id must be present"})
    }
    else if(isNaN(Id)){
        res.status(400).json({status: 400, message: "Id must be numeric"})
    }
    else if((Id<0) || (Id>19)){
        res.status(400).json({status: 400, message: "Invalid Id user"})
    }
    else{
        usersService.SelectOne(Id).then(Data => {      
            res.setHeader("Content-Type","application/json")
            res.writeHead(200)
            res.end(JSON.stringify(Data))
        }).catch(err => { console.log(err) })
    }
}

const getPartA = (req,res) => {
    usersService.SolutionPartA().then(Data => {      
        res.setHeader("Content-Type","application/json")
        res.writeHead(200)
        res.end(JSON.stringify(Data))
    }).catch(err => { console.log(err) })
}

const getPartB = (req,res) => {
    usersService.SolutionPartB().then(Data => {      
         res.setHeader("Content-Type","application/json")
         res.writeHead(200)
         res.end(JSON.stringify(Data))
     }).catch(err => { console.log(err) })
 }

module.exports = { getAll, getOne, getPartA, getPartB }