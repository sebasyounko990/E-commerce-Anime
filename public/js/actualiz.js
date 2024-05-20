
// PROVEEDORES//

$(document).ready(function(){

    $('.btnact').on('click',function(){
        let btn=$('.btnact').index(this);

        let doc=$('.nitprov').eq(btn);
        let usu=$('.ciudadprov').eq(btn);
        let clave=$('.direcprov').eq(btn);
        let rol=$('.nomprov').eq(btn);
        let estad=$('.telprov').eq(btn);


        let d=doc.val();    
        let u=usu.val();
        let c=clave.val();
        let r=rol.val();
        let e=estad.val();


        $.ajax({
            type:"POST",
            url:'/actualiz',
            data:{
                dd:d,uu:u,cc:c,rr:r,ee:e

                

            }
            
        })
        
    })
})