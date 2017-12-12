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

        let index ={};
        let comand = (url.parse(request.url).pathname).split('/');
        index["post"] = +parseFloat(comand[(comand.indexOf("post"))+1])//получаем значение post из адресной строки если есть
        index["comment"] = +parseFloat(comand[(comand.indexOf("comment"))+1])//получаем значение comment из адресной строки если есть
        let pathname = request.method+"/";


        if(!isNaN(index["post"])){
            pathname+="post"
            if(!isNaN(index["comment"])){
                pathname+="/comment"
            }
        }

        request.on('data', function(chunk) {
            data["POST"] += chunk.toString();
        });

        request.on('end', function() {
            console.log(data["POST"]);
            console.log(data["GET"]);
            routeQuery(handle, pathname, response, data, index);
        });


    }
    let server = http.createServer(onRequest);
    server.listen(port);
    console.log("Server has started.");
}
exports.startServer = startServer;