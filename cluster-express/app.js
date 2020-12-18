process.env.UV_THREADPOOL_SIZE=2

//For Windows set env variable
//cluster
const cluster = require('cluster')

const numForks = 2; //i have 4 Cores
if(cluster.isMaster){
    console.log('master')
    for(var i=0; i<numForks; i++)
    cluster.fork() // each fork/child will have 2 threads
}else{
    console.log('child')
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
}
/**
Concurrency Level:      200
Time taken for tests:   5.747 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      2110000 bytes
HTML transferred:       120000 bytes
Requests per second:    1740.15 [#/sec] (mean)
Time per request:       114.933 [ms] (mean)
Time per request:       0.575 [ms] (mean, across all concurrent requests)
Transfer rate:          358.57 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.5      0       1
Processing:    14  113  10.7    114     153
Waiting:        9   91  20.6     94     153
Total:         15  113  10.7    114     154

Percentage of the requests served within a certain time (ms)
  50%    114
  66%    117
  75%    118
  80%    119
  90%    121
  95%    123
  98%    135
  99%    144
 100%    154 (longest request)
 

 GO GIN-GONIC!!!!

 Percentage of the requests served within a certain time (ms)
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
