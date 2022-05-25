const chalk = require('chalk');

console.log(chalk.blueBright('vamos começar!'));

const paragrafo = 'Texto retornado por uma função';

function texto(string) {
  return string;
}

console.log(texto(paragrafo));
