import puppeteer from 'puppeteer';
import logger from '@config/Logger';

export const fromCode = async (code: string) => {
    return { message: 'parsed from code', code };
};

export const fromUrl = async (url: string) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const pdf = await page.pdf({ format: 'a4', path: './file.pdf' });
    await browser.close();
    return pdf;
};
