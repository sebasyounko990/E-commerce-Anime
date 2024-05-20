
// usuarios//

$(document).ready(function(){

    $('.btning').on('click',function(){
        let btn=$('.btning').index(this);

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
            url:'/ingresar',
            data:{
                dd:d,uu:u,cc:c,rr:r,ee:e

                

            }
            
        })

        // mesaje de alert //
        
        

    })
})


function show_alert() {
    alert("a ingresado correctamente su dato");
}