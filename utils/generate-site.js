const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err){
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'File Created!'
            });
        });
    });
 };

 const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', fileContent, err =>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'File Created!'
            });
        });
    });
 };

 module.exports = {
    writeFile: writeFile,
    copyFile: copyFile,
 };