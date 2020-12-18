//pm2 start server.js -i 0
const express = require('express')
const app = express()

const testDoTimedPong=()=>{
    const start = Date.now()
    while((Date.now() - start) <5000){
    }
    return
}

app.get('/ping', (req, res)=>{
    testDoTimedPong()
    res.send('pong!')
})

app.get('/no-wait', (req, res)=>{
    // testDoTimedPong()
    res.send('Was I fast?!')
})

app.listen(3000)

/**
WITH i 4
--------
Complete requests:      10000
Failed requests:        0
Total transferred:      2110000 bytes
HTML transferred:       120000 bytes
Requests per second:    1668.34 [#/sec] (mean)
Time per request:       119.879 [ms] (mean)
Time per request:       0.599 [ms] (mean, across all concurrent requests)
Transfer rate:          343.77 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.5      0       4
Processing:    14  118   9.3    120     130
Waiting:       11   82  26.1     85     128
Total:         14  118   9.4    120     130

Percentage of the requests served within a certain time (ms)
  50%    120
  66%    122
  75%    123
  80%    123
  90%    124
  95%    125
  98%    126
  99%    127
 100%    130 (longest request) 

  Percentage of the requests served within a certain time (ms)!!!
  50%    103
  66%    104
  75%    104
  80%    105
  90%    105
  95%    106
  98%    109
  99%    111
 100%    113 (longest request)

*/