# Static Website in Docker

## Introduction

Your job is to create a static website and create a Docker image containing the website.

## Hands-on Lab

1. Create a static website (e.g. HTML page *index.html*). For this exercise, the HTML page does not need to be complex.

1. Create a file called *Dockerfile*

1. Add the [sample code](Dockerfile) to your Dockerfile. Discuss the content with your professor.

1. Build the image with `docker build -t 0010-static-website .`

1. Lookup your image with `docker images`

1. Start a container with `docker run -d --name web -p 8080:80 0010-static-website`. Note the port mapping.

1. Open a web browser and check whether you can reach your website at `http://localhost:8080`

1. Remove the container with `docker rm -f web`

## Advanced Exercises

Try [publishing your website container to Docker Hub](https://docs.docker.com/docker-cloud/builds/push-images/).
