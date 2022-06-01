const pickFile = require('./index');

const way = process.argv;

console.log(pickFile(way[2]));

//node .\cli.js .\arquivos\texto1.md