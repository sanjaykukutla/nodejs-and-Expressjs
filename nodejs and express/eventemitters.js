const EventEmitter = require('events');

const customEventEmitter = new EventEmitter();

customEventEmitter.on('response',(name,id)=>{
    console.log(`hi there user ${name} with id ${id}`);
})

customEventEmitter.on('response',()=>{
    console.log("some other logic");
})

customEventEmitter.emit('response','sanjay',23);