var con, pas;        
   
$(document).ready(function (){
    $(".botones").button();
    pas=0;
    contraseña();   
});
function contraseña()
{
    $("#verde").click(function() {
        con= parseInt($("#cuadro").val());
        if(pas===0)
        {
            if(con===123)
            {
               $("#cuadro").val(0);  
            }
            else
            {
                ("#cuadro").val(10);
            }
        }
        else
    });


