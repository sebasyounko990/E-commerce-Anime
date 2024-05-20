// usuarios//

$(document).ready(function(){

    $('.btnact').on('click',function(){
        let btn=$('.btnact').index(this);

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
        let pr=precve.val();


        $.ajax({
            type:"POST",
            url:'/actuali',
            data:{
                dd:d,uu:u,cc:c,rr:r,ee:e,ss:pr

                

            }
            
        })
        
    })
})





