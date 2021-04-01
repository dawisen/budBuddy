const puppeteer = require('puppeteer');

async function startBrowser() {
  let browser;
  try {
    console.log('opening the browser....');
    //.launch() method starts the browser instance and returns a Promise
    // the Promise must be resolved in order to launch properly
    browser = await puppeteer.launch({
      // .launch() takes json parameters
      headless: false,
      // false means the browser will run with an Interface so you can watch your script execute.
      // if deploying to the cloud set it back to true
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
      // setting this to true allows you to visit websites that aren’t hosted
      // over a secure HTTPS protocol and ignore any HTTPS-related errors.
    });
  } catch (err) {
    console.log('could not create browser instance --> : ', err);
  }
  return browser;
}

module.exports = {
  startBrowser
};