/**
 * @description Log a message to the console and optionally run a method after
 * @param message  The message to log to the console
 * @param method  The method to run after logging the message
 */
const STATUS = (message: string, method?: boolean | void | (() => void)) => {
  if (typeof method === "function") method();
  console.log(`>>  ${message}`);
};

export { STATUS };
