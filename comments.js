// Create web server
// Create a new file named comments.js in the server folder.
// In comments.js, import the express module and create a new router object.
// Create a new route for comments
// In comments.js, create a new route for GET requests to /comments.
// Create a new route for a specific comment
// In comments.js, create a new route for GET requests to /comments/:id.
// Export the router
// In comments.js, export the router object.
// Import the router
// In server.js, import the router object from comments.js.
// Use the router
// In server.js, use the router object as middleware for requests to /comments and /comments/:id.
// Run the server
// In the terminal, run the server with the command node server.js.
// Test the server
// In the browser, navigate to http://localhost:4001/comments. You should see the message "Comments: []".
// In the browser, navigate to http://localhost:4001/comments/1. You should see the message "Comment with ID: 1".
// In the browser, navigate to http://localhost:4001/comments/2. You should see the message "Comment with ID: 2".
// Solution
// server/comments.js
const express = require("express");
const router = express.Router();

router.get("/comments", (req, res) => {
  res.json({ comments: [] });
});

router.get("/comments/:id", (req, res) => {
  res.json({ comment: `Comment with ID: ${req.params.id}` });
});

module.exports = router;
// server/server.js
const express = require("express");
const app = express();
const commentsRouter = require("./comments");

app.use("/comments", commentsRouter);

app.listen(4001, () => {
  console.log("Server is listening on port 4001");
});
// Run the server with the command node server.js and test the routes in the browser.

// The /comments route should return the message "Comments: []".
// The /comments/:id route should return the message "Comment with ID: 1" for /comments/1 and "Comment with ID: 2" for /comments/2.
// After you have tested the server, stop the server by pressing Ctrl + C in the terminal.
// Note: The routes in comments.js are using the res.json method to send JSON data back to the client
