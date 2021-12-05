describe("Test for featured recipe", () => {
  jest.setTimeout(100000);
  beforeAll(async () => {
    await page.goto("https://zeste.netlify.app");
    
    // wait for fetch local storage
    let data = await page.evaluate(() => {
      storage = window.localStorage;
      let storedData = JSON.parse(storage.getItem("feaRecipeArray"));
      return storedData;
    });

    while (data === null) {
      data = await page.evaluate(() => {
        storage = window.localStorage;
        let storedData = JSON.parse(storage.getItem("feaRecipeArray"));
        return storedData;
      });
    }

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
    let testResult = true;
    // wait for picture to load
    await page.waitForTimeout(100);
    await page.screenshot({
      path: "./screenshot3.png",
      fullPage: true
    });
    // clicking heart in each card
    let feaCards = await page.$$("recipe-card-featured-pg");
    for(let i=0; i<feaCards.length; i++){
      let cardRoot = await feaCards[i].getProperty("shadowRoot");
      let heart = await cardRoot.$(".favorite");
      await heart.click();
    }

    // move to favorite page
    let feaToLand = await page.$("#feature-page-to-landing");
    await feaToLand.click();
    let favoriteBtn = await page.$("#to-favorite-page");
    await favoriteBtn.click();
    // check favorite card number
    let favCards = await page.$$("recipe-card-featured-pg");
    if(favCards.length !== 10){
      console.log("before remove, favorite card number mismatch");
      testResult = false;
    }

    // remove favorite
    for(let i=1; i<favCards.length; i++){
      let cardRoot = await favCards[i].getProperty("shadowRoot");
      let heart = await cardRoot.$(".favorite");
      await heart.click();
    }

    // one card left, click into and click heart (remove from favorite)
    // click into the card
    feaCards = await page.$("recipe-card-featured-pg");
    let cardRoot = await feaCards.getProperty("shadowRoot");
    let cook = await cardRoot.$(".cook");
    await cook.click();

    // click the heart
    let view = await page.$("view-fea-recipe");
    let viewRoot = await view.getProperty("shadowRoot");
    let header = await viewRoot.$("#main-header");
    let heart = await header.$("img");
    await heart.click();

    // click back
    let footer = await viewRoot.$("#main-footer");
    let back = await footer.$("button");
    await back.click();

    // checking for card number again
    favCards = await page.$$("recipe-card-featured-pg");
    if(favCards.length !== 0){
      console.log("after remove, favorite card number mismatch");
      testResult = false;
    }

    expect(testResult).toBe(true);
  });

  // await page.screenshot({
  //   path: "./screenshot.png",
  //   fullPage: true
  // });
});