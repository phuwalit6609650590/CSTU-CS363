const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is my home page');
    } 
    
    else if (req.url === '/members_text') {
        const filePath = path.join(__dirname, 'members.html');
        
        fs.readFile(filePath, 'utf8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(data);
        });
    }  

    else if (req.url === '/members_html') {
        //ส่วนที่ 2 ข้อ 3 เอาโค้ดลงdocด้วย
    } 
});

//ส่วนที่ 2 ข้อ 4 รันแล้วเขียนเปรียบเทียบในdoc
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
