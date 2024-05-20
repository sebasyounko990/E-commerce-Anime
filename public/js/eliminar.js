// USUARIOS//

$(document).ready(function(){

    $('.btneli').on('click',function(){
    let btn=$('.btneli').index(this);
    
    let ced=$('.ced').eq(btn);
   
    let d=ced.val();

    $.ajax({
        type:"POST",
        url:'/eliminar',
        data:{
            dd:d

        }
    });


    });
});



function ELIMINAR() {
    alert("A eliminado correctamente su dato");
}






