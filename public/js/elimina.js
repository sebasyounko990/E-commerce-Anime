
// CLIENTES//

$(document).ready(function(){

    $('.btneli').on('click',function(){
    let btn=$('.btneli').index(this);
    
    let cli=$('.ced').eq(btn);
   
    let d=cli.val();

    $.ajax({
        type:"POST",
        url:'/elimina',
        data:{
            aa:d

        }
    });


    });
});