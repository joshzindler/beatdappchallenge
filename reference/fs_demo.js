const fs = require('fs');
const path = require('path');

//create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder created...');
    
    // Append to file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 
    'I love Node.js!', 
    err => {
        if (err) throw err;
        console.log('File written to...');
    });
});

