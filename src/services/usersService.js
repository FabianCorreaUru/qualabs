const database = require('../database/users')

async function SelectAll(){
	try{ 
        return await getAllUsers() 
    }
    catch(error){ 
        return error 
    }
}

async function SelectOne(Id){
	try{ 
        return await getOneUser(Id) 
    }
    catch(error){ 
        return error 
    }
}

async function SolutionPartA(){
	try{ 
        return await getSolutionPartA() 
    }
    catch(error){ 
        return error 
    }
}

async function SolutionPartB(){
	try{ 
        return await getSolutionPartB() 
    }
    catch(error){ 
        return error 
    }
}

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        try{
            resolve(database.getAllUsers())
        }catch(err){
            reject(err)
        }
	})
}

const getOneUser = (Id) => {
    return new Promise((resolve, reject) => {
        try{
            resolve(database.getOneUser(Id))
        }catch(err){
            reject(err)
        }
	})
}

const getSolutionPartA = () => {
    return new Promise((resolve, reject) => {
        try{
            resolve(database.getSolutionPartA())
        }catch(err){
            reject(err)
        }
	})
}

const getSolutionPartB = () => {
    return new Promise((resolve, reject) => {
        try{
            resolve(database.getSolutionPartB())
        }catch(err){
            reject(err)
        }
	})
}

module.exports = { SelectAll, SelectOne, SolutionPartA, SolutionPartB }