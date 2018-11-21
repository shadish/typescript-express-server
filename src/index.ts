// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = { firstName: "Jane", lastName: "User" };

// document.body.innerHTML = greeter(user);

import express from 'express';
const app = express();
app.get('/data', (req,res) => {
    console.log("request:", req)
    res.send('working')
})
app.list(3000, () => {console.log("LISTENING")})