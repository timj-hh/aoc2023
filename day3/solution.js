var fs = require('fs'); 

fs.readFile('./input.txt','utf8',(err, data) => {
    let sum = 0;
    let arr = data.split("\n")
    arr.forEach((d, idx) => {
       let dat = [...d.matchAll(/\d+/g)] 
        if (dat) dat.forEach(e => { 
            let toTest = [idx]
            if(idx > 0) toTest.push(idx-1)
            if(idx < d.length-1) toTest.push(idx+1)
            if((toTest.filter(t => (/[^\w.\n\r]/.test(arr[t].substring((e.index-1), (e.index+e[0].length+1))))).length > 0)) sum += parseInt(e[0])
        })
    })
    console.log("Part one:", sum)
});

fs.readFile('./input.txt','utf8',(err, data) => {
    let sum = 0;
    let arr = data.split("\n")
    arr.forEach((d, idx) => {
       let dat = [...d.matchAll(/\d+/g)] 
        if (dat) dat.forEach(e => { 
            let toTest = [idx]
            if(idx > 0) toTest.push(idx-1)
            if(idx < d.length-1) toTest.push(idx+1)
            if((toTest.filter(t => (/\*/.test(arr[t].substring((e.index-1), (e.index+e[0].length+1))))).length > 0)) {
                sum += parseInt(e[0])
                console.log(toTest.filter(t => (/\*/.test(arr[t].substring((e.index-1), (e.index+e[0].length+1))))))
            }
        })
    })
    console.log("Part two:", sum)
});