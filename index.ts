#!/usr/bin/env node

import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import questions from "./utils/questions";
import version from "./utils/version";

let logo = fs.readFileSync(
  path.resolve("./assets/", "cropped_logo.txt"),
  "utf8"
);

const setupNextApp = async () => {
  console.log(logo);
  console.log(version());

  inquirer
    .prompt(questions)
    .then(({ appName, typescript, routes, styling, eslint, prettier }) => {
      console.log(appName, typescript, routes, styling, eslint, prettier);
      console.log("Next.js app created successfully!");
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};

setupNextApp();
