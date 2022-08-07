/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  chromeWebSecurity: true,
  e2e: {
    //@ts-ignore
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
