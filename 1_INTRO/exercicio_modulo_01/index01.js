const fs = require('fs');
const fileName = 'arquivo1.txt';

fs.readFile(fileName, 'utf8', (err, data) => 
{
    if (err) 
    {
        console.log(err);
    }
    console.log('result read:' + data);
}
)
