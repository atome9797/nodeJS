const http = require('http');

http.createServer((req,res) => {

    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>우진이 사람아님</h1>');
    res.end('<p>노우진 에휴</p>');
})

.listen(8080 , () => {
    console.log('8080번 포트에서 서버 대기중입니다!');
});


http.createServer((req,res) => {

    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>우진아 좀더 열심히 하자</h1>');
    res.end('<p>노우진 에휴</p>');
})

.listen(8081 , () => {
    console.log('8081번 포트에서 서버 대기중입니다!');
});
