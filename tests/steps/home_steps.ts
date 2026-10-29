import { createBdd } from 'playwright-bdd';
import { HomeMethods } from '../pages/home/home_methods';

const { Given, When, Then } = createBdd();

Given('I am on home page', async ({ page }) => {
  const homePage = new HomeMethods(page);
  await homePage.openHomePage();
});

When('I click link {string}', async ({ page }, linkName: string) => {
  const homePage = new HomeMethods(page);
  await homePage.clickLink(linkName);
});

Then('I see in title {string}', async ({ page }, keyword: string) => {
  const homePage = new HomeMethods(page);
  await homePage.verifyTitle(keyword);
});