const mysql = require('mysql2');

connection= mysql.createConnection({
    host:'database-1.cmkott3b64cq.us-east-1.rds.amazonaws.com',
    user:'Vicente',
    password:'vicente75198234',
    database:'registroMedico',
    port:'3306'
});

connection.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log('conectado a la base de datos')
    }
})

module.exports= connection;

