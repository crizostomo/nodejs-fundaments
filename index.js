const chalk = require('chalk');
const fs = require('fs');

function treatError(error){
  throw new Error(chalk.red(error.code, 'No file found'));
}

async function pickFile(filePath){
  const encoding = 'utf-8';
  try{
    const text = await fs.promises
    .readFile(filePath, encoding)
    console.log(chalk.green(text));
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

pickFile('./arquivos/texto1.md');