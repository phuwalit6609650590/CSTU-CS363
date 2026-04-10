const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        //ส่วนที่ 2 ข้อ 1 เอาโค้ดลงdocด้วย
        
    } 
    
    else if (req.url === '/members_text') {
        //ส่วนที่ 2 ข้อ 2 เอาโค้ดลงdocด้วย
        
    } 

    else if (req.url === '/members_html') {
        //ส่วนที่ 2 ข้อ 3 เอาโค้ดลงdocด้วย
    } 
});

//ส่วนที่ 2 ข้อ 4 รันแล้วเขียนเปรียบเทียบในdoc
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});