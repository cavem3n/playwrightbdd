import { createBdd } from 'playwright-bdd';

const { AfterStep } = createBdd();

AfterStep(async ({ page, $testInfo, $step }) => {
  const screenshot = await page.screenshot();

  const stepTitle = $step.title;
  const keyword = stepTitle.match(/^(Given|When|Then|And|But)\b/i)?.[0]
    ?? 'Step';

  await $testInfo.attach(`${keyword} - ${stepTitle}`, {
    body: screenshot,
    contentType: 'image/png',
  });
});