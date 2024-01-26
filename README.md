This tutorial project implements a microservice built under Node.js + Express using the Sequelize ORM and a Postgresql database then all mounted on 2 Docker containers.

How to test:

- Install Docker Desktop on your workstation
- Install Postman,
- Git clone of the project,
- In the terminal go to the root of the project, run the commands:
  
1. docker compose build
2. docker compose up

- Once the containers are activated, test with Postman on the roads
  
Welcome test message Get: localhost:3000/

Retreive all users Get: localhost:3000/users

Retreive one by Id Get: localhost:3000/users/:userId

Create new user Post: localhost:3000/users

Modify user Put: localhost:3000/users/:userId

Destroy an user data Delete: localhost:3000/users/:userId
