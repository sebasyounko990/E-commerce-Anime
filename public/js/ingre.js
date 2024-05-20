
// PRODUCTOS//

$(document).ready(function(){

    $('.btning').on('click',function(){
        let btn=$('.btning').index(this);

        let doc=$('.codpro').eq(btn);
        let usu=$('.ivacom').eq(btn);
        let clave=$('.nitprov').eq(btn);
        let rol=$('.nompro').eq(btn);
        let estad=$('.preccom').eq(btn);
        let precve=$('.precven').eq(btn);


        let d=doc.val();
        let u=usu.val();
        let c=clave.val();
        let r=rol.val();
        let e=estad.val();
        let p=precve.val();


        $.ajax({
            type:"POST",
            url:'/ingre',
            data:{
                dd:d,uu:u,cc:c,rr:r,ee:e,pp:p

                

            }
            
        })
        
    })
})
