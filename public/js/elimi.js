// USUARIOS//

$(document).ready(function(){

    $('.btneli').on('click',function(){
    let btn=$('.btneli').index(this);
    
    let ced=$('.codpro').eq(btn);
   
    let d=ced.val();

    $.ajax({
        type:"POST",
        url:'/elimi',
        data:{
            dd:d

        }
    });


    });
});









