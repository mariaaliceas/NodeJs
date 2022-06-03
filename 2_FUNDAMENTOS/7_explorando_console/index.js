// mais de um valor

const x=10;
const y='alguma coisa';
const z=[1,3];

console.log(x,y,z);

//contagem de impressoes
console.count(`o valor de x é: ${x}, contagem:`);
console.count(`o valor de x é: ${x}, contagem:`);
console.count(`o valor de x é: ${x}, contagem:`);
console.count(`o valor de x é: ${x}, contagem:`);

//variavel entre string
console.log("O nome é %s, e ela é programadora", y);

//limpar console
setTimeout(() => {
    console.clear();
}, 2000);