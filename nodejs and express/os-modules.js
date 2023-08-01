const os = require('os');

console.log(`the system uptime is ${os.uptime()/(3600*24)} days`);

const currentos = {
    name : os.type(),
    release : os.release(),
    totmem : os.totalmem(),
    freemem : os.freemem(),
}
console.log(currentos);
