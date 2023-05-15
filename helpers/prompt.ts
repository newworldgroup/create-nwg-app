import inquirer, { Answers, QuestionCollection } from "inquirer";

const q: QuestionCollection = [
  {
    type: "input",
    name: "appName",
    message: "What is the name of your app?",
    default: `${process.argv[2] ?? "my-app"}`,
  },
  {
    type: "confirm",
    name: "typescript",
    message: "Use TypeScript?",
    default: true,
  },
  {
    type: "checkbox",
    name: "routes",
    message: "Your app's routes:",
    choices: [
      "Amenities",
      "Availability",
      "Building",
      "Contact",
      "Gallery",
      "Neighborhood",
      "Penthouse",
      "Portfolio",
      "Press",
      "Projects",
      "Residencies",
      "Studio",
      "Team",
    ],
    default: ["Contact"],
  },
  {
    type: "input",
    name: "analytics",
    message: "Google Analytics tracking ID?",
    default: "UA-XXXXXXXXX-X",
  },
  {
    type: "list",
    name: "cli",
    message: "CLI?",
    choices: ["npm", "yarn", "pnpm"],
    default: 0,
  },
];

/**
 * @description Prompt the user for information about their app
 * @returns  The answers to the prompts
 * @todo  Add validation to the prompts
 * @todo  Add a prompt for an animation library (framer-motion or gsap)
 * @todo  Add a prompt for a CMS
 * @todo  Add a prompt for a database
 * @todo  Add a prompt for a backend email service
 * @todo  Add a prompt for a backend SEO service
 * @todo Integrate a monoreppo flag
 *
 */

export const PROMPT = async (): Promise<Answers> => {
  try {
    return await inquirer.prompt(q);
  } catch (error) {
    console.log("error: ", error);
    return {
      appName: "my-app",
      typescript: "Yes",
      routes: ["Contact"],
      analytics: "UA-XXXXXXXXX-X",
      gtm: "GTM-XXXXXXX",
    };
  }
};
