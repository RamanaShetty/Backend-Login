const pool = require('../DataBase/db')
const queries = require('../DataBase/Queries')


const regi_Data = (req,res)=>{
    const {first,last,email,pass} = req.body
    pool.query(queries.insert_data,[first,last,email,pass],(error,result)=>{
        if(error) throw error
        else
        {
            res.send("Data insertion successful..")

        }
    })
}

const login_Data = (req,res)=>{
    const {email,pass} = req.body
    pool.query(queries.check_data,[email,pass],(error,result)=>{
        if(error) throw error
        else
        {
            res.send("Data is present, continue with the login...")
        }
    })
}

module.exports = {
    regi_Data,
    login_Data
}