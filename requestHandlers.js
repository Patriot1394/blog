

function showFirstPOST(response, data){

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = POST\n");
  response.write(data["POST"]);
  response.end();
}

function showFirstGET(response, data){

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = GET\n");
  response.write(data["GET"]);
  response.end();
}

exports.showFirstPOST = showFirstPOST;
exports.showFirstGET = showFirstGET;