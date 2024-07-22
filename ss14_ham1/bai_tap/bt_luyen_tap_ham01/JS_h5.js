// debugger
let arr1 = ["Polaris","Aldebaran","Deneb","Vega","Altair","Dubhe","Regulus"];
let arr2 = ["Ursa Minor","Tarurus","Cygnus","Lyra","Aquila","Ursa Major","Leo"]
console.log(arr1)

function starcheck(name) {
    for (let i = 0; i < arr1.length; i++) {
        if (name === arr1[i]) {
            return `${name} is in ${arr2[i]}`;
        }
    }
    return `${name} is not found`;
}
let a = prompt("Enter a star");
let b = starcheck(a);
document.write(b);
