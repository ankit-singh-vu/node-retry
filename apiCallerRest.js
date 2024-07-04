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
    console.log("trying again 1");
    restClient
      .get(url, {}, function (data, response) {
        // console.log(data)
        resolve(data);
      })
      .on("error", function (err1) {
        if (err1) {
          console.log("trying again 2");
          restClient
            .get(url, {}, function (data, response) {
              // console.log(data)
              resolve(data);
            })
            .on("error", function (err2) {
              if (err2) {
                console.log("trying again 3");
                restClient
                  .get(url, {}, function (data, response) {
                    // console.log(data)
                    resolve(data);
                  })
                  .on("error", function (err3) {
                    if (err3) {
                      reject("err3")
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
