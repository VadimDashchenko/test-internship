const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const serverPort = 8080;

const routes = {
    users: {
        get: 'api/clients'
    }
};

app.get(routes.users.get, function (req, res) {
    res.sendFile(__dirname + '/middlewares/clients.json');
});

app.use('*', function (req, res) {
    res.redirect(routes.users.get)
});

app.listen(serverPort);
console.log(`[users] API ${serverPort}`);
