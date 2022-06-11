const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function checkStatus(URLsArray){
    const statusArray = await Promise.all(URLsArray.map(async url =>{
        const res = await fetch(url)
        return res.status;
    }))
    return statusArray;
}

function generateURLsArray(linksArray){
//    Object.values(object)
return linksArray.map(objectLink => Object.values(objectLink).join());
}

async function validateURLs(linksArray) {
    const links = generateURLsArray(linksArray);
    const statusLinks = await checkStatus(links);
    return statusLinks;
}

module.exports = validateURLs;

//npm run cli validate -> to run the code