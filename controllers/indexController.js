const db = require("../db/queries");
exports.getMessages = async (req, res) => {
  const messages = await db.getMessages();
  res.render("index", { messages: messages });
};

exports.getMessage = async (req, res) => {
  const id = req.params.messageID;
  if (id === 0 || id === "0") {
    res.send("Messages IDs start from 1");
  } else {
    const message = await db.getMessageByID(id);
    res.render("message", { message: message[0] });
  }
};

exports.getMessageForm = (req, res) => res.render("form");

exports.postMessageForm = async (req, res) => {
  const formData = req.body;
  await db.insertMessage({ text: formData.message, username: formData.author });
  res.redirect("/");
};
