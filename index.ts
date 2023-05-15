#!/usr/bin/env node

import { INTRO } from "./helpers/intro.js";
import { PROMPT } from "./helpers/prompt.js";
import { CLONE } from "helpers/clone.js";
import { MODIFY } from "helpers/modify.js";
import { INSTALL } from "helpers/install.js";
import { STATUS } from "helpers/status.js";
import { RUN } from "helpers/run.js";

(async () => {
  INTRO();
  const answers = await PROMPT();
  const repoName = answers.appName.toLowerCase().replace(/\s/g, "-");

  STATUS(`cloning repo with name ${repoName}...`, CLONE(repoName));
  STATUS(`modifying repo...`, MODIFY(answers));
  // STATUS(`installing dependencies...`, INSTALL(repoName));
  // STATUS(`opening in VSCode...`, RUN(`cd ${repoName} &&  code .`));
  // STATUS(`launching dev server...`, RUN(`cd ${repoName} && npm run dev`));
})();
