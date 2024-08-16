const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<!DOCTYPE html>');
        res.write('<html lang="en">');
        res.write('<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Message Form</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"><label for="message">Message:</label><input type="text" id="message" name="message" required><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    //Redirecting to message
    if (url === '/message' && req.method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.writeHead(302, { Location: '/' });
        return res.end();
    }
    //process.exit() //This help to move out of loop events
   
})
server.listen(3000)