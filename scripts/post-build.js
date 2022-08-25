const puppeteer = require('puppeteer')

const screenshotURLS = [
  {
    name: 'home',
    url: 'http://localhost:3000/',
  },
  {
    name: 'about',
    url: 'http://localhost:3000/',
  },
  {
    name: 'projects',
    url: 'http://localhost:3000/',
  }
]

const generateScreenshot = async (link, name) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link, {
      waitUntil: 'networkidle0',
    });
    await page.screenshot({path: `./public/images/${name}.png`});
    console.log('Screenshot generated for:', link)
  } catch (e) {
    console.error(e)
  }
  
}

const build = async () => {
  for (const link of screenshotURLS) {
    await generateScreenshot(link.url, link.name)
  }
}

build().then(() => {
  console.log('Done')
  process.exit(0)
})
