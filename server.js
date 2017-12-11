var http = require("http");
var url = require("url");

var port = 8888;

function startServer(routeQuery, handle) {
    function onRequest(request, response) {
        let data={};
        data["POST"]="";
        data["GET"]=url.parse(request.url).query; 
        if(data["GET"]==null) 
            data["GET"]="";

        let index = url.parse(request.url).pathname;
        index = +parseFloat(index.split('/').reverse()[0]);//получаем последнее значение из адресной строки
        let pathname = request.method + url.parse(request.url).pathname;
        pathname = pathname.replace(index,"");//проблема если число повторяется /23/23

        request.on('data', function(chunk) {
            data["POST"] += chunk.toString();
        });

        request.on('end', function() {
            console.log(data["POST"]);
            console.log(data["GET"]);
            routeQuery(handle, pathname, response, data, index);
        });


    }
    var server = http.createServer(onRequest);
    server.listen(port);
    console.log("Server has started.");
}
exports.startServer = startServer;