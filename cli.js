/*
No arquivo http-validacao.js, substitua na primeira linha do arquivo:

const fetch = require('node-fetch');

Por:

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
*/

const chalk = require('chalk');
const pickFile = require('./index');
const validateURLs = require('./http-validation');

const way = process.argv;

async function processText(filePath) {
    const result = await pickFile(filePath[2]);
    if(way[3] === 'validate'){
        console.log(chalk.yellow('Links validated'), await validateURLs(result));
    } else {
        console.log(chalk.yellow('Links list'), result);
    }
}

processText(way);

//npm run cli -> to run the code