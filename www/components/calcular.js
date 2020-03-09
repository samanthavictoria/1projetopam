$(document).on("click","#calcular", function(){
var valor1= $("#n1").val();
var valor2= $("#n2").val();

var calc = parseFloat(valor1) + parseFloat(valor2);
$("#result").val(calc);
});
