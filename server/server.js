"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var port = process.env.PORT || 3000;
var publicPath = path_1["default"].join(__dirname, "..", "dist");
var app = express_1["default"]();
app.use(express_1["default"].static(publicPath));
app.get("*", function (req, res) {
    res.sendFile(path_1["default"].join(publicPath, "index.html"));
});
app.listen(port, function () {
    console.log("[APPSERVER] App running on port " + port);
});
