var css = require('css');
var fs = require('fs');

var CSS = fs.readFileSync("../test.css").toString();



var myRegexp = /^@{([\s\S]*)}$/gm;
var match = myRegexp.exec(CSS);

eval(match[1]);

var obj = css.parse(CSS);

console.log(obj.stylesheet.rules)
