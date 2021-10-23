const router = require("express").Router();
const apiRouter = require("./api/ApiRouter");
const authRouter = require("./auth/AuthRouter");

router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("home", {
      username: req.user.displayName || req.user.username,
      foto: req.user.photos ? req.user.photos[0].value : ""
    });
  } else {
    res.redirect("/auth/login");
  }
});

router.use("/api", apiRouter);
router.use("/auth", authRouter);

module.exports = router;
