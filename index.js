const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Import authentication routes
const authRoutes = require('./auth');
app.use('/auth', authRoutes);

console.log("Loaded routes:");
app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
        console.log(r.route.path);
    }
});


const PORT = process.env.PORT || 5000;

app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
        console.log(`Route loaded: ${r.route.path}`);
    }
});

console.log("Loaded routes:");
app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
        console.log(r.route.path);
    }
});



// const express = require('express');
// const cors = require('cors');
require('dotenv').config();

//const app = express();
//app.use(express.json());
//app.use(cors());

console.log("Attempting to load auth.js");
//const authRoutes = require('./auth');
console.log("auth.js successfully loaded");

// Register the auth routes
app.use('/auth', authRoutes);
console.log("Auth routes registered");

// Start server
//const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Debug: Print loaded routes
console.log("Listing all loaded routes");
app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
        console.log(`Loaded route: ${r.route.path} [${Object.keys(r.route.methods).join(', ').toUpperCase()}]`);
    }
});

