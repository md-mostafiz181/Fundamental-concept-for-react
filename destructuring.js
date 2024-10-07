const employee = {
    name : "Mostafizur Rahman",
    age : 27 ,
    language : ["JavaScript", "C++" ,"Java", "pyThon"],
    specification :{
        brandName : "Xiaomi user",
        education : "M.A in English"

    }

    
}

const {name, age}= employee ;
console.log(name,age);

const [first, second, third]=employee.language;
console.log(first, second, third);

const {brandName, education}=employee.specification;
console.log(brandName, education)