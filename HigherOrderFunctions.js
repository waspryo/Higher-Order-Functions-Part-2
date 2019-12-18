const fetch = require('node-fetch')

const url = 'https://www.reddit.com/r/birdswitharms.json';

function resJSON(res) {
    return res.json()
}
function logResult(result) {
    console.log(result)
}

fetch(url).then(resJSON).then(logResult)

const names = ['jane', 'nao', 'kaede', 'hamada', 'matsumoto']

names.forEach(name => {
   console.log(name)
})

const loves = ['💔', '💓']
const myLoves = loves.map(love => {
    if (love === '💔') {
        return '😱'
    } else if (love === '💓') {
        return '😍'
    }
})
cconsole.log(myLoves)