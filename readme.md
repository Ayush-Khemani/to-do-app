# ToDo App - Apollo Green Solutions

This is a backend API for a ToDo app. Users can register, login, create projects, and add tasks to projects. Authentication is done using JWT.

---

## Features

- User registration and login
- JWT-based authentication
- Create projects
- Create tasks linked to projects
- Fetch projects and tasks for authenticated users

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- JWT Authentication
- Zod validation
- bcrypt for password hashing

---

## Setup Instructions

1. Clone the repo:

git clone <repo-url>
cd backend


2. Install dependencies:


    npm install


3. Create a .env file in the backend folder with the following content:
PORT=3000
JWT_SECRET=<JWT_KEY>
host=localhost
user=<db_user>
database=todos
password=<db_pass>

4. Set up the MySQL database:

create database todos;

create table users(
	id INT auto_increment primary key, 
	name varchar(100) not null,
    email varchar(100) not null,
    password varchar(200) not null,
    created_at timestamp default current_timestamp
);


CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);




5. Start the server
node index.js


# API Testing (Postman)

To make testing easy, a Postman collection and environment are included:

postman_collection.json – contains all API requests

postman_environment.json – contains variables for base_url and JWT token