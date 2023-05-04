export default [
  {
    type: "input",
    name: "appName",
    message: "What is the name of your Next.js app?",
    default: "my-next-app",
  },
  {
    type: "list",
    name: "typescript",
    message: "Do you want to use TypeScript?",
    choices: ["Yes", "No"],
  },
  {
    type: "input",
    name: "routes",
    message: "What routes do you want to create?",
    default: "about contact gallery",
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
