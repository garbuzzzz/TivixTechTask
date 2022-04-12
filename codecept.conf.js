const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "http://qalab.pl.tivixlabs.com/",
      show: true,
      windowSize: "1920x850",
      restart: true,
      chrome: {
        args: [
          '--user-agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36"',
          "--start-maximized",
        ],
        ignoreHTTPSErrors: true,
      },
    },
  },
  include: {
    I: "./steps_file.js",
    searchPage: "./pages/search.js",
    rentPage: "./pages/rent.js",
    selectors: "./pages/selectors.js",
  },
  bootstrap: null,
  mocha: {},
  name: "Tivix Tech Task",
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};