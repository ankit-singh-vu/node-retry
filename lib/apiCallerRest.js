var REST = require("node-rest-client").Client;
var restClient = new REST();

// Function with improved error handling and flexibility
function apicall(
  method = "GET",
  url,
  headers = {},
  data = null,
  timout,
  retries = 3
) {
  return new Promise((resolve, reject) => {
    console.log("attempt 1");
    restClient
      .get(url, {}, function (data, response) {
        // console.log(data)
        resolve(data);
      })
      .on("error", function (err1) {
        if (err1) {
          console.log("attempt 2");
          restClient
            .get(url, {}, function (data, response) {
              // console.log(data)
              resolve(data);
            })
            .on("error", function (err2) {
              if (err2) {
                console.log("attempt 3");
                restClient
                  .get(url, {}, function (data, response) {
                    // console.log(data)
                    resolve(data);
                  })
                  .on("error", function (err3) {
                    if (err3) {
                      let error_data = {};
                      error_data.custom_error_message = "Could not connect to external api even after after trying 3 times";
                      error_data.actual_error = err3;
                      reject( error_data );
                    }
                  });
              }
            });
        }
      });

    // if(data){
    //   restClient.post(
    //     url,
    //     {
    //       data: data,
    //       headers: headers,
    //     },
    //     function (data, response) {
    //       console.log(data)
    //       // resolve(response);
    //     }
    //   );
    // }
  });
}

// Make the function accessible from other files in your project
module.exports = apicall;

// apicall(method, url, headers, data , timout, retries) ;