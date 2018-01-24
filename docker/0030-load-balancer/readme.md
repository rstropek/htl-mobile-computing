# Load Balancer in Container

## Introduction

In the [previous exercise](../0020-node-website), your created an image for a dynamic website implented in Node.js. Now we want to run two instances (=servers) of this website and put a [load balancer](https://en.wikipedia.org/wiki/Load_balancing_(computing)) in front of it.

## Hands-on Lab

1. Use `docker images` to make sure that you still have the image *0020-node-website* available. If not, repeat the [previous exercise](../0020-node-website).

1. Start first instance of your web app with `docker run -d --name srv1 -e GREETER=Server1 0020-node-website`

1. Start second instance of your web app with `docker run -d --name srv2 -e GREETER=Server2 0020-node-website`

1. Use `docker ps` to check whether both servers are running. We specified no port mapping, so the server are not accessible from your computer.

1. Discuss the sample configuration file [`nginx.conf`](nginx.conf) with your professor

1. Start a container with `nginx` that is configured as a load balancer with `docker run --name load-balancer -v C:\your-folder\htl-mobile-computing\docker\0030-load-balancer/:/etc/nginx/ --link srv1 --link srv2 -it -p 8080:80 nginx`

1. Open a web browser and check whether you can reach your website at `http://localhost:8080`

1. Refresh your browser multiple times to see that you get response from both servers

1. Remove all containers with `docker rm`
