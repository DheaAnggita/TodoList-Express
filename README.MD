# Web Service and RESTful API Documentation

This project is a web service and RESTful API for a ToDoList application using Express.js and MySQL with Sequelize.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Run the Server](#run-the-server)
  - [API Endpoints](#api-endpoints)
- [Database](#database)
  - [Seeding Data](#seeding-data)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DheaAnggita/TodoList-Express.git 
   ```

2. go to path folder
3. install package
   ```bash
   npm install
   ```
4. create db and migrate
  ```bash
  npx sequelize-cli db:migrate
  ```
5. run server
  ```bash
  node index.js
  ```
