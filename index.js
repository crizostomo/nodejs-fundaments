const chalk = require('chalk');
const fs = require('fs');

function extracLink(text){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
const resultsArray = [];
let temp;
while((temp = regex.exec(text)) !== null){
  resultsArray.push({[temp[1]]: temp[2]});
}
  return resultsArray.length === 0 ? 'There are no links' : resultsArray;
}

function treatError(error){
  throw new Error(chalk.red(error.code, 'No file found'));
}

async function pickFile(filePath){
  const encoding = 'utf-8';
  try{
    const text = await fs.promises
    .readFile(filePath, encoding)
    return extracLink(text);
  } catch(error){
    treatError(error);
  }
}

//function pickFile(filePath){
//  const encoding = 'utf-8';
//  fs.promises
//  .readFile(filePath, encoding)
//  .then((text) => console.log(chalk.blue(text)))
//  .catch((error) => treatError(error))
//}

//function pickFile(filePath){
//  const encoding = 'utf-8';
//  fs.readFile(filePath, encoding, (error, text) =>{
//    if(error){
//      treatError(error);
//    }
//    console.table(chalk.blue(text));
//  })
//}

module.exports = pickFile;