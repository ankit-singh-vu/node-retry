var REST = require("node-rest-client").Client;
var restClient = new REST();

function apicall(method, url, args) {
  let timoutinseconds = 600; // 10 minutes
  let timoutinmiliseconds = timoutinseconds * 1000;
  return new Promise((resolve, reject) => {
    args.requestConfig = {
      timeout: timoutinmiliseconds, //request timeout in milliseconds
      // noDelay: true, //Enable/disable the Nagle algorithm
      // keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
      // keepAliveDelay: 1000, //and optionally set the initial delay before the first keepalive probe is sent
    };
    // console.log(args);
    let lowerCaseMethod = method.toLowerCase();
    restClient[lowerCaseMethod](url, args, function (data, response) {
      resolve(data);
    }).on("error", function (error) {
      console.log(error);
      reject("error");
    });
  });
}

module.exports = apicall;
