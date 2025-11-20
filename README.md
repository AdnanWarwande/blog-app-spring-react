# 📝 Full-Stack Blogging Platform (Spring Boot & React Monorepo)

This repository contains the complete source code for a responsive, full-stack blogging application. This project is structured as a Monorepo, separating the backend RESTful API services (Spring Boot) from the dynamic user interface (React).

This project was developed as a Final Year Project/Capstone for academic submission.

## 🚀 Technologies Used

This application utilizes a modern, robust, and industry-standard technology stack for full-stack development.

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Backend API** | **Java, Spring Boot** | Core RESTful API built on the Spring framework, responsible for handling business logic, security, and data persistence. |
| **Frontend UI** | **React.js** | The user interface (UI) library, providing a fast, component-based, and modern experience for users. |
| **Database** | **MySQL** |  Stores user data, posts, categories, and comments. |
| **Security** | **Spring Security** | Implements role-based access control and JWT (JSON Web Token) authentication for secure API endpoints. |

## 📁 Repository Structure (Monorepo)

The project follows a standard monorepo structure, making it easy to manage both codebases under a single version control system.

blog-app-spring-react/ ├── .git/ ├── .gitignore # Single file ignoring dependencies (node_modules, target, etc.) ├── README.md # This file ├── Backend-Blogging-Application-main/ # ⬅️ Spring Boot API (Java/Maven Project) │ ├── src/ │ ├── pom.xml │ └── ... └── blog-app-main/ # ⬅️ React User Interface (Node/NPM Project) ├── public/ ├── src/ ├── package.json └── ...


## ⚙️ Setup and Installation Guide

To run this application locally, you must set up both the backend and frontend components.

### Prerequisites

* **Java Development Kit (JDK 17 or higher)**
* **Apache Maven**
* **Node.js (LTS recommended) and npm**
* (Optional: A running MySQL instance or knowledge of how to use H2/PostgreSQL)

### 1. Backend Setup (Spring Boot)

1.  Navigate to the backend directory:

    ```bash
    cd Backend-Blogging-Application-main
    ```

2.  Review the database configuration in `src/main/resources/application.properties` (or `application.yml`) and ensure the credentials match your local database setup (e.g., username, password, JDBC URL).

3.  Build the project using Maven:

    ```bash
    mvn clean install
    ```

4.  Run the Spring Boot application:

    ```bash
    mvn spring-boot:run
    ```

    The API should start on `http://localhost:8080` (or the port specified in your properties file).

### 2. Frontend Setup (React)

1.  Open a **new terminal tab/window** and navigate to the frontend directory:

    ```bash
    cd blog-app-main
    ```

    *(Note: Ensure your service files are pointed to the correct backend port, usually `http://localhost:8080`.)*

2.  Install the necessary Node.js dependencies:

    ```bash
    npm install
    ```

3.  Start the React development server:

    ```bash
    npm start
    ```

    The frontend should open automatically in your browser, typically at `http://localhost:3000`.

### Application Status

The full-stack application is considered operational when:

* The Spring Boot API is running (Terminal 1).
* The React app is running and connected (Terminal 2).
* You can successfully register, log in, create a post, and view posts.
