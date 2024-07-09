function convertmoney(){
let amount=document.getElementById('amount').value;
let fromC=document.getElementById('from').value;
let toC=document.getElementById('to').value;
let result;

if (fromC == "VND" && toC = "USD") {
    result = (amount / 25000) + "$";
}





document.getElementById("result").innerHTML = result;
}