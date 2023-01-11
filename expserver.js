const express = require("express");
const app = express();

app.get("/api/main", function (req, res) {
  res.send(
    `<h1>What is express in Node js?</h1>
        <hr>
        <p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.</p>
    `
  );
});

app.listen(5000, () => {
  console.log("app is running at port 5000");
});
