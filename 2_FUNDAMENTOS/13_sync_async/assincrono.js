const fs = require('fs');

console.log('Inicio');

fs.writeFile('Arquivo.txt', "oiii", function (err) {
    setTimeout(function () {
        console.log('Arquivo criado')
    }, 1000)
})

console.log("Fim");