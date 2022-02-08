const express = require("express");
const alert = require('alert');
var bodyParser = require("body-parser");
const ejs = require('ejs');
const { path } = require("express/lib/application");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("public/images"));
var i = 1;

const ques = [
    {
        statement: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
        answer: "xyz"
    },
    {
        statement: "hasika",
        answer: "abc"
    },
    {
        statement: "papita",
        answer: "tasty but ganda"
    },
    {
        statement: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
        answer: "geela geela and meetha"
    },
    {
        statement: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
        answer: "best fruit"
    },
]

const imgURL = [
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1450729828i/17460999._SX540_.jpg',
    'https://i.ibb.co/nr2QtpL/2.jpg',
    'https://i.ibb.co/Wxx4Psy/3.jpg',
    'https://tickets.patrimonionacional.es/Images/Venues/24-new.jpg',
    'https://img2.tradewheel.com/uploads/images/products/4/9/luxury-comfortable-study-room-furniture-chair-and-table-foshan-high-back-solid-wood-chair-and-table-set1-0981775001619677057.jpg.webp'
]

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/story.html")
})
app.get("/main", (req, res) => {
    res.sendFile(__dirname + "/landing.html")
})


app.post("/ques", (req, res) => {
    if (i < 6) {
        var ans = (req.body.answer).toLowerCase();
        if (ans === ques[i - 1].answer) {
            i = i + 1;
            res.redirect("/ques");
        }
        else alert("Wrong answer please try again")
    }
})

app.get("/zoom", (req, res) => {
    res.sendFile(__dirname + "/zoom.html")
})

app.get("/ques", (req, res) => {
    if (i < 6)
        res.render("index", { Ques: ques[i - 1].statement, image: imgURL[i - 1] });
    else {
        i = 1;
        res.redirect("/zoom")
    }
})

app.listen(5000, function () {
    console.log("server is running on port 5000");
});





