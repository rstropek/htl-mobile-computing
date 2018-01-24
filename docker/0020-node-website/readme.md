# Dynamic Website with Node.js in Docker

## Introduction

Your job is to create a dynamic website with the *Express* framework and create a Docker image containing the solution.

## Hands-on Lab 1: Compile TypeScript in Container

1. Take a look at the sample code in this folder. Make yourself familiar with the code. Discuss it with your professor.

1. Start an interactive container with `docker run -it --rm -v C:\your-folder\htl-mobile-computing\docker\0020-node-website:/app node /bin/bash`

1. In the container...
   1. ...navigate into the *app* folder with `cd /app`
   1. ...check that volume mapping worked and your app is available in the folder
   1. ...install dependencies with `npm install`
   1. ...build TypeScript with `npm run build` - you are now compiling **inside a container**. Discuss pros and cons with your professor.

1. Exit the container

1. Run the app with `npm start`


## Hands-on Lab 2: CI in Container

1. Start an **background** container to run TypeScript in *watch mode* with `docker run -it --rm -v C:\your-folder\htl-mobile-computing\docker\0020-node-website:/app -w /app node npm run watch`

1. Discuss the previous command with your professor

1. Stop the container with `docker ps` and `docker rm` (find out the proper command line arguments)


## Hands-on Lab 3: Multi-Stage Build

1. Create a file called *Dockerfile*

1. Add the [sample code](Dockerfile) to your Dockerfile. Discuss the content with your professor.

1. Build the image with `docker build -t 0020-node-website .`

1. Lookup your image with `docker images`

1. Start a container with `docker run -d --name web -p 8080:8080 0020-node-website`

1. Open a web browser and check whether you can reach your website at `http://localhost:8080`

1. Remove the container with `docker rm -f web`

1. Start the container again but this time you set the environment variable `GREETER` with `docker run -d --name web -p 8080:8080 -e GREETER=Rainer 0020-node-website`

1. Open a web browser and verify that the environment variable is available in the container

1. Remove the container with `docker rm -f web`

