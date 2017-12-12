var server = require("./server")
var router = require("./router");
var requestHandlers = require("./requestHandlers");


var handle = {}

handle["POST/"] = requestHandlers.showFirstPOST;
handle["POST/post"] = requestHandlers.addPost;
handle["POST/post/comment"] = requestHandlers.addComment;

handle["GET/"] = requestHandlers.showFirstGET;
handle["GET/post"] = requestHandlers.showPost;
handle["GET/post/comment"] = requestHandlers.showComment;


handle["PUT/"] = requestHandlers.showFirstGET;
handle["PUT/post"] = requestHandlers.updatePost;
handle["PUT/post/comment"] = requestHandlers.updateComment;

handle["DELETE/"] = requestHandlers.showFirstGET;
handle["DELETE/post"] = requestHandlers.deletePost;
handle["DELETE/post/comment"] = requestHandlers.deleteComment;

server.startServer(router.routeQuery, handle);