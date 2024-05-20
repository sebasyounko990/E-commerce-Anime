const express = require('express');
const controller = require('../controller/controller')
const rutas = express.Router();



// ingreso y registro de sesion //
rutas.get('/',controller.index);
rutas.post('/login',controller.login)
rutas.post('/insertarusuario',controller.insertarusu)



// renderizados //
rutas.get('/registrarce',controller.regis);
rutas.get('/menu',controller.menu);
rutas.get('/usuarios',controller.usuarios);
rutas.get('/clientes',controller.clientes);
rutas.get('/reportes',controller.reportes);
rutas.get('/proveedores',controller.proveedores);
rutas.get('/productos',controller.productos);
rutas.get('/ventas',controller.ventas);
rutas.get('/detalles',controller.detalles);
// fin de renderizados //



// bloque de usuarios ------------------------------------------>
rutas.get('/tabla-1',controller.tb_usuarios);
rutas.post('/ingresar',controller.insertar_usuarios);
rutas.post('/actualizar',controller.actualizar_usuarios);
rutas.post('/eliminar',controller.eliminar_usuarios);
rutas.post('/c',controller.consultar_usuarios);


// bloque de clientes ------------------------------------------>
rutas.get('/tabla-2',controller.tb_clientes);
rutas.post('/ingresa',controller.insertar_cliente);
rutas.post('/actualiza',controller.actualizar_cliente);
rutas.post('/elimina',controller.eliminar_cliente);
rutas.post('/co',controller.consultar_clientes);


// bloque de proveedores------------------------------------------>
rutas.get('/tabla-3',controller.tb_proveedores);
rutas.post('/ingres',controller.insertar_proveedores);
rutas.post('/actualiz',controller.actualizar_proveedores);
rutas.post('/elimin',controller.eliminar_proveedores);
rutas.post('/con',controller.consultar_proveedores);


// bloque de productos------------------------------------------>
rutas.get('/tabla-4',controller.tb_productos);
rutas.post('/ingre',controller.insertar_productos);
rutas.post('/actuali',controller.actualizar_productos);
rutas.post('/elimi',controller.eliminar_productos);
rutas.post('/cons',controller.consulta_productos);



// bloque de ventas------------------------------------------>
rutas.get('/tabla-5',controller.tb_ventas);

rutas.get('/ventas',controller.ventas);   

rutas.get('/productosven/:cc',controller.consultaproductor);

rutas.post('/insertarventa/:indi',controller.insertarventa1);




rutas.get('/cerrar',controller.cerrar);


module.exports=rutas;