var express = require('express');

const SERVER_PORT = 8089;
var app = express();

// static middleware
app.use("/test", express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// a GET request to /hello that returns "Hello Express JS"
// GET http://localhost:8089/hello/
app.get("/hello", (req, res) => {
    res.send("Hello Express JS");
});

// a GET request to /user with query parameters for firstname and lastname
// GET http://localhost:8089/user?firstname=value&lastname=value
app.get("/user", (req, res) => {
    let {firstname, lastname} = req.query;

    if(!firstname && !lastname) {
        firstname = "Pritesh";
        lastname = "Patel";
    }

    res.json({"firstname":firstname, "lastname":lastname});
});

// a POST request to /user with path parameters for firstname and lastname
// POST http://localhost:8089/user/John/Doe
app.post("/user/:firstname/:lastname", (req, res) => {
    const {firstname, lastname} = req.params;

    res.json({"firstname": firstname, "lastname": lastname});
});

// a POST request to /users with body parameter for array of users firstname and lastname.
// POST http://localhost:8089/users
app.post("/users", (req, res) => {
    res.json(req.body);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/hello`);
});