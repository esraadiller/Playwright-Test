import { test, expect } from "@playwright/test";
import Form from "../pages/formPages";
// import { url } from "inspector";

test("Form Test", async ({ page }) => {
  const form = new Form(page);

  const appUrl = "https://demoqa.com/automation-practice-form";
  await form.navigate(appUrl);

  await form.enterFirstName("Esra");
  await form.enterLastName("adiller");  
  
  expect(page.url()).toBe(appUrl);
});
