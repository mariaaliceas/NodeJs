
const {soma} = require('./soma');

//modulo externo
const minimist = require('minimist');

//modulo interno
require('./soma').soma;

const args = minimist(process.argv.slice(2));

const a = parseInt(args['a']);
const b = parseInt(args['b']);

soma(a,b);


