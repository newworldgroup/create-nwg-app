#!/usr/bin/env node

import { CREATE } from "helpers/create.js";
import { INTRO } from "./helpers/intro.js";
import { PROMPT } from "./helpers/prompt.js";

(async () => {
  INTRO();
  const answers = await PROMPT();
  CREATE(answers);
})();
