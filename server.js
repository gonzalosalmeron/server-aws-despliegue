const { hostname } = require('os');
const http = require("http");

const port = 8080;

const requestListener = function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type',"text/plain");
    res.end("My server!");
};

const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
    console.log(`Server is running on http://${host}:${port}`);
});