const { Router } = require("express");
const indexRouter = Router();

const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.getMessages);
indexRouter.get("/messages/:messageID", indexController.getMessage);
indexRouter.get("/new", indexController.getMessageForm);
indexRouter.post("/new", indexController.postMessageForm);
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
