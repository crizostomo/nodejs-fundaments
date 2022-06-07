const chalk = require('chalk');
const pickFile = require('./index');

const way = process.argv;

async function processText(filePath) {
    const result = await pickFile(filePath[2]);
    console.log(chalk.yellow('Links list'), result);
}

processText(way);