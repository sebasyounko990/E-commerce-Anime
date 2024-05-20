// RPVEEDORES//

$(document).ready(function(){

    $('.btneli').on('click',function(){
    let btn=$('.btneli').index(this);
    
    let ced=$('.nitprov').eq(btn);
   
    let d=ced.val();

    $.ajax({
        type:"POST",
        url:'/elimin',
        data:{
            dd:d

        }
    });


    });
});









