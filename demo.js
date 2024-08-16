const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
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
        const body=[];
        req.on('data' ,(chunk)=>{ //This will listen to certain event
            console.log(chunk)
            body.push(chunk); //We push our chuck here, this is stream
        }); 
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message=parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.writeHead(302, { Location: '/' });
            return res.end();
        })
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<!DOCTYPE html>');
    res.write('<html lang="en">');
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>This is title Page</h1></body>')
    //process.exit() //This help to move out of loop events
   
})
server.listen(3000)