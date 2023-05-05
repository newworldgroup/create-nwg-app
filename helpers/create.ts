import { Answers } from "inquirer";
import { RUN } from "./run.js";
import { STATUS } from "./status.js";

const BOILERPLATE_URL = "https://github.com/newworldgroup/boiler_plate_nextjs";
/**
 * @description Clone the boilerplate repo
 * @param repoName  The name of the new repo
 * @returns void
 * @todo  change the git remote url to the new user's repo
 * @todo  modify the boilerplate to use the answers
 *
 */
const CLONE = (repoName: string) => {
  STATUS(`cloning repo with name ${repoName}...`);
  // const gitCheckoutCommand = `cp appDir_boiler ${repoName}`;
  const gitCheckoutCommand = `git clone --depth 1 ${BOILERPLATE_URL} ${repoName}`;
  const checkedOut = RUN(gitCheckoutCommand);
  if (!checkedOut) {
    STATUS("cloning failed, exiting...");
    process.exit(-1);
  }
  STATUS("cloning successful!");
};

/**
 * @description Install the dependencies for the new app
 * @param repoName  The name of the new repo
 * @returns void
 */

const INSTALL = (repoName: string) => {
  STATUS(`installing dependencies...`);
  const InstallDepsCommand = `cd ${repoName} && npm i`;
  const depsInstalled = RUN(InstallDepsCommand);
  if (!depsInstalled)
    STATUS("installing dependencies failed, exiting...", process.exit(-1));

  STATUS("dependencies installed successfully!");
};

/**
 * @description Create a new Next.js app with the given answers
 * @param answers  The answers to the prompts
 * @returns void
 * @todo modify the boilerplate to use the answers
 * @todo change the git remote url to the new user's repo
 */
export const CREATE = (answers: Answers) => {
  const { appName, typescript, routes, analytics, gtm } = answers;
  STATUS(`installing ${appName}...`);
  const repoName = appName.toLowerCase().replace(/\s/g, "-");

  CLONE(repoName);
  INSTALL(repoName);
  //   STATUS(
  //     "congratulations! your app is ready to go! Follow the steps below to get started:"
  //   );
  STATUS(`opening ${repoName} in VSCode...`, RUN(`cd ${repoName} &&  code .`));
  STATUS(
    `launching ${appName} in dev mode...`,
    RUN(`cd ${repoName} && npm run dev`)
  );
};
