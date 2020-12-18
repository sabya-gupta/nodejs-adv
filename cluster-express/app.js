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