const apicall = require("./apiCallerRest");

// Usage example:
// apicall(method, url, headers, data , timout, retries) ;

async function y() {
  let x;
  //   x = await apicall(
  //     "POST",
  //     "https://jsonplaceholder.typicode.com/posts",
  //     {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //     {
  //       title: "foo",
  //       body: "bar",
  //       userId: 1,
  //     }
  //   );

  // GET	/posts
//   x = await apicall("GET", "https://jsonplaceholder.typicode.com/posts");

  //   GET	/posts/1
//   x = await apicall("GET", "https://jsonplaceholder.typicode.coma/posts/1");

  try {
    const x = await fetch("https://jsonplaceholder.typicode.coma/posts/1");
    console.log("x: ");
    console.log(x);
  } catch (error) {
    console.error("Error fetching data:", error);
  }


}

y();
