const http = require('http');

http.createServer((req,res) => {

    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>우진이 사람아님</h1>');
    res.end('<p>노우진 에휴</p>');
})

.listen(8080 , () => {
    console.log('8080번 포트에서 서버 대기중입니다!');
});