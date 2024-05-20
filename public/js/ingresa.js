
// usuarios//

$(document).ready(function(){

    $('.btning').on('click',function(){
        let btn=$('.btning').index(this);

        let doc=$('.ced').eq(btn);
        let usu=$('.direccli').eq(btn);
        let clave=$('.emailcli').eq(btn);
        let rol=$('.nomcli').eq(btn);
        let estad=$('.telcli').eq(btn);


        let d=doc.val();
        let u=usu.val();
        let c=clave.val();
        let r=rol.val();
        let e=estad.val();


        $.ajax({
            type:"POST",
            url:'/ingresa',
            data:{
                dd:d,uu:u,cc:c,rr:r,ee:e

                

            }
            
        })
        
    })
})
