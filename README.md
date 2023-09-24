# Node-Artillery-Backend-Test


This is a backend Node js project to test cloud scale load using npm Artillery dependence.
Test is based on Medium lecture:
https://mykeels.medium.com/scaling-out-with-node-clusters-1dca4a39a2a


# Instructions
To test fork Node server use:
curl artillery quick --count 50 -n 40 http://localhost:3030?max=100000 > result_fork.txt
Node server cluster test use:
curl artillery quick --count 50 -n 40 http://localhost:3030?max=100000 > result_cluster.txt


# Artillery
To learn more follow this link:
https://github.com/artilleryio/artillery#artillerycloud-scale-load-testing
