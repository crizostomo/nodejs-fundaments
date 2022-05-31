const chalk = require('chalk');
const fs = require('fs');

const text = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)';

function extracLink(text){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const extractedLinks = text.match(regex);
  console.log(extractedLinks);
}

extracLink(text);

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

//pickFile('./arquivos/texto1.md');