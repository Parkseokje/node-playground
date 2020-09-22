var express = require("express");
var logger = require("morgan");
var wiki = require("./route.wiki.js");
var middleware1 = require("./middleware.simple.js");
var app = express();

// morgan (https://backback.tistory.com/335)
app.use(logger("dev"));
app.use(express.static("public"));

// [route] /wiki/* 패턴을 가지는 모든 route에 대해 먼저 실행됨
// app.use("/wiki", wiki); 보다 앞에 선언해야 동작
// 실전에서는 잘 안씀. 미들웨어 사용을 권장.
app.all("/wiki/*", function (req, res, next) {
  console.log("only applied for routes that begin with /wiki");
  next();
});

// [route] /wiki
app.use("/wiki", wiki);
// [route] /
app.get("/", middleware1, function (req, res) {
  res.send("Hello World!");
});
// [route] /error
app.get("/error", function (req, res) {
  throw new Exception("error!");
  res.send("you cannot get this");
});

// 에러 핸들링
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// localhost:3000에서 서버 시작
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
