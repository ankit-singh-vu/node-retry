const apicall = require("./apiCallerRest");

// Usage example:
// apicall(method, url, headers, data , timout, retries) ;

async function y() {
  try {
    let x;
    // ----------------------- correct apis ---------------------

    // POST /posts    
    // x = await apicall(
    //     "POST",
    //     "https://jsonplaceholder.typicode.com/posts/1",
    //     {
    //         "Content-type": "application/json; charset=UTF-8",
    //     },
    //     {
    //         title: "foo",
    //         body: "bar",
    //         userId: 1,
    //     }
    // );

    // GET /posts
    // x = await apicall("GET", "https://jsonplaceholder.typicode.com/posts");

    // GET /posts/1
    // x = await apicall("GET", "https://jsonplaceholder.typicode.com/posts/1");


    // ----------------------- incorrect apis ---------------------

    // POST /posts    
    // x = await apicall(
    //     "POST",
    //     "https://djsonplaceholder.typicode.com/posts/1",
    //     {
    //         "Content-type": "application/json; charset=UTF-8",
    //     },
    //     {
    //         title: "foo",
    //         body: "bar",
    //         userId: 1,
    //     }
    // );

    // GET /posts
    // x = await apicall("GET", "https://djsonplaceholder.typicode.com/posts");

    // GET /posts/1
    // x = await apicall("GET", "https://djsonplaceholder.typicode.com/posts/1");


    console.log("x: ");
    console.log(x);
  } catch (error) {
    // console.error( error);
    if(error.custom_error_message == "Could not connect to external api even after after trying 3 times" )
        {
            console.error("We need to stop this job and notify in slack !")
        }
  }
}

y();
