//import express from "express";
const express = require("express");
const PORT = 8080;
const app = express();

/*  Handle Middlewares   */



/*  Handle Routers   */
const testRouter = require("./routers/test_router");
app.use("/test", testRouter);



/*  Main Server   */
app.get("/", (req, res) => {
    res.send("<h1>Welcome to SkyTech demo server</h1>");
});
app.get("/docs", (req, res) => {
    res.send("SkyTech Documentation");
});

app.listen(PORT, () => {
    // Mandatory callback.
    // This callback executes once the server
    // starts on listening to the provided port.
    console.log(`SkyTech Server is running on port ${PORT}`);
});