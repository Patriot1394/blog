var server = require("./server")
var router = require("./router");
var requestHandlers = require("./requestHandlers");


var handle = {}
handle["POST/"] = requestHandlers.showFirstPOST;
handle["GET/"] = requestHandlers.showFirstGET;
handle["/post"] = requestHandlers.post;
/*
handle["/get"] = requestHandlers.get;
handle["/del"] = requestHandlers.del;
handle["/upd"] = requestHandlers.upd;
*/

server.startServer(router.routeQuery, handle);