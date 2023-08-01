const {readFileSync, writeFileSync}= require('fs');
const {createReadStream, createWriteStream}= require('fs')
// for(let i=0;i<10000;i++){
//     writeFileSync('./content/big.txt',`hello world ${i}\n`,{flag:'a'});
// }

const stream  = createReadStream('./content/big.txt')

stream.on('data',(result)=>{
    console.log(result);
})


