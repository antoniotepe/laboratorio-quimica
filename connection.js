
const mysql = require('mysql2');


// let config = {
// 	user: 'db_a6478c_laboratoriov2_admin',
// 	password: 'razors1805',
// 	server: 'sql8010.site4now.net',
// 	database: 'db_a6478c_laboratoriov2',
// 	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
// };


// let config = {
// 	user: 'a6478c_laborat',
// 	password: 'razors1805',
// 	host: 'mysql5050.site4now.net',
// 	database: 'db_a6478c_laborat',
// 	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
// };

// let config = {
//     user: 'a6478c_laborat',
//     password: 'razors1805',
//     host: 'mysql5050.site4now.net',
//     database: 'db_a6478c_laborat',
//     waitForConnections: true,
//     connectionLimit: 10,  // Ajustar según el límite del servidor
//     queueLimit: 0
// };



// const sql = require('mssql');

// let execute = {
// 	Query : (res,sqlqry)=>{	
		
		
// 		try {
// 		  const pool1 = new sql.ConnectionPool(config, err => {
// 			new sql.Request(pool1)
// 			.query(sqlqry, (err, result) => {
// 				if(err){
// 					console.log(err.message);
// 					res.send('error')
// 				}else{
// 					res.send(result);
// 				}					
// 			})
// 			sql.close();  
// 		  })
// 		  pool1.on('error', err => {
// 			  console.log('error sql = ' + err);
// 			  sql.close();
// 			  res.send('error');
// 		  })
// 		} catch (error) {
// 			console.log(error);
// 		  res.send('error')   
// 		  sql.close();
// 		}
// 	}
// }

// let config = {
//     user: 'a6478c_laborat',
//     password: 'razors1805',
//     host: 'mysql5050.site4now.net',
//     database: 'db_a6478c_laborat',
//     waitForConnections: true,
//     connectionLimit: 100,  // Ajustar según el límite del servidor
//     queueLimit: 0
// };

let config = {
    user: 'a6478c_laborat',
    password: 'razors1805',
    host: 'mysql5050.site4now.net',
    database: 'db_a6478c_laborat',
    waitForConnections: true,
    connectionLimit: 100,  // Ajustar según el límite del servidor
    queueLimit: 0
};

let configx = {
	user: 'iEx',
	password: 'iEx',
	server: 'DESKTOP-3L7R1E4\\SQL22',
	database: 'laboratorio',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};





// Crear el pool de conexiones
const pool = mysql.createPool(config);

let execute = {
    Query: (res, sqlqry) => {
        // Obtener una conexión del pool
        pool.getConnection((err, connection) => {
            if (err) {
                console.error('Error al obtener la conexión:', err.message);
                res.status(500).send('Error al conectar a la base de datos');
                return;
            }

            // Ejecutar la consulta
            connection.query(sqlqry, (err, results) => {
                // Liberar la conexión de vuelta al pool
                connection.release();

                if (err) {
                    console.error('Error en la consulta:', err.message);
                    res.status(500).send('Error en la consulta');
                } else {
                    res.send(results);
                }
            });
        });
    }
};

// Manejar errores en el pool
pool.on('error', (err) => {
    console.error('Error en el pool de conexiones:', err.message);
});

module.exports = execute;
