const student = {
    name : "Mostafizur Rahman",
    age : 25 ,
    college : "Gaibandha gov't college"
}

const studentStringify = JSON.stringify(student);
console.log(studentStringify);
const studentObj = JSON.parse(studentStringify);
console.log(studentObj);

const keys = Object.keys(student);
console.log(keys)

const values = Object.values(student);
console.log(values)