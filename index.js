const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.json([
        {
            Id: 1,
            name: "ali",
            age: 24
        },
        {
            Id: 2,
            name: "meo",
            age: 25
        },
        {
            Id: 3,
            name: "ai",
            age: 26
        }
    ]);
});

//on port 5500
app.listen(5500, () => {
    console.log("app is running on port 5500");
});
 