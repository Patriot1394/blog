

function showFirstPOST(response, data, index){

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = POST\n");
  response.write(data["POST"]);
  response.end();
}

function showFirstGET(response, data, index){

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Method = GET\n");
  if(!isNaN(index)){
    response.write("Item number:"+index+"\n");
  }
  else{
    response.write("All items\n");
  }
  response.write(data["GET"]);
  response.end();
}

function updateNote(response, data, index){
  
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Method = GET\n");
    response.write(data["GET"]);
    response.end();
  }
  


exports.showFirstPOST = showFirstPOST;
exports.showFirstGET = showFirstGET;
exports.updateNote = updateNote;