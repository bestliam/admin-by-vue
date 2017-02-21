// import superagent from 'superagent'
const apiHost = 'http://127.0.0.1:8360/admin/'
const superagent = require('superagent')
function fetch (url, data) {
  console.log(apiHost + url)
  return new Promise((resolve, reject) => {
    superagent
   .post(apiHost + url)
   .send(data)
   .end((err, response) => {
     if (err) {
      //  console.log('error!' + url)
      //  reject('Error')
       return
     }
     resolve(JSON.parse(response.text))
   })
  })
}

export function fetchItem (url, data) {
  return fetch(url, data)
}
