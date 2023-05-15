import { Answers } from "inquirer";
import { STATUS } from "./status.js";
import { RUN } from "./run.js";

export const MODIFY = (answers: Answers) => {
  console.log(answers);

  console.log(process.cwd());
};
