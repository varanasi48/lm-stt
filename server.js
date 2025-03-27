const express = require("express");
const app = express();

app.use(express.static("public")); // Serve static files

app.get("/", (req, res) => {
    res.send("Hello welcome to Little Miracles!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
