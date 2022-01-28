import puppeteer from 'puppeteer';

export const fromCode = async (code: string) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(code);
    const pdf = await page.pdf({ format: 'a4' });
    await browser.close();
    return pdf;
};

export const fromUrl = async (url: string) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const pdf = await page.pdf({ format: 'a4' });
    await browser.close();
    return pdf;
};
