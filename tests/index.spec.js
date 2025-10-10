const { test, expect } = require('@playwright/test');

test.describe('index.html smoke test', () => {
  test('loads without console warnings or errors', async ({ page }) => {
    const consoleIssues = [];
    const pageErrors = [];
    const allowedWarningPatterns = [
      /cdn\.tailwindcss\.com should not be used in production/i,
    ];

    page.on('console', (message) => {
      const type = message.type();
      if (type === 'warning') {
        const text = message.text();
        const isAllowed = allowedWarningPatterns.some((pattern) =>
          pattern.test(text)
        );

        if (isAllowed) {
          return;
        }

        consoleIssues.push({
          type,
          text,
        });
        return;
      }

      if (type === 'error') {
        consoleIssues.push({
          type,
          text: message.text(),
        });
      }
    });

    page.on('pageerror', (error) => {
      pageErrors.push(error.message);
    });

    const response = await page.goto('/');

    await expect(response, 'Expected to receive a valid response when loading /').not.toBeNull();

    if (response) {
      expect.soft(
        response.status(),
        `Expected a successful status code for index.html but received ${response.status()} ${response.statusText()}`
      ).toBeLessThan(400);
    }

    await page.waitForLoadState('networkidle');

    const heroHeading = page.getByRole('heading', {
      level: 1,
      name: /template web app/i,
    });
    await expect(heroHeading).toBeVisible();

    expect(consoleIssues, 'Console warning/error detected while loading index.html').toEqual([]);
    expect(pageErrors, 'Unhandled page errors detected while loading index.html').toEqual([]);
  });
});
