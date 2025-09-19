var http = require("http");

//TODO - Use Employee Module here ✅
console.log("Lab 03 -  NodeJs");
const { employees } = require("./modules/Employee");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const SERVER_PORT = process.env.PORT || 8081
const SERVER_HOST = 'localhost';

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>" ✅
            res.statusCode = 200;  //OK
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Welcome to Lab Exercise 03</h1>');
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format ✅
            res.statusCode = 200;  // OK
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({employees})); // Convert JS object to JSON string
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array ✅
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            let names = employees.map(employee => employee.firstName + " " + employee.lastName).sort();
            res.statusCode = 200;  // OK
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(names)); // Convert JS object to JSON string
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            totalSalary = employees.reduce((accum, employee) => accum + employee.Salary, 0);
            res.statusCOde = 200; // OK
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({'total_salary': totalSalary}));
        }
    }
})

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Server listening at http://${SERVER_HOST}:${SERVER_PORT}`);
})