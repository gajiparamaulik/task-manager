# Task Manager
Learning project demonstrating REST APIs, Express.js, MongoDB, authentication, and CRUD operations.

src/
├── index.js          → starts the server
├── app.js            → configures Express, wires up routes
├── db/               → connects to MongoDB
├── models/           → defines what data looks like (Mongoose schemas)
├── controllers/      → the actual logic for each request
├── routes/           → maps URLs to controllers
├── middlewares/      → code that runs *between* request and controller
├── validators/       → rules for checking incoming data
└── utils/            → reusable helper code
