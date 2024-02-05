import { test, expect } from "@playwright/test"
import playwrightConfig from "../playwright.config"

test("first test",
    async ({ page }) => {
        await page.goto("https://playwright.dev/docs/writing-tests")
        await expect(page.url()).toContain("writing")
    })

    // test("sample", async ({ page }) => {  });

    test("", async ({ page }) => {
    

      });
    