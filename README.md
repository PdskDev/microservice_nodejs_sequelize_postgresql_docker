This tutorial project implements a microservice built under Node.js + Express using the Sequelize ORM and a Postgresql database then all mounted on 2 Docker containers.

How to test on your computer:

- Install Docker Desktop,
- Install Postman,
- Create project folder and Git clone https://github.com/PdskDev/microservice_nodejs_sequelize_postgresql_docker.git,
- In the terminal go to the root of the project folder, run the commands:
  
          1. docker compose build
          2. docker compose up

- Once the containers are activated, test with Postman with following routes
  
Welcome test message Get: localhost:3000/

Retreive all users Get: localhost:3000/users

Retreive one by Id Get: localhost:3000/users/:userId

Create new user Post: localhost:3000/users

Modify user Put: localhost:3000/users/:userId

Destroy an user data Delete: localhost:3000/users/:userId
