const fs = require('fs');
 
const requestHandler =(req,res)=>{
    const url = req.url;
        const method = req.method;
    
          let savedMessage = "";
        try {
            savedMessage = fs.readFileSync("user.txt",);
        } catch (err) {
            savedMessage = "";
        }
    
     
        if (url === '/' && method === 'GET') {
            res.setHeader('Content-Type', 'text/html');
    
            res.end(`
                <p style="font-size:20px; color:red;">${savedMessage || "No message saved yet."}</p>
                <hr>
                <form action="/submit" method="POST">
                    <label>Enter a message:</label>
                    <input type="text" name="username" />
                    <button type="submit">Submit</button>
                </form>
            `);
        }
    
        else if (url === '/submit' && method === 'POST') {
            let body = [];
    
    
            req.on('data', chunk => {
                body.push(chunk);
            });
    
      
            req.on('end', () => {
              
                const combinedBuffer = Buffer.concat(body).toString();
                const username = combinedBuffer.split('=')[1];
    
    
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
    
}

module.exports=requestHandler; 