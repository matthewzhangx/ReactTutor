var http = require("http");

http.createServer(function (request, response) {
    //这就是一个最简陋的后端， 就是我能take一个request, 这个request其实里面什么都没有，

    response.writeHead(200, {'Content-Type': 'text/html'});

    //但是我return给你一个事先定好的HTML
    response.end('<html><heade></heade><body> <p>This is a paragraph.</p> </body></html>'
    );

}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
