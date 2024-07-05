const apiRetry = require("./lib/apiRetry");

// Usage example:
// apiRetry(method, url, headers, data , timout, retries) ;

async function y() {
  try {
    let x;
    // ----------------------- correct apis ---------------------

    // POST /posts    
    // x = await apiRetry(
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
    // x = await apiRetry("GET", "https://jsonplaceholder.typicode.com/posts");

    // GET /posts/1
    x = await apiRetry("GET", "https://jsonplaceholder.typicode.com/posts/1");


    // ----------------------- incorrect apis ---------------------

    // POST /posts    
    // x = await apiRetry(
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
    // x = await apiRetry("GET", "https://djsonplaceholder.typicode.com/posts");

    // GET /posts/1
    // x = await apiRetry("GET", "https://djsonplaceholder.typicode.com/posts/1");
    // x = await apiRetry("GET", "https://cluster.qa8.cloud.conves.io:5443/env/1a5/apps/stacks");


    console.log("x: ");
    console.log(x);
    process.exit(0);
  } catch (error) {
    // console.error( error);
    // if(error.custom_error_message == "Could not connect to external api even after after trying 3 times" )
    //     {
    //         console.error("We need to stop this job and notify in slack !")
    //     }
    console.error("error");
    console.error("We need to stop this job and notify in slack !");
    
  }
}

y();
