This is a full-stack bookstore application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to view, add, edit, and delete books. The app is structured into a frontend and a backend.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)

## Features

- View a list of books in table or card format
- Add new books
- Edit existing books
- Delete books
- View details of each book

## Demo

You can view the live demo of this application [here](https://your-demo-url.com).

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/alecluis/MERNBooks.git
    cd MERNBooks-main
    ```

2. **Navigate to the backend directory and install dependencies:**

    ```sh
    cd backend
    npm install
    ```

3. **Navigate to the frontend directory and install dependencies:**

    ```sh
    cd ../frontend
    npm install
    ```

## Running the Application

1. **Set up your environment variables:**

    - Create a `.env` file in the `backend` directory with the following content:

        ```plaintext
        PORT=5000
        MONGODB_URI=your-mongodb-connection-string
        ```

2. **Start the backend server:**

    ```sh
    cd backend
    npm start
    ```

    The backend server will start on `http://localhost:5000`.

3. **Start the frontend development server:**

    ```sh
    cd ../frontend
    npm start
    ```

    The frontend server will start on `http://localhost:3000`.

4. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

    You should see the homepage of the bookstore app.

## Technologies Used

- **Frontend:**
  - React.js
  - Axios (for HTTP requests)
  - React Router (for routing)
  - Tailwind CSS (for styling)
  - React Icons

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (using Mongoose)

## Project Structure

    ├── backend
    │   ├── controllers
    │   ├── models
    │   ├── routes
    │   ├── server.js
    │   └── .env
    ├── frontend
    │   ├── public
    │   ├── src
    │   │   ├── components
    │   │   ├── pages
    │   │   ├── App.js
    │   │   └── index.js
    │   └── .env
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── yarn.lock
