const express = require("express");
const app = express();

app.set("port", process.env.PORT || 9999);

app.use((req, res, next) => {
  const proto = req.connection.encrypted ? "https" : "http";
  const origin = proto + "://" + req.get("host");
  res.set("Access-Control-Allow-Origin", origin);
  res.set("AMP-Access-Control-Allow-Source-Origin", origin);
  res.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD, PUT");
  res.set("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.static(__dirname + "/static"));

app.listen(app.get("port"), function() {
  console.log("Listening on port " + app.get("port"));
});
