# Student Management Application – DevOps Mini Project

## Project Overview
This project is a Student Management REST API developed using Node.js and Express.js. It demonstrates CI/CD automation using Jenkins, Docker, and Kubernetes.

## Technologies Used
- Node.js and Express.js
- Git and GitHub
- Jest for automated testing
- Docker for containerization
- Jenkins for CI/CD automation
- Kubernetes and Minikube for deployment

## Features
- Add, view, update, and delete student records
- REST API with CRUD operations
- Automated testing using Jest
- Docker image creation using Jenkins
- Automated deployment to Kubernetes
- Kubernetes deployment and rollout verification

## CI/CD Pipeline
The Jenkins pipeline performs the following steps:

1. Retrieves source code from GitHub.
2. Installs project dependencies.
3. Runs automated Jest tests.
4. Builds a Docker image.
5. Loads the image into Minikube.
6. Deploys the updated image to Kubernetes.
7. Verifies the deployment status.

## Project Outcome
Successfully implemented a CI/CD pipeline to automate the testing, containerization, and Kubernetes deployment of the Student Management application using Jenkins.

## GitHub Repository
https://github.com/24wh1a05e3/StudentManagement