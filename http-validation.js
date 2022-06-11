const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function validateURLs(linksArray) {
    return linksArray;
}

module.exports = validateURLs;

//npm run cli validate -> to run the code