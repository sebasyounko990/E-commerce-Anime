const mysql = require('mysql');
module.exports=()=>
mysql.createConnection({//creamos la conexion de nuestra base de datos traida de xamp-phpmyadmin
    host:'localhost',
    user:'root',//nombre del usuario en xamp
    password:'',//contraseña usuario
    database:'tienda'//nombre de la base de datos que queremos conectar
});