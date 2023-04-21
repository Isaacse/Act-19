function mayorNum() {
    var num = parseInt
      (document.getElementById("num1").value);
    var num2 = parseInt (document.getElementById("num2").value);
    if (num >= num2) {
        if (num <= num2) {
          if(num == num2){
              alert("Los numeros son iguales");}    
        }else{
          alert("El num1 es mayor");}
    }else{ 
      alert(" El num2 es mayor");}
}