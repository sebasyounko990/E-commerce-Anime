$(document).ready(function(){

        $('.SIGUIENTE1').on('click',function(){

        var get = document.getElementById('producto1').value;
        var nom = document.getElementById('nombre1');
        var val = document.getElementById('valor1');
        var iva = document.getElementById('iva1');

            $.ajax({

                type:"GET",
                url: "/productosven/"+get,
                success: function (cedcli){
                    console.log(cedcli)
                    console.log(cedcli[0].nompro)

                nom.value = cedcli[0].nompro;
                val.value = cedcli[0].preccom;
                iva.value = cedcli[0].ivacom;


                },
            })
        })

        $('.SIGUIENTE2').on('click',function(){

            var get = document.getElementById('producto2').value;
            var nom = document.getElementById('nombre2')
            var val = document.getElementById('valor2');
            var iva = document.getElementById('iva2');
            $.ajax({

                type:"GET",
                url: "/productosven/"+get,
                contentType: "application/json",
                success: function (cedcli){
                    console.log(cedcli)
                    console.log(cedcli[0].nompro)
                nom.value= cedcli[0].nompro;
                val.value= cedcli[0].preccom;
                iva.value= cedcli[0].ivacom;
                },
            })
        })

        $('.SIGUIENTE3').on('click',function(){

            var get = document.getElementById('producto3').value;
            var nom = document.getElementById('nombre3')
            var val = document.getElementById('valor3');
            var iva = document.getElementById('iva3');
            $.ajax({

                type:"GET",
                url: "/productosven/"+get,
                contentType: "application/json",
                success: function (cedcli){
                    console.log(cedcli)
                    console.log(cedcli[0].nompro)
                nom.value= cedcli[0].nompro;
                val.value= cedcli[0].preccom;
                iva.value= cedcli[0].ivacom;
                },
            })
        })

        function valorventas(event){
            var get1 = document.getElementById('valor1').value;
            var get2 = document.getElementById('valor2').value;
            var get3 = document.getElementById('valor3').value;
            v1 = parseInt(get1);
            v2 = parseInt(get2);
            v3 = parseInt(get3);
            let resul=v1+v2+v3;
            document.getElementById("tventa").value = resul;
            totival();
        }

        $('.CONTINUA1').on('click',function(){
            var get1 = parseInt(document.getElementById('valor1').value)
            var can1 = parseInt(document.getElementById('cantidad1').value);
            var get = document.getElementById('valor1');
    
                var res = get1*can1;
                get.value = String(res);
    
        })
    
        $('.CONTINUA2').on('click',function(){
            var get2 = document.getElementById('valor1').value;
            var get3 = document.getElementById('valor3').value;
            var get1 = document.getElementById('valor2').value;
            
            var can1 = document.getElementById('cantidad2').value;
            var get = document.getElementById('valor2');
    
                var res = get1*can1;
                get.value = res;
        })
    
        $('.CONTINUA3').on('click',function(){
    
            var get1 = document.getElementById('valor3').value;
            var can1 = document.getElementById('cantidad3').value;
            var get = document.getElementById('valor3');
                var res = get1*can1;
                get.value = res;
        })

        function ivas(event){
            var iva1= parseInt(document.getElementById("iva1").value);
            var iva2= parseInt(document.getElementById("iva2").value);
            var iva3= parseInt(document.getElementById("iva3").value);
            var resul= (iva1+iva2+iva3)/3;
            document.getElementById("iva").value = resul;
            totival();
        }

        function totival(){
            var tventa = parseInt(document.getElementById("tventa").value);
            var iva = parseInt(document.getElementById("iva").value)/100;
            var response = (tventa*iva)+tventa;
            document.getElementById("ivato").value = response;
        }

        // $('.TOTAL').on('click',function(){


        //     var get1 = document.getElementById('valor1').value;
        //     var get2 = document.getElementById('valor2').value;
        //     var get3 = document.getElementById('valor3').value;
        //     v1 = parseInt(get1);
        //     v2 = parseInt(get2);
        //     v3 = parseInt(get3);
        //     let resul=v1+v2+v3;
        //     document.getElementById("tventa").value = resul;
        //     totival();
       
        // })
    
        // $('.TOTAL').on('click',function(){
        //     var iva1= parseInt(document.getElementById("iva1").value);
        //     var iva2= parseInt(document.getElementById("iva2").value);
        //     var iva3= parseInt(document.getElementById("iva3").value);
        //     var resul= (iva1+iva2+iva3)/3;
        //     document.getElementById("iva").value = resul;
        //     totival();
        // })



        $('.COMPRAR').on('click',function(){

        let cedula = document.getElementById("cedcli").value;
        let indi = document.getElementById("indicativo").value;
        let pro1 = document.getElementById("producto1").value;
        let pro2 = document.getElementById("producto2").value;
        let pro3 = document.getElementById("producto3").value;
        let nom1 = document.getElementById("nombre1").value;
        let nom2 = document.getElementById("nombre2").value;
        let nom3 = document.getElementById("nombre3").value;
        let can1 = document.getElementById("cantidad1").value;
        let can2 = document.getElementById("cantidad2").value;
        let can3 = document.getElementById("cantidad3").value;
        let iva1 = document.getElementById("iva1").value;
        let iva2 = document.getElementById("iva2").value;
        let iva3 = document.getElementById("iva3").value;
        let valor1 = document.getElementById("valor1").value;
        let valor2 = document.getElementById("valor2").value;
        let valor3 = document.getElementById("valor3").value;
        let tventa = document.getElementById("tventa").value;
        let ivat = document.getElementById("iva").value;
        let ivato = document.getElementById("ivato").value;

        $.ajax({
            type: "POST",
            url: "/insertarventa/"+indi,
            data:{
                cc:cedula,p1:pro1,p2:pro2,p3:pro3,n1:nom1,n2:nom2,n3:nom3,
                ca1:can1,ca2:can2,ca3:can3,iv1:iva1,iv2:iva2,iv3:iva3,
                v1:valor1,v2:valor2,v3:valor3,tve:tventa,iva:ivat,tol:ivato

            },

        })
        console.log(cc,p1,p2,p3,n1,n2,n3,ca1,ca2,ca3,iv1,iva2,iva3,v1,v2,v3,tve,iva,tol)

    });
    
   

    var totivalvar = document.getElementById("iva");

    totivalvar.onfocus = ivas;

    var valventa = document.getElementById("tventa");

    valventa.onfocus = valorventas;




});