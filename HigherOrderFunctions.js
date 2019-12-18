const fetch = require('node-fetch')

const url = 'https://www.reddit.com/r/birdswitharms.json';

function resJSON(res) {
    return res.json()
}
function logResult(result) {
    console.log(result)
}

fetch(url).then(resJSON).then(logResult)
　　