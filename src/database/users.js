const fs = require('fs')
const path = require('path')
const dir = './src/database/users/'

const getAllUsers = () => {
    var users = []
    try {
        files = fs.readdirSync(dir,'utf8').sort(function(a,b){ return a.length - b.length }).filter(name => path.extname(name) === '.json').map(name => path.join(dir,name))
        files.forEach(function(file){
            users.push(fs.readFileSync(file,'utf8'))
        })
        return JSON.parse(JSON.stringify(users))
    } catch (err) {
        console.error(err)
    }
}

const getOneUser = (Id) => {
    try {
        const data = fs.readFileSync(dir+'u'+Id+'.json','utf8')
        return JSON.parse(data)
    } catch (err) {
        console.error(err)
    }
}

const getSolutionPartA = () => {    
    var result = {}
    var authModuleCollection = {}
    var contentModuleCollection = {}
    try {
        files = fs.readdirSync(dir,'utf8').sort(function(a,b){ return a.length - b.length }).filter(name => path.extname(name) === '.json').map(name => path.join(dir,name))
        files.forEach(function(file){
            let node = './'+path.basename(file)
            let user = JSON.parse(fs.readFileSync(file,'utf8'))        
            let contentModule = user.provider.content_module
            let authModule = user.provider.auth_module   
            if(!(contentModule in contentModuleCollection)){
                contentModuleCollection[contentModule] = []
            }
            if(!(authModule in authModuleCollection)){
                authModuleCollection[authModule] = []
            }            
            contentModuleCollection[contentModule].push(node)
            authModuleCollection[authModule].push(node)
        })        
        result['auth_module'] = sortObject(authModuleCollection)
        result['content_module'] = sortObject(contentModuleCollection)
        return result
    } catch (err) {
        console.error(err)
    }
}

const getSolutionPartB = () => {    
    var modulesCollection = []
    var usersCollection = []
    try {
        files = fs.readdirSync(dir,'utf8').sort(function(a,b){ return a.length - b.length }).filter(name => path.extname(name) === '.json').map(name => path.join(dir,name))
        files.forEach(function(file){
            let node = './'+path.basename(file)
            let user = JSON.parse(fs.readFileSync(file,'utf8'))     
            let contentModule = user.provider.content_module
            let authModule = user.provider.auth_module
            if(!modulesCollection.includes(authModule)){
                modulesCollection.push(authModule)
                if(!usersCollection.includes(node)){
                    usersCollection.push(node)
                }
            }
            if(!modulesCollection.includes(contentModule)){
                modulesCollection.push(contentModule)
                if(!usersCollection.includes(node)){
                    usersCollection.push(node)
                }
            }
        })     
        usersCollection.sort((a, b) => a - b)
        usersCollection.sort(function(a,b){ return a.length - b.length })
        return usersCollection
    } catch (err) {
        console.error(err)
    }
}

const sortObject = (object) => { 
  const ordered = Object.keys(object).sort().reduce(
    (obj, key) => { 
      obj[key] = object[key]; 
      return obj;
    }, {}
  )
  return ordered
}

module.exports = { getAllUsers, getOneUser, getSolutionPartA, getSolutionPartB }
