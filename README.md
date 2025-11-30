# TODO-APP

## Description

A simple Todo App built with Node.js, Express, and MongoDB. This application allows users to create, read, update, and delete todo items.

## Key Features & Benefits

-   **Create Todos:** Easily add new tasks to your todo list.
-   **Read Todos:** View a list of all your current todos, sorted by creation date.
-   **Update Todos:** Modify existing todo items as needed.
-   **Delete Todos:** Remove completed or unnecessary todos from your list.
-   **User-Friendly Interface:** A clean and intuitive interface for managing your tasks.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

-   **Node.js:** (Version >= 12) - [https://nodejs.org/](https://nodejs.org/)
-   **npm:** (Typically comes with Node.js)
-   **MongoDB:** (Local or cloud-based) - [https://www.mongodb.com/](https://www.mongodb.com/)

## Installation & Setup Instructions

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/umzzy/TODO-APP.git
    cd TODO-APP
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    -   Create a `.env` file in the root directory.
    -   Add your MongoDB connection string:

    ```
    CONNECTION_URL=mongodb://localhost:27017/todo-app
    PORT=8000 #Optional. Default is 8000.
    ```

    *   Replace `mongodb://localhost:27017/todo-app` with your actual MongoDB connection string.

4.  **Run the Application:**

    ```bash
    npm start
    ```

    *   The server will start running on the port specified in your `.env` file (or port 8000 if no port specified).

5.  **Access the Application:**

    Open your web browser and navigate to `http://localhost:8000`.

## Usage Examples

Once the application is running, you can:

-   **Add a new Todo:** Click on the "Create Todo" button and fill out the form.
-   **View Todos:** All your todos will be displayed on the home page.
-   **Delete a Todo:** click the delete icon associated to the specific Todo.

## Configuration Options

The following environment variables can be configured:

| Variable       | Description                       | Default Value |
| -------------- | --------------------------------- | ------------- |
| `CONNECTION_URL` | MongoDB connection string       | `mongodb://localhost:27017/todo-app`    |
| `PORT` | Server port. | `8000` |

## Project Structure

```
├── .env            # Environment variables
├── .gitignore      # Specifies intentionally untracked files that Git should ignore
├── README.md       # Project documentation
├── app.js          # Main application file
├── controllers/    # Contains route handlers
│   ├── todo.js
│   └── index.js
├── init/         # Initialization scripts
│   └── mongodb.js    # MongoDB connection setup
├── models/         # Data models
│   └── Todo.js       # Todo model
├── package-lock.json # Records the exact versions of dependencies
├── package.json      # Project metadata and dependencies
├── public/         # Static assets
│   └── css/
│       └── style.css # CSS styling
└── routes/         # Defines application routes
│   └── todo.js       # Todo routes
└── views/          # EJS templates
│   └── deleteTodo.ejs # Template for deleting todo items
```

## Contributing Guidelines

Contributions are welcome! Here's how you can contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, descriptive messages.
4.  Push your changes to your forked repository.
5.  Submit a pull request to the main repository.

## License Information

This project does not currently have a specified license. All rights are reserved by the owner.

## Acknowledgments

*   This project utilizes [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/).
