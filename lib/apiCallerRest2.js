var REST = require("node-rest-client").Client;
var restClient = new REST();

// Function with improved error handling and flexibility
function apicall(
  method = "GET",
  url,
  headers = {},
  data = null,
  timout
) {
  return new Promise((resolve, reject) => {
    var args = {
      // path: { "id": 120 },
      // parameters: { arg1: "hello", arg2: "world" },
      // headers: { "test-header": "client-api" },
      // data: "<xml><arg1>hello</arg1><arg2>world</arg2></xml>",
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

    restClient
      .get(url, args, function (data, response) {
        // console.log(data)
        resolve(data);
      })
      .on("error", function (error) {
        console.log(error.code);
        reject("error");
      });
  });
}

module.exports = apicall;

// apicall(method, url, headers, data , timout) ;
