import express from "express";
import { testimonials, services } from './data.js'

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs", { 
        currentPath: '/'
    });
})

app.get("/about-us", (req, res) => {
    res.render("about-us.ejs", { 
        currentPath: '/about-us'
    });
})

app.get("/service", (req, res) => {
    res.render("service.ejs", { 
        currentPath: '/service'
    });
})

app.get("/testimonials", (req, res) => {
    res.render("testimonials.ejs", { 
        currentPath: '/testimonials',
        testimonials: testimonials 
    });
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
