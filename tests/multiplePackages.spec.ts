import endpoint from "./configTypes"
import { test, expect } from '@playwright/test'

test("Test 1", async ({ page }) => {

  await page.goto('https://www.google.com')
});