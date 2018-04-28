const setup = require('./starter-kit/setup');
const request = require('request');
const fs = require('fs');
const dotenv = require('dotenv');
const url = process.env.url;

const ssbot = ( url ) => {
  // For keeping the browser launch
  const browser = await setup.getBrowser();

  const channel = body.event.channel;

  const page = await browser.newPage();

  await page.goto(url);

  console.log('********Redirected to login********');
  await page.evaluate( (username, password) => {
          const inputs = document.querySelectorAll('input');
          inputs[0].value = username;
          inputs[1].value = password;
          document.querySelector('form').submit();
   }, process.env.USERNAME, process.env.PASSWORD);

  console.log('********Creds Inserted and Accepted********');
  
  await page.waitForNavigation({
    waitUntil: 'networkidle',
    networkIdleTimeout: 500
  });

  console.log('********Preparing to Take Screenshot********');
  
  await page.screenshot(
    {
      path: './temp.jpeg',
      type: 'jpeg',
      quality: 50
    }
  );

  await browser.close();

  console.log('********Preparing to Upload Screenshot********');
    
};

ssBot