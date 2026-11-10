const greet = require("./index");
if (greet("Jenkins") !== "Hello, Jenkins! Built by Jenkins.") {
  console.error("Test failed");
  process.exit(1);
}
console.log("Test passed");
