const state="Maharashtra";


const address={
    city:"Mumbai",
    state:"MH",
    pincode:400001,
    country:"India"
}


// Traditional Way 

// const city=address.city;
// const state=address.state;
// const pincode=address.pincode;
// const country=address.country;

// ES 6 Way

const {city,state:st,pincode,country,street}=address

console.log(city);
console.log(state);
console.log(st);
console.log(pincode);
console.log(country);
console.log(street);

// -----------------------Desturcturing when an object is passed as an argument----------------------------------

console.log("----------------------- function and destructuring ------------")
function displayAddress(address){
    console.log(address.state);
    console.log(address.city);
    console.log(address.pincode);
}

displayAddress(address)

console.log("----------------------- function and destructuring ------------");

function displayAddressNewWay({state,city,pincode}){  //const {state,city,pincode}=address
    console.log(state);
    console.log(city);
    console.log(pincode);
}

displayAddressNewWay(address)


// Component1  ---> 10 


// Component2 ({var1,var2,var3})--> 3