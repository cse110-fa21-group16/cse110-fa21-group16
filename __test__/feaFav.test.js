describe("Test for add recipe", () => {
  jest.setTimeout(100000);
  beforeAll(async () => {
    await page.goto("https://unruffled-lichterman-185ae7.netlify.app",{"waitUntil" : "networkidle0"});
  });

  it("check feature page", async () => {
    // click into feature page
    let feaPageButton = await page.$("#to-feature-page");
    await feaPageButton.click();
    // check card number
    let feaCards = await page.$$("recipe-card-featured-pg");
    expect(feaCards.length).toBe(10);
  });

  it("click favorite and check for favorite", async () => {
    // clicking heart in each card
    let feaCards = await page.$$("recipe-card-featured-pg");
    for(let i=0; i<feaCards.length; i++){
      let cardRoot = await feaCards[i].getProperty("shadowRoot");
      let heart = cardRoot.$(".favorite");
      await heart.click();
    }

    // move to favorite page
    let feaToLand = await page.$("#feature-page-to-landing");
    await feaToLand.click();
    let favoriteBtn = await page.$("#to-favorite-page");
    await favoriteBtn.click();

    expect(testResult).toBe(true);
  });

  // await page.screenshot({
  //   path: "./screenshot.png",
  //   fullPage: true
  // });
});