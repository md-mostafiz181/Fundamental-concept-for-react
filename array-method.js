const products = [
    { brand : "Lenovo", price : 32000, color : "Silver"},
    { brand : "sumsung", price : 35000, color : "golden" },
    { brand : "iPhone", price : 40000, color : "Maroone" },
    { brand : "Xiaomi", price : 15000, color : "black"},
    { brand : "Redmi", price : 29000, color : "white" }

    
]

// map method
const brandName = products.map(product => product.brand);
// console.log(brandName) // map methods return an array

// forEach method
// products.forEach(product => console.log(product.price)) // forEach method don't return anything so we don't use any variable here


// filter

const productsColor = products.filter (product => product.color === "black" ) ;
// console.log(productsColor); // filter method return the array which is filled up the condition

//find 
const productPrice = products.find(product => product.price <= 20000)
console.log(productPrice)

