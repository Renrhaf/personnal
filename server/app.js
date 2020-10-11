"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var xml2js = require("xml2js");
var axios_1 = __importDefault(require("axios"));
var app = express();
app.get('/articles', function (req, res) {
    axios_1.default.get('https://medium.com/feed/@quentinfahrner')
        .then(function (response) {
        var parser = new xml2js.Parser();
        parser.parseString(response.data, function (err, result) {
            console.dir(result.rss.channel);
            var json = JSON.stringify(result);
            console.dir(json);
        });
    })
        .catch(function (error) {
        console.log(error);
    });
});
app.listen(3000, function () {
    console.log('Application running on port 3000');
});
