const cluster = require('cluster')
const os = require('os')
const express = require('express')
const isPrime = require('./is-prime')

if (cluster.isMaster) {
    const cpuCount = os.cpus().length
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork()
    }
}
else {
    const app = express()

    app.get('/', (req, res) => {
        const primes = []
        const max = Number(req.query.max) || 1000
        for (let i = 1; i <= max; i++) {
            if (isPrime(i)) primes.push(i)
        }
        res.json(primes)
    })

    const port = process.env.PORT || 3030

    app.listen(port)

    console.log('app is running on port', port)
}

cluster.on('exit', (worker) => {
    console.log('mayday! mayday! worker', worker.id, ' is no more!')
    cluster.fork()
})


// TEST QUE MUESTRA QUE EL MODO CLUSTER APROVECHA MEJOR EL RENDIMIENTO USANDO TODOS LOS NÚCLEOS
// DEL SERVIDOR -

// https://medium.com/the-andela-way/scaling-out-with-node-clusters-1dca4a39a2a

// COMANDO PARA PROBAR MODO FORK Y MODO CLUSTER CON ARTILLERY
// artillery quick --count 50 -n 40 http://localhost:3030?max=100000 > result_fork.txt
// artillery quick --count 50 -n 40 http://localhost:3030?max=100000 > result_cluster.txt
