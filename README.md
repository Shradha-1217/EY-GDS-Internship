# Project Management Tool (MERN Stack)

## Overview
The **Project Management Tool** is a comprehensive solution for planning, executing, and monitoring projects efficiently. Built using the **MERN stack (MongoDB, Express.js, React.js, and Node.js)**, this tool integrates all project-related activities into a single platform, enhancing productivity, improving collaboration, and ensuring timely project delivery.

## Features
- **Dashboard Overview**: Displays key project statistics, recent activities, and progress.
- **Project Creation & Management**: Users can create new projects with descriptions, deadlines, and assigned team members.
- **Task Management**: Users can add, update, and delete tasks within projects.
- **Progress Tracking**: Visual progress bar or Kanban board to track project completion.
- **User Authentication**: Secure login and registration system using JWT authentication.
- **Role-Based Access Control**: Admins, project managers, and team members with different permissions.
- **Notifications & Alerts**: Real-time updates on project activities.
- **Dark/Light Mode**: Customizable UI themes.
- **API Integration**: RESTful APIs to handle project and task management.

## Tech Stack
- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: JSON Web Tokens (JWT)
- **Version Control**: Git and GitHub

## Installation & Setup
### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/try/download/community)
- Install [Git](https://git-scm.com/)

### Clone the Repository
```sh
git clone https://github.com/yourusername/project-management-tool.git
cd project-management-tool
```

### Backend Setup (Express.js)
```sh
cd backend
npm install
```
#### Configure Environment Variables
Create a `.env` file in the **backend** directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
#### Start the Server
```sh
npm start
```

### Frontend Setup (React.js)
```sh
cd ../frontend
npm install
npm start
```

## Usage
1. **Register/Login** to access the platform.
2. **Create a new project** and add team members.
3. **Manage tasks**, assign deadlines, and track progress.
4. **Monitor updates** through the dashboard and notifications.

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user and get token

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-new-feature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
