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

let numbers = [1,2,3,4,5,6,7,8,,9,10]
 let evenNumbers = numbers.filter((number => {
     return number % 2 === 0;
 }))
 console.log(evenNumbers)

 const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
 ]

const weekday = days.filter(day => {
    // return day[0] ==cat= 'T'
    return day.charAt[0] === 'T'
})
console.log(weekday)