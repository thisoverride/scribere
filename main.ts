import puppeteer from "puppeteer";
import config from "./config.json";

const id: string = "";
const password = "";

const run = async () => {
  const browser: puppeteer.Browser = await puppeteer.launch({
    headless: config.browserInfo.hidden,
  });
  const page: puppeteer.Page = await browser.newPage();
  await page.goto(config.browserInfo.baseUrl);
  try {
    await page.type("#compte_id", id);
    await page.type("#compte_mdp", password);
    await page.type("#compte_mdp", String.fromCharCode(13));
    await page.click("#identification > div:nth-child(6) > button");
    await page.waitForSelector(
      "body > webae-root > main > div > div > webae-espace-personnel > ngb-tabset > ul > li:nth-child(1)"
    );
    await page.click(
      "#quotidien > nav > div:nth-child(1) > div.bloc_tableau_bord > ul > li:nth-child(1) > a"
    );
  } catch (e: any) {
    console.log(e.stack);
  }
};

run();
