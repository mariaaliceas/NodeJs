const EventeEmitter = require('events');
const eventEmitter = new EventeEmitter();

eventEmitter.on('start', () => {
    console.log("Durante")
})

console.log("Antes");

eventEmitter.emit('start');

console.log("Depois");