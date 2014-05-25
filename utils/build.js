var fs = require('fs');
var path = require('path');

var b = require('browserify')();

b.add(path.resolve(__dirname, '../lib/waterline'));
b.add(path.resolve(__dirname, './main.js'));


var outputFilePath = path.resolve(__dirname, '../dist/waterline.js');

var srcStream = b.bundle();

var destStream = fs.createWriteStream(outputFilePath);

srcStream.pipe(destStream);