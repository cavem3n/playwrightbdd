import { Page, expect } from '@playwright/test';
import { HomeElements } from './home_elements';

export class HomeMethods {
  private readonly homeElements: HomeElements;

  constructor(private readonly page: Page) {
    this.homeElements = new HomeElements(page);
  }

  async openHomePage(): Promise<void> {
    await this.page.goto('https://playwright.dev');
  }

  async clickLink(linkName: string): Promise<void> {
    await this.homeElements.link(linkName).click();
  }

  async verifyTitle(keyword: string): Promise<void> {
    await expect(this.page).toHaveTitle(
      new RegExp(keyword)
    );
  }
}