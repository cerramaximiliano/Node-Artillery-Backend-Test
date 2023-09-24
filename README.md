![artillery-logo](https://github.com/cerramaximiliano/Node-Artillery-Backend-Test/assets/65555679/879f7547-6c26-4ee0-b485-9ce2c77f980e)# Node-Artillery-Backend-Test

![Uploading artillery-l<svg width="120" height="123" viewBox="0 0 120 123" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H120V122.202H0V0Z" fill="#161616"/>
<path d="M70.8945 67.6624L55.4533 52.8297L43.181 57.8817L37.3176 52.2493L91.2855 30.3957L72.3815 85.9315L66.4246 80.2093L70.8945 67.6624ZM73.4957 60.3262L79.7022 42.711L62.5397 49.8019L73.4957 60.3262Z" fill="white"/>
<path d="M54.4555 54.3898L70.0144 69.3356L83.3101 54.9809L88.7533 60.2097L54.7658 96.9043L49.3225 91.6755L65.1936 74.5403L49.6347 59.5945L33.7636 76.7298L28.3203 71.501L62.3079 34.8064L67.7511 40.0352L54.4555 54.3898Z" fill="white"/>
</svg>
ogo.svg…]()


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
