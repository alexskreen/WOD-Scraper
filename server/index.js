const express = require("express");
const app = express();
const port = 3000;

app.get("/creators", async (req, res) => {
  const creators = [
    { name: "Code Drip", img: "https://" },
    { name: "Dave Lee", img: "https://" },
    { name: "MKBHD", img: "https://" },
  ]
  // todo: GET from db
  res.send(creators)
})

app.post("/creators", async (req, res) => {

})


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
