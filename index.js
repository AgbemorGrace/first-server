const express = require("express");

const app = express();
app.get("/", (req, res )=> {
    res.status(200).send("welcome to my servser");
});

app.post("/", (req, res) => {
    res.status(201).send("your data has being saved");
});

app.put("/", (req, res) => {
    res.status(200).send("your data has been replaced");
});

app.patch("/", (req, res) => {
    res.status(200).send("your data has been updated");
});
app.delete("/", (req,res) => {
    res.status(200).send("your data has been deleted");
});

app.listen(4001,(err) => {
    console.log("server is listening on http://localhost:4001");
});