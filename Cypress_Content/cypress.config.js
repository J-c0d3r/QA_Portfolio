import { defineConfig } from "cypress";
import cypressSplit from "cypress-split";
import mochawesome from "cypress-mochawesome-reporter/plugin.js";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on);

      cypressSplit(on, config);

      return config;
    },

    chromeWebSecurity: false,
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: true,
  },
});