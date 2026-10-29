import { Page, Locator } from '@playwright/test';

export class HomeElements {
  constructor(private readonly page: Page) {}

  link(linkName: string): Locator {
    return this.page.getByRole('link', {
      name: linkName,
      exact: true,
    });
  }
}