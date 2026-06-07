# MERN Practice Workspace

A central monorepo compilation of MERN stack (MongoDB, Express, React, Node.js) projects and training exercises. This repository spans from basic React design patterns to fully-fledged Express API backends.

## 📁 Repository Structure

The workspace is organized into three major sections:

### 1. 🚀 [FirstProject](./FirstProject)
A complete, integrated MERN application split into two parts:
*   **[backend](./FirstProject/backend)**: Express server connected to MongoDB (`notesDB` database via Mongoose) hosting notes API routes.
*   **[frontend](./FirstProject/frontend)**: A standard React application utilizing `axios` to interact with the backend API.

---

### 2. 🔌 [backendProject](./backendProject)
Backend API projects practicing database schemas, controllers, and routing structures:
*   **[taskManager](./backendProject/taskManager)**: Node/Express project demonstrating MongoDB database connectivity and CRUD actions for task management.
*   **[userAuth](./backendProject/userAuth)**: User Authentication system demonstrating password hashing, user registration, login, and secured routes.

---

### 3. 🎨 [frontendProject](./frontendProject)
React projects built with Vite, each exploring different styling methodologies, configurations, and state handling:
*   **[task_Manager](./frontendProject/task_Manager)**: React task manager application using local state management to add, delete, and toggle tasks.
*   **[propsProject](./frontendProject/propsProject)**: Practical example demonstrating React props, custom components, and map rendering (e.g. a dynamic job postings board).
*   **[tailwindCSS](./frontendProject/tailwindCSS)**: Interface layouts constructed using utility-first classes in Tailwind CSS.
*   **[css](./frontendProject/css)**: Application of modular and standard CSS custom designs.

---

## ⚙️ Getting Started

To run any of the projects locally, navigate into the specific project directory and follow these guidelines:

### 📦 1. Installation
Run the installer command in the folder containing `package.json` to configure dependencies:
```bash
npm install
```

### 🔑 2. Environment Configuration
For backend projects (`taskManager` and `userAuth`), create a `.env` file in the project's root folder matching the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_token
```

### ⚡ 3. Running Locally
*   For **Vite React frontends** / **Express backends**:
    ```bash
    npm run dev
    ```
*   For **Create React App (FirstProject/frontend)**:
    ```bash
    npm start
    ```

  ---
