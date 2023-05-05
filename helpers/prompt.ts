import inquirer, { Answers, QuestionCollection } from "inquirer";

const q: QuestionCollection = [
  {
    type: "input",
    name: "appName",
    message: "What is the name of your app?",
    default: `${process.argv[2] ?? "my-app"}`,
  },
  {
    type: "list",
    name: "typescript",
    message: "Use TypeScript?",
    choices: ["Yes", "No"],
    default: "Yes",
  },
  {
    type: "checkbox",
    name: "routes",
    message: "Which routes do you want to include?",
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
    message: "What is your Google Analytics tracking ID?",
    default: "UA-XXXXXXXXX-X",
  },
  {
    type: "input",
    name: "gtm",
    message: "What is your Google Tag Manager ID?",
    default: "GTM-XXXXXXX",
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
 */

const PROMPT = async (): Promise<Answers> => {
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

export { PROMPT };
