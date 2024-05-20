// usuarios//

$(document).ready(function(){

    $('.btnact').on('click',function(){
        let btn=$('.btnact').index(this);

        let doc=$('.ced').eq(btn);
        let usu=$('.emailusu').eq(btn);
        let clave=$('.nomusu').eq(btn);
        let rol=$('.password').eq(btn);
        let estad=$('.usu').eq(btn);


        let d=doc.val();
        let u=usu.val();
        let c=clave.val();
        let r=rol.val();
        let e=estad.val();


        $.ajax({
            type:"POST",
            url:'/actualizar',
            data:{
                dd:d,uu:u,cc:c,rr:r,ee:e

                

            }
            
        })
        
    })
})



function ACTUALIZAR() {
    alert("A actualizado correctamente su dato");
}



