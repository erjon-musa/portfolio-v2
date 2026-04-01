import { test, expect } from '@playwright/test'

const MOBILE_VIEWPORT = { width: 390, height: 844 } // iPhone 14
const DESKTOP_VIEWPORT = { width: 1280, height: 800 }

test.describe('Contact form expand/collapse', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500) // let scroll settle
  })

  test('mobile: email form scrolls into view when opened', async ({ page }) => {
    await page.setViewportSize(MOBILE_VIEWPORT)
    await page.locator('#contact').scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)

    const emailBtn = page.getByLabel('Send me an email')
    await emailBtn.click()

    // Wait for animation + scroll (300ms animation + 150ms delay + scroll time)
    await page.waitForTimeout(800)

    // The form should be visible in the viewport
    const form = page.locator('#contact form')
    await expect(form).toBeVisible()
    const formBox = await form.boundingBox()
    expect(formBox).not.toBeNull()
    // Form top should be within viewport (not below the fold)
    expect(formBox!.y).toBeLessThan(MOBILE_VIEWPORT.height)
  })

  test('mobile: form expands within 500ms (no excessive lag)', async ({ page }) => {
    await page.setViewportSize(MOBILE_VIEWPORT)
    await page.locator('#contact').scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)

    const emailBtn = page.getByLabel('Send me an email')
    const start = Date.now()
    await emailBtn.click()

    // Form should be visible within 500ms
    const form = page.locator('#contact form')
    await expect(form).toBeVisible({ timeout: 500 })
    const elapsed = Date.now() - start
    expect(elapsed).toBeLessThan(500)
  })

  test('desktop: no unnecessary scroll when form opens', async ({ page }) => {
    await page.setViewportSize(DESKTOP_VIEWPORT)
    await page.locator('#contact').scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)

    const scrollBefore = await page.evaluate(() => window.scrollY)

    const emailBtn = page.getByLabel('Send me an email')
    await emailBtn.click()
    await page.waitForTimeout(600)

    const scrollAfter = await page.evaluate(() => window.scrollY)
    // On desktop the scroll should be modest — just enough to reveal the form
    expect(Math.abs(scrollAfter - scrollBefore)).toBeLessThan(400)
  })

  test('form collapse does not trigger scroll', async ({ page }) => {
    await page.setViewportSize(MOBILE_VIEWPORT)
    await page.locator('#contact').scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)

    const emailBtn = page.getByLabel('Send me an email')
    // Open
    await emailBtn.click()
    await page.waitForTimeout(600)

    const scrollBefore = await page.evaluate(() => window.scrollY)
    // Close
    await emailBtn.click()
    await page.waitForTimeout(600)

    const scrollAfter = await page.evaluate(() => window.scrollY)
    // Closing should not scroll down further
    expect(scrollAfter).toBeLessThanOrEqual(scrollBefore + 50)
  })

  test('rapid open/close does not break layout', async ({ page }) => {
    await page.setViewportSize(MOBILE_VIEWPORT)
    await page.locator('#contact').scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)

    const emailBtn = page.getByLabel('Send me an email')

    // Rapidly toggle 3 times
    await emailBtn.click()
    await page.waitForTimeout(100)
    await emailBtn.click()
    await page.waitForTimeout(100)
    await emailBtn.click()
    await page.waitForTimeout(800)

    // Should end in open state (odd number of clicks)
    const form = page.locator('#contact form')
    await expect(form).toBeVisible()

    // Section should still be intact
    const section = page.locator('#contact')
    await expect(section).toBeVisible()
  })
})
