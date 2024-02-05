import { test, expect } from "@playwright/test"

test("first test",
    async ({ page }) => {
        await page.goto("https://playwright.dev/docs/writing-tests")
        await expect(page.url()).toContain("writing")
    })