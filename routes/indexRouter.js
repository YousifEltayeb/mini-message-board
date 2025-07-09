const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/messages/:messageID", (req, res) => {
  res.render("message", { message: messages[req.params.messageID] });
});
indexRouter.get("/new", (req, res) => {
  res.render("form");
});
indexRouter.post("/new", (req, res) => {
  const formData = req.body;

  messages.push({
    text: formData.message,
    user: formData.author,
    added: new Date(),
  });
  res.redirect("/");
});
module.exports = indexRouter;
