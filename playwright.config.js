// // @ts-check
const { defineConfig, devices } = require('@playwright/test');

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// /**
//  * @see https://playwright.dev/docs/test-configuration
//  */
// module.exports = defineConfig({
//   testDir: './tests/Easycollab-TestCaes',
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('/')`. */
//     // baseURL: 'http://127.0.0.1:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },

//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://127.0.0.1:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });

const config = {
  workers: 1,
  // fullyParallel: true,
  // projects: [
  //     {
  //         name: 'chromium',
  //         use: { ...devices['Desktop Chrome'] },
  //     },
  //     {
  //         name: 'Pixel',
  //         use: { ...devices['Pixel 5'] },
  //     },
  //     // {
  //     //     name: 'firefox',
  //     //     use: { ...devices['Desktop Firefox'] },
  //     // },
  //     // {
  //     //     name: 'webkit',
  //     //     use: { ...devices['Desktop Safari'] },
  //     // },
  // ],

  use: {
    viewport: null,
    headless: true,
    browserName: "chromium",
    screenshot: "on",
    video: "on",
    // trace: "on",
    baseURL: "https://www.letcode.in",
    // baseURL: "https://dev107189.service-now.com/api/now/table/incident",
    extraHTTPHeaders: {
      Authorization: "Basic YWRtaW46U0NxN2pDb2tDbFI4"
    },
    // baseURL: "https://letcode.in",
    // contextOptions: {
    //     permissions: ["clipboard-read"]
    // }
    launchOptions: {
      args: ["--start-maximized"]

      // logger: {
      //     // isEnabled: (name, severity) => true,
      //     // log: (name, severity, message, args) => console.log(name, severity)
      // }
    }
  },
  // timeout: 60000,
  // grep: [new RegExp("@smoke"), new RegExp("@reg")],
  // testMatch: ["harDemo/trackRequest.test.ts"],
  retries: 2,
  // reporter: "./customReport/myReporter.ts"
  reporter: [
    ["dot"], // -> console
    ["json", { outputFile: "./TestResults/test-result.json" }], //  -> JSON
    [
      "html",
      {
        open: "always"
      }
    ] // -> HTML
  ]
  // globalTeardown: './helper/globalsetup.ts'
}
export default config
