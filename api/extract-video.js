import { chromium } from '@playwright/test';

export default async function handler(req, res) {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://ghbrisk.com/e/39dwsmx1x2m9', {
        headers: { 'Referer': 'https://anime-world.co' }
    });

    // Extract the video URL using JavaScript execution
    const videoUrl = await page.evaluate(() => jwplayer().getConfig().sources[0].file);

    await browser.close();
    res.json({ videoUrl });
}
