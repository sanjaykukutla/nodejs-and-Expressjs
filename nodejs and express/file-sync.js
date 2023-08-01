const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);
writeFileSync('./content/subfolder/result-sync.txt',`this is the result of : ${first} and : ${second}`,{flag:'a'});