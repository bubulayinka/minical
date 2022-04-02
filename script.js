
var first = document.querySelector("first");
var second = document.querySelector("second");
var cal =document.querySelector("calc");
var opr = document.querySelector("opr");
var result = document.querySelector("result");



cal.addEventListener('click' , calc);

function calc(){
   if(opr == '+'){
      result.innerHTML= parseInt(first.value ) + parseInt(second.value);
   }
   else if (opr == '-'){
      result.innerHTML= parseInt(first.value ) - parseInt(second.value);
   }
   else if (opr == '/'){
      result.innerHTML= parseInt(first.value ) / parseInt(second.value);
   }
   else if (opr == '*'){
      result.innerHTML= parseInt(first.value ) * parseInt(second.value);
   }
}
