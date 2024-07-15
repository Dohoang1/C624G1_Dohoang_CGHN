function calculate() {
 let num = +document.getElementById('num').value;
 let resultA = 1;
 if (num <= 0) {
     alert("Vui lòng nhập theo yêu cầu!")
 }
 else{
     while ( num > 1 ) {
         resultA *= num;
         num--;
     }
     result.textContent = ("Giai thừa của số này là : " + resultA);
 }
}