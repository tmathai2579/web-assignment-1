import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    console.log("/ called");
    res.send("Hello Tinu Mathai");
})


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
