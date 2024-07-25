let products = ["1080ti","2060","2060super","1070","1660ti","1060","1050ti","1660super","3060","3060ti","3070","3070ti"];


function showListP() {
    let content = "";
    for ( let i = 0; i < products.length; i++ ) {
        content += `<tr>`
        content += `<td style="text-align: center">${i + 1}</td>`
        content += `<td>${products[i]} <button style="float: right" onclick="editProduct(${i})">Edit</button>  <button style="float: right" onclick="deleteProduct(${i})">Delete</button> </td>`
        content += `<tr>`
    }
    document.getElementById("result").innerHTML = content;
    document.getElementById("count").innerHTML = products.length + " products";
}

function addnewP() {
    let nameP = document.getElementById("newP").value;
    if ( !nameP) {
        alert("Please enter product name");
        return;
    }
    products.push(nameP);
    document.getElementById("newP").value = "";
    showListP();
}

function deleteProduct(index){
    if (!confirm("are you sure you want to delete this product?")){
        return;
    }
    products.splice(index, 1);
    showListP();
}

function editProduct(index){
    let a = prompt("Edit product name");
    products.splice(index, 1, a);
    showListP();
}

showListP();
