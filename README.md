# Node-Artillery-Backend-Test
<div align=center>

  <img src="https://github.com/cerramaximiliano/cr-pi-countries/assets/65555679/74f1d36e-eca7-4e03-9554-6f1543ef147d" width="90">
  <img src="https://github.com/cerramaximiliano/cr-pi-countries/assets/65555679/d1ae79f9-0632-46b9-9a7b-e7b92d8bf367" width="90">
  <img src="https://github.com/cerramaximiliano/Node-Artillery-Backend-Test/assets/65555679/879f7547-6c26-4ee0-b485-9ce2c77f980e" width=90 />
</div>

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
