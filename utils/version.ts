import fs from "fs";
import path from "path";

export default () => {
  const packageJson = fs.readFileSync(
    path.resolve(__dirname, "../../package.json"),
    "utf8"
  );
  const { version } = JSON.parse(packageJson);
  return `\n\nNew World Group CLI v${version}\n\n`;
};
