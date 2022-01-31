const express = require('express');
const cors = require("cors"); //Cross-Origin Resource Sharing

const path = require('path');


const userRoutes = require("./src/users/users_routes");
const agentRoutes = require("./src/agents/agents_routes");
// const sessionRoutes = require("./src/sessions/sessions_routes");

const app = express();
const port = process.env.PORT || 5000;
// app.use(express.static("./../../../client/build"));

// if (process.env.NODE_ENV === 'production') {
// server static content
// app.use(express.static(path.join(__dirname, "client/build")));

// }

// console.log(__dirname);
// console.log(path.join(__dirname, "../../../client/build"));


app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));
app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome Zooming api endpoint'
    })
})

app.get('/', (req, res) => {
    res.send(`Zooming care rest api server working on port ${port}`);
});

app.use("/api/getUsers", userRoutes);
app.use("/api/getAgents", agentRoutes);
// app.use("/sessions", sessionRoutes);

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
    console.log(`zooming care App listening on port ${port}`);
});