import express from "express";
import { testimonials, services } from './data.js'

const app = express();
const port = 3000;

app.use(express.static("public"));

// const testimonials = [
//     {
//         rating: 5,
//         heading: "Exceptional Haircut and Threading Experience with Friendly Staff",
//         body: "I had an amazing experience for hair cutting and threading. I do know the name of the hair dresser, but she has done awesome job, and very detailing while doing threading and haircut. Amazing and very friendly staff. I will definitely come again",
//         reviewer: "Yesha Patel",
//         source: "Google Review"
//     },
//     {
//         rating: 5,
//         heading: "A Top-Notch Barbering Experience with Vimal at Fademan",
//         body: "I recently had the pleasure of getting my haircut at Fademan, and I must say, Vimal is a true artist in the world of barbering. From the moment I stepped into the shop, Vimal greeted me with a warm and friendly demeanor that set the tone for a fantastic experience.",
//         reviewer: "Anonymous",
//         source: "Google Review"
//     }
// ];

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/about-us", (req, res) => {
    res.render("about-us.ejs");
})

app.get("/service", (req, res) => {
    res.render("service.ejs");
})

app.get("/testimonials", (req, res) => {
    res.render("testimonials.ejs", { testimonials });
})


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
