var REST = require("node-rest-client").Client;
var restClient = new REST();

function apicall(method, url, headers, data, timout) {
  return new Promise((resolve, reject) => {
    var args = {
      headers: headers,
      data: data,
      requestConfig: {
        timeout: 5000, //request timeout in milliseconds
        noDelay: true, //Enable/disable the Nagle algorithm
        keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
        keepAliveDelay: 1000, //and optionally set the initial delay before the first keepalive probe is sent
      },
      // responseConfig: {
      //   timeout: 1000, //response timeout
      // },
    };

    let lowerCaseMethod = method.toLowerCase();
    restClient[lowerCaseMethod](url, args, function (data, response) {
      resolve(data);
    }).on("error", function (error) {
      // console.log(error);
      reject("error");
    });
  });
}

module.exports = apicall;
