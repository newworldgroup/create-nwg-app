import { RUN } from "./run.js";
import { STATUS } from "./status.js";

/**
 * @description Install the dependencies for the new app
 * @param repoName  The name of the new repo
 * @returns void
 */
const INSTALL = (repoName: string) => {
  const InstallDepsCommand = `cd ${repoName} && npm i`;
  const depsInstalled = RUN(InstallDepsCommand);
  if (!depsInstalled)
    STATUS("installing dependencies failed, exiting...", process.exit(-1));

  STATUS("dependencies installed successfully!");
};

export { INSTALL };
