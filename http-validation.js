const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function generateURLsArray(linksArray){
//    Object.values(object)
return linksArray.map(objectLink => Object.values(objectLink).join());
}

function validateURLs(linksArray) {
    return generateURLsArray(linksArray);
}

module.exports = validateURLs;

//npm run cli validate -> to run the code