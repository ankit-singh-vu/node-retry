// Function with improved error handling and flexibility
const apicall = require("./apiCallerRest");

function apiRetry( method, url, args, retries = 3, delayAfterRequestInSec = 5 ) {
  return new Promise(async (resolve, reject) => {
    for (let i = 1; i <= retries; i++) {
      try {
        x = await apicall(method, url, args);
        resolve(x);
      } catch (error) {
        let currentTime = new Date().toLocaleTimeString();
        console.log(currentTime + ` : Attempt ${i} failed: ${error}`);
        if( i != retries){
          await delayAfterRequest(delayAfterRequestInSec);
        }
      }
    }
    reject("error");
  });
}

// Helper function to add delay
function delayAfterRequest(seconds) {
  console.log("next request will be hit automatically  in " + seconds + " seconds");
  let milliseconds = seconds * 1000;
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

module.exports = apiRetry;
