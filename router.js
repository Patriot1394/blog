function routeQuery(handle, pathname, response, data, index) {
    if (typeof handle[pathname] === 'function') {
      handle[pathname](response, data, index);
    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
  }
  
  exports.routeQuery = routeQuery;