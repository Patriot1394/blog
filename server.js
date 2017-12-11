var http = require("http");
var url = require("url");

var port = 8888;

function startServer(routeQuery, handle) {
    function onRequest(request, response) {
        let data={};
        data["GET"]=url.parse(request.url).query;  
        data["POST"]="";
        let pathname = request.method + url.parse(request.url).pathname;
        

        request.on('data', function(chunk) {
            data["POST"] += chunk.toString();
        });

        request.on('end', function() {
            console.log(data["POST"]);
            console.log(data["GET"]);
            routeQuery(handle, pathname, response, data);
        });


    }
    var server = http.createServer(onRequest);
    server.listen(port);
    console.log("Server has started.");
}
exports.startServer = startServer;