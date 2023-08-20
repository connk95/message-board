var express = require("express");
var router = express.Router();

/* GET home page. */

const messages = [
  {
    text: "I forgot where I left my giraffe!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "It's probably in the basement.",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res, next) => {
  res.render("index", { title: "Messageboard", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form");
});

router.post("/new", (req, res, next) => {
  const name = req.body.userName;
  const message = req.body.userMessage;
  messages.push({ text: message, user: name, added: new Date() });
  res.redirect("/");
});

module.exports = router;
