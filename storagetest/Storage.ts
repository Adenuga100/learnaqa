// global-setup.ts
import { chromium } from '@playwright/test';
import { signInPage } from '../pages/Signin.po';
import { HomePage } from '../pages/Home.po';

async function globalSetup() {
  let browser = await chromium.launch();
  let page = await browser.newPage();

  await page.goto('https://www.learnaqa.info/login/');
  await HomePage.clickAcceptAllCookies(page);
  await signInPage.fillEmailAs(page, 'adenugaadeyemiisaac@gmail.com');
  await signInPage.fillPasswordAs(page, 'Hardayemmh4$');
  await signInPage.clickSignInButton(page);

  await page.waitForURL('**/dashboard');

  await page.context().storageState({ path: 'auth.json' });
  await browser.close();
}

export default globalSetup;
// global-teardown.ts