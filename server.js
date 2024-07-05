const apiRetry = require("./lib/apiRetry");

// Usage example:
// apiRetry(method, url, headers, data , timout, retries) ;

async function y() {
  try {
    let x;
    // ----------------------- correct apis ---------------------

    // PATCH
    // x = await apiRetry(
    //   "PATCH",
    //   "https://jsonplaceholder.typicode.com/posts/1",
    //   { "Content-Type": "application/json" },
    //   {
    //     title: "foo"
    //   }
    // );

    // PUT
    // x = await apiRetry(
    //   "PUT",
    //   "https://jsonplaceholder.typicode.com/posts/1",
    //   { "Content-Type": "application/json" },
    //   {
    //     id: 1,
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }
    // );

    // POST
    // x = await apiRetry(
    //   "POST",
    //   "https://jsonplaceholder.typicode.com/posts",
    //   { "Content-Type": "application/json" },
    //   {
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }
    // );

    // GET
    // x = await apiRetry("GET", "https://jsonplaceholder.typicode.com/posts");

    // GET /posts/1
    x = await apiRetry("GET", "https://jsonplaceholder.typicode.com/posts/1");

    // GET /posts?userId=1
    // x = await apiRetry("GET", "https://jsonplaceholder.typicode.com/posts?userId=1");

    // DELETE
    // x = await apiRetry("DELETE", "https://jsonplaceholder.typicode.com/posts/1");


    // ----------------------- incorrect apis ---------------------

    // PATCH
    // x = await apiRetry(
    //   "PATCH",
    //   "https://djsonplaceholder.typicode.com/posts/1",
    //   { "Content-Type": "application/json" },
    //   {
    //     title: "foo"
    //   }
    // );

    // PUT
    // x = await apiRetry(
    //   "PUT",
    //   "https://djsonplaceholder.typicode.com/posts/1",
    //   { "Content-Type": "application/json" },
    //   {
    //     id: 1,
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }
    // );

    // POST
    // x = await apiRetry(
    //   "POST",
    //   "https://djsonplaceholder.typicode.com/posts",
    //   { "Content-Type": "application/json" },
    //   {
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }
    // );

    // GET
    // x = await apiRetry("GET", "https://djsonplaceholder.typicode.com/posts");

    // GET /posts/1
    // x = await apiRetry("GET", "https://djsonplaceholder.typicode.com/posts/1");

    // GET /posts?userId=1
    // x = await apiRetry("GET", "https://djsonplaceholder.typicode.com/posts?userId=1");

    // DELETE
    // x = await apiRetry("DELETE", "https://djsonplaceholder.typicode.com/posts/1");



    // ----------------------- slow apis ---------------------
    // x = await apiRetry("GET", "https://cluster.qa8.cloud.conves.io:5443/env/1a5/apps/stacks");

    console.log("x: ");
    console.log(x);
    process.exit(0);
  } catch (error) {
    // console.error("final error");
    console.error("We need to stop this job and notify in slack !");
  }
}

y();
