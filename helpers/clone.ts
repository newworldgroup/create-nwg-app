import { RUN } from "./run.js";
import { STATUS } from "./status.js";

const TARBALL_URL =
  "https://api.github.com/repos/newworldgroup/boiler_plate_nextjs/tarball";

/**
 * @description Clone the boilerplate repo
 * @param repoName  The name of the new repo
 * @returns void
 * @todo  change the git remote url to the new user's repo
 * @todo  modify the boilerplate to use the answers
 *
 */
const CLONE = (repoName: string) => {
  const gitCheckoutCommand = `curl -L -o /${repoName}.zip ${TARBALL_URL} && unzip {repoName}.zip && rm ${repoName}.zip
`;
  const checkedOut = RUN(gitCheckoutCommand);
  if (!checkedOut) {
    STATUS("cloning failed, exiting...");
    process.exit(-1);
  }
  STATUS("cloning successful!");
};

export { CLONE };
