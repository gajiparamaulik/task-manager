# Task Manager
Learning project demonstrating REST APIs, Express.js, MongoDB, authentication, and CRUD operations.


## 📁 Project Structure

```text
src/
├── index.js          # Starts the server
├── app.js            # Configures Express and wires up routes
├── db/               # Connects to MongoDB
├── models/           # Defines Mongoose schemas (data models)
├── controllers/      # The actual logic for each request / Request handling logic 
├── routes/           # API routes / maps URLs to controllers
├── middlewares/      # Express middleware / code that runs *between* request and controller
├── validators/       # Request validation
└── utils/            # Helper functions / reusable 
```