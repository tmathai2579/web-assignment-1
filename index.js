import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/about-us", (req, res) => {
    res.render("about-us.ejs");
})

app.get("/service", (req, res) => {
    res.render("service.ejs");
})



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
