

function showFirstPOST(response, data, index){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = POST\n");
  response.write(data["POST"]);
  response.end();
}

function showFirstGET(response, data, index){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = GET\n");
  response.write("All items\n");
  response.write(data["GET"]);
  response.end();
}


function addPost(response, data, index){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = POST\n");
  response.write("Post number: ");
  response.write(""+index["post"]+"\n");
  response.write("Data: ");
  response.write(data["POST"]);
  response.end();
}
function showPost(response, data, index){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = GET\n");
  response.write("Post number: ");
  response.write(""+index["post"]+"\n");
  response.write("Data: ");
  response.write(data["GET"]);
  response.end();
}
function updatePost(response, data, index){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = PUT\n");
  response.write("Post number: ");
  response.write(""+index["post"]+"\n");
  response.write("Data: ");
  response.write(data["POST"]);
  response.end();
}
function deletePost(response, data, index){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = DELETE\n");
  response.write("Post number: ");
  response.write(""+index["post"]+"");
  response.end();
}


function addComment(response, data, index){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = POST\n");
  response.write("Post number: ");
  response.write(""+index["post"]+"\n");
  response.write("Comment number: ");
  response.write(""+index["comment"]+"\n");
  response.write("Data: ");
  response.write(data["POST"]);
  response.end();
}
function showComment(response, data, index){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = GET\n");
  response.write("Post number: ");
  response.write(""+index["post"]+"\n");
  response.write("Comment number: ");
  response.write(""+index["comment"]+"\n");
  response.write("Data: ");
  response.write(data["GET"]);
  response.end();
}
function updateComment(response, data, index){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = PUT\n");
  response.write("Post number: ");
  response.write(""+index["post"]+"\n");
  response.write("Comment number: ");
  response.write(""+index["comment"]+"\n");
  response.write("Data: ");
  response.write(data["POST"]);
  response.end();
}
function deleteComment(response, data, index){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = DELETE\n");
  response.write("Post number: ");
  response.write(""+index["post"]+"\n");
  response.write("Comment number: ");
  response.write(""+index["comment"]+"");
  response.end();
}

exports.showFirstPOST = showFirstPOST;
exports.showFirstGET = showFirstGET;

exports.addPost = addPost;
exports.showPost = showPost;
exports.updatePost = updatePost;

exports.addComment = addComment;
exports.showComment = showComment;
exports.updateComment = updateComment;

exports.deletePost = deletePost;
exports.deleteComment = deleteComment;