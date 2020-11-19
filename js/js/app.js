console.log("Hello, World")
let name = "Bogdan Koort";
let age = 15;
let city = "Tallin";
let commentary = "";
let drivingLicence = "";
//console.log("Character",name , ". Age: ",age , ".City: ", city);
console.log(`Character: ${name}. Age: ${age}. City: ${city}.`);

console.log(`Character ${name} ${commentary}`);

if(age < 18){
    drivingLicence   = `${name} is too young to drive a car.`
}else {
    drivingLicence = `${name} is old enough to drive a car`
}
console.log(drivingLicence);

const html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age} </li>
    <li>City: ${city}  </li>
    <li>${drivingLicence} </li>
    </ul>

`;

document.body.innerHTML = html;