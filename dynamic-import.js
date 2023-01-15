"use strict";

async function main() {
  const got = await import("got").then((module) => module.default);

  const response = await got("https://api.github.com/users").json();

  console.log(JSON.stringify(response[0], null, " "));
}

main();
