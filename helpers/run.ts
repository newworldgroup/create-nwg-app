import { execSync } from "child_process";
/**
 * @description Run a command in the terminal
 * @param command
 * @returns  true if the command was successful, false otherwise
 */
const RUN = (command: string) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

export { RUN };
