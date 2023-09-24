const express = require('express');
const isPrime = require('./is-prime')
const app = express()

app.get('/', (req, res) => {
    
    const primes = []
    const max = Number(req.query.max) || 1000
    for (let i = 1; i <= max; i++) {
        if (isPrime(i)) primes.push(i)
    }
    res.json(primes)
})

app.listen(process.env.PORT || 3030)

console.log('app is running!')

module.exports = app


// TEST QUE MUESTRA QUE EL MODO CLUSTER APROVECHA MEJOR EL RENDIMIENTO USANDO TODOS LOS NÚCLEOS
// DEL SERVIDOR -

// https://medium.com/the-andela-way/scaling-out-with-node-clusters-1dca4a39a2a

// COMANDO PARA PROBAR MODO FORK Y MODO CLUSTER CON ARTILLERY
// artillery quick --count 50 -n 40 http://localhost:3030?max=100000 > result_fork.txt
// artillery quick --count 50 -n 40 http://localhost:3030?max=100000 > result_cluster.txt
