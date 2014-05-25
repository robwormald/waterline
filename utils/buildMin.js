var fs = require('fs');
var path = require('path');

var b = require('browserify')();

b.add(path.resolve(__dirname, '../lib/waterline'));
b.add(path.resolve(__dirname, './main.js'));



var outputFilePath = path.resolve(__dirname, '../dist/waterline.min.js');
var outputMapFilePath = path.resolve(__dirname,'../dist/waterline.map.json');

b.plugin('minifyify', {output: outputMapFilePath});

var srcStream = b.bundle();

var buildStream = fs.createWriteStream(outputFilePath);

srcStream.pipe(buildStream);


