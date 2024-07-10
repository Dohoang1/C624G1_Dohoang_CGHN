
let userName=prompt("who's there?",'')

if (userName=="Admin") {
     let passW = prompt("please insert password?",'')
         if (passW=="TheMaster") {
             alert("welcome")
    } else if (passW=="") {
         alert("canceled")
    } else alert("wrong password")
} else if (userName=="") {
    alert("canceled")
} else alert("I dont know you")