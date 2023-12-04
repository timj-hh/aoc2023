var fs = require('fs'); 

// Part 1
// 12 red cubes, 13 green cubes, and 14 blue cubes
fs.readFile('./input.txt','utf8',(err, data) => {console.log("Part one:",data.split("\n").reduce((a,b) =>a+((([...b.match(/((\d+)(?=\s{1}green))/g)].filter(e =>e>13).length)+([...b.match(/((\d+)(?=\s{1}blue))/g)].filter(e =>e>14).length)+([...b.match(/((\d+)(?=\s{1}red))/g)].filter(e =>e>12).length) > 0) ? 0 : parseInt(b.match(/\d+/)[0])),0))});

// Part 2
fs.readFile('./input.txt','utf8',(err, data) => {console.log("Part two:",data.split("\n").reduce((a,b) => (a+(Math.max.apply(Math, [...b.match(/((\d+)(?=\s{1}green))/g)])*Math.max.apply(Math, [...b.match(/((\d+)(?=\s{1}blue))/g)])*Math.max.apply(Math, [...b.match(/((\d+)(?=\s{1}red))/g)]))), 0)) });
