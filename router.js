function routeQuery(handle, pathname, response, data) {
    if (typeof handle[pathname] === 'function') {
      handle[pathname](response, data);
    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
  }
  
  exports.routeQuery = routeQuery;