const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function errorHandler(err) {
    throw new Error(err.message);
}

async function checkStatus(URLsArray){
    try {
        const statusArray = await Promise
            .all(URLsArray
                .map(async url =>{
                const res = await fetch(url)
                return res.status;
        }))
        return statusArray;
    } catch (err) {
        errorHandler(err);
    }
}

function generateURLsArray(linksArray){
//    Object.values(object)
return linksArray
    .map(objectLink => Object
        .values(objectLink).join());
}

async function validateURLs(linksArray) {
    const links = generateURLsArray(linksArray);
    const statusLinks = await checkStatus(links);
    
    const results = linksArray.map((object, index) => ({ ...object, 
        status: statusLinks[index]
    }))
    return results;
}

module.exports = validateURLs;

//npm run cli validate -> to run the code