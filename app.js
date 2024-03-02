const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const Lawyer = require("./models/lawyers");
let bodyParser = require("body-parser");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/wakaalat-on-web");
}

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs", (req, res) => {
  res.render("blogs");
});

app.get("/findalawyer", (req, res) => {
  res.render("findalawyer");
});

app.get("/fundraising", (req, res) => {
  res.render("fundraising");
});

app.get("/lawyers/banklaw", async (req, res) => {
  const lawyers = await Lawyer.find({ Specialization: "Bank Lawyer" });
  res.render("lawyers/banklaw", { lawyers });
});

app.get("/lawyers/CriminalDefense", async (req, res) => {
  const lawyers = await Lawyer.find({
    Specialization: "CriminalDefense Lawyer",
  });
  res.render("lawyers/CriminalDefense", { lawyers });
});

app.get("/lawyers/estate", async (req, res) => {
  const lawyers = await Lawyer.find({ Specialization: "Estate Lawyer" });
  res.render("lawyers/estate", { lawyers });
});

app.get("/lawyers/family", async (req, res) => {
  const lawyers = await Lawyer.find({ Specialization: "Family Lawyer" });
  res.render("lawyers/family", { lawyers });
});

app.get("/lawyers/iplaw", async (req, res) => {
  const lawyers = await Lawyer.find({ Specialization: "Iplaw Lawyer" });
  res.render("lawyers/iplaw", { lawyers });
});

app.get("/lawyers/laborlaw", async (req, res) => {
  const lawyers = await Lawyer.find({ Specialization: "Labourlaw Lawyer" });
  res.render("lawyers/laborlaw", { lawyers });
});

app.get("/lawyers/pilaw", async (req, res) => {
  const lawyers = await Lawyer.find({ Specialization: "Pilaw Lawyer" });
  res.render("lawyers/pilaw", { lawyers });
});

app.get("/lawyers/taxlaw", async (req, res) => {
  const lawyers = await Lawyer.find({ Specialization: "Taxlaw Lawyer" });
  res.render("lawyers/taxlaw", { lawyers });
});

app.get("/wantalawyer", (req, res) => {
  res.render("wantalawyer");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/lawyerRegistrationForm", (req, res) => {
  res.render("lawyerRegistrationForm");
});

app.post("/lawyerRegistrationForm", async (req, res) => {
  const lawyer = new Lawyer(req.body.lawyer);
  await lawyer.save();
  res.redirect("/");
});

app.get("/loginSignup", (req, res) => {
  res.render("loginSignup");
});

app.listen(3000, () => {
  console.log("Serving on Port 3000");
});
