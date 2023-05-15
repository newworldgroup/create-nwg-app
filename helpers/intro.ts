import packageJson from "package.json";

/**
 * INTRO
 * @description Log the intro to the console when the CLI is run
 * @returns  void
 * @todo  Add a link to the documentation
 * @todo  Add a link to the GitHub repo
 * @todo check for updates and notify the user
 */
export const INTRO = () => {
  console.log(message);
};

export const message = `${`             ███    ███▀                                             ╟███▌     ╚█
      ▌     ┌███▌   ███▌                                               ████      ██
     ▌      ████   ╟██▌   ██████████████████████████████████████████▌   ████      █
    ▐       ███▌   ███    ,,,,,,,,  ,,,    ,,    ,,,  ,,,,,,,,,   ╙███   ╟███      ╫▌
    ╟      ]███▌  ]███    ╟████████▌ ███  ████  ╟██▌╒███▀▀▀███▌,   ███   ▐███▌     ▐▌
    ╫      ▐███▌  ▐███    ╟██    ╙██▌└███▐█████]███ ███     ██▌,   ╟██▌  ]███▌      ▌
    ╟▌     ]███▌   ███    ╟██     ╟██▄╙████▌ █████ ▐██████████▌,   ╫██▌  ]███▌      ▌
    ╟█      ████   ███▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄███,    ███   ╟███       ▌
     █▌     ╟███▄  ╙▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀    ╟██▌   ████      ]
     ╫█      ████                                               ╔███   ▐███       ╫
      ██     ╙████                                             ╓███   ┌███▌`}
      \n\nNew World Group CLI v${packageJson.version}\n\n`;
