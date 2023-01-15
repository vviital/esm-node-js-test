"use strict";

const got = require("got");

async function main() {
  const response = await got("https://api.github.com/users").json();

  console.log(JSON.stringify(response[0], null, " "));
}

main();
