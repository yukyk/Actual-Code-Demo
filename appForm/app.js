const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // Show form
    if (url === '/' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <form action="/submit" method="POST">
                <label>Name:</label>
                <input type="text" name="username" />
                <button type="submit">Submit</button>
            </form>
        `);
    }

    // Handle form submission
    else if (url === '/submit' && method === 'POST') {
        let body = [];

        // Collect incoming data into buffer array
        req.on('data', chunk => {
            body.push(chunk);
        });

        // When the body is fully received
        req.on('end', () => {
            // Convert buffer array into one buffer → then string
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];

            // Write to file using buffer
            const dataBuffer = Buffer.from(username, 'utf-8');

            fs.writeFile('user.txt', dataBuffer, (err) => {
                if (err) {
                    return res.end("Error writing file");
                }

                res.setHeader('Content-Type', 'text/html');
                res.end(`<h1>Username saved: ${username}</h1>`);
            });
        });
    }

    // Read file endpoint
    else if (url === '/read') {
        fs.readFile('user.txt', (err, data) => {
            if (err) {
                res.end("No file found!");
                return;
            }
            res.setHeader('Content-Type', 'text/html');
            res.end(`<h1>Saved User: ${data.toString()}</h1>`);
        });
    }

    // 404
    else {
        res.statusCode = 404;
        console.log(' ')
        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
