describe("Test for add recipe", () => {
  beforeAll(async () => {
    await page.goto("https://unruffled-lichterman-185ae7.netlify.app/index.html");
    await page.waitForTimeout(1500);
  });

  it("check add recipe in my page", async () => {
    // if anything is wrong, change testResult to false;
    let testResult = true;

    // clicks bring the page to my page
    let myPageButton = await page.$("#to-my-page");
    await myPageButton.click();
    let myPageList = await page.$("#my-page-list");

    // record how many card in the list
    let cards = await myPageList.$$("new-card-my-page, recipe-card-my-my-page");
    console.log("before add card num:" + cards.length);

    let myCard = await myPageList.$("new-card-my-page");
    let myCardRoot = await myCard.getProperty("shadowRoot");
    let plus = await myCardRoot.$("img");
    await plus.click();

    // adding
    let addPage = await page.$("add-recipe");
    let addPageRoot = await addPage.getProperty("shadowRoot");
    let textarea = await addPageRoot.$("#recipe-name");
    // enter recipe name
    await textarea.type("random recipe");

    // click all diet selections
    let dietSelection = await addPageRoot.$$("input[type=checkbox]");
    for(let i=0; i<Object.keys(dietSelection).length; i++){
      await dietSelection[Object.keys(dietSelection)[i]].click();
    }

    // add ingredients
    let ingredientSec = await addPageRoot.$(".ingredients");
    let addIngredient = await ingredientSec.$(".add-instruction");
    let delIngredient = await ingredientSec.$(".delete-instruction");
    await addIngredient.click();
    await addIngredient.click();
    await addIngredient.click();
    await addIngredient.click();
    let newingredientSec = await addPageRoot.$(".ingredients");
    let ingredientList = await newingredientSec.$$(".ingredients-list-div");
    
    // testing add and delete ingredient button
    if(ingredientList.length != 5){
      console.log("!!add ingredient button fail!!");
      testResult = false;
    }
    await delIngredient.click();
    await delIngredient.click();
    await delIngredient.click();
    ingredientList = await newingredientSec.$$(".ingredients-list-div");
    if(ingredientList.length != 2){
      console.log("!!delete ingredient button fail!!");
      testResult = false;
    }
    // final testing to make sure there are 3 ingredient block
    await addIngredient.click();
    ingredientList = await newingredientSec.$$(".ingredients-list-div");
    if(ingredientList.length != 3){
      console.log("!!add or delete ingredient button fail!!");
      testResult = false;
    }
    // continue add ingredients
    for(let i=0; i<ingredientList.length; i++){
      let item = await ingredientList[i].$(".ingredients-item");
      await item.type((i*100).toString());
      let amount = await ingredientList[i].$(".amount-item");
      // clear textbox
      await amount.click({clickCount: 3});
      await amount.press('Backspace'); 
      await amount.type(i.toString());
      let unit = await ingredientList[i].$(".unit-item");
      await unit.select("kgs");
    }


    // add procedures
    let stepSec = await addPageRoot.$(".steps-div");
    let addStep = await stepSec.$(".add-instruction");
    let delStep = await stepSec.$(".delete-instruction");
    await addStep.click();
    await addStep.click();
    await addStep.click();
    let stepList = await stepSec.$$(".step-item");
    
    // testing add and delete procedures button
    if(stepList.length != 6){
      console.log("!!add step button fail!!");
      testResult = false;
    }
    await delStep.click();
    await delStep.click();
    await delStep.click();
    stepList = await stepSec.$$(".step-item");
    if(stepList.length != 3){
      console.log("!!delete step button fail!!");
      testResult = false;
    }
    // continue add ingredients
    for(let i=0; i<stepList.length; i++){
      await stepList[i].type(((i+1)*10101).toString());
    }
    // submit the recipe
    let submit = await addPageRoot.$("#submit-edit");
    await submit.click();

    // cards = await myPageList.$$("new-card-my-page, recipe-card-my-my-page");
    // console.log("after add card num:" + cards.length);

    // checking added recipe correctness
    cards = await myPageList.$$("recipe-card-my-my-page");
    for(let i=0; i<cards.length; i++){
      let cardRoot = await cards[i].getProperty("shadowRoot");
      let button = await cardRoot.$("button");
      await button.click;
      let viewCard = await page.$("view-my-recipe");
      let viewCardRoot = await viewCard.getProperty("shadowRoot");
      let title = await viewCardRoot.$("#main-header");
      title = await title.$("h1");
      title = await title.getProperty("innerText");
      if(title != "random recipe"){
        console.log("title mismatch");
        testResult = false;
      }
    }






    expect(testResult).toBe(true);
  });

  // it("Check for add recipe in main page", async () => {
  //   let newCard = await page.$("new-card");
  //   let emptyCard = await page.$$("empty-card");
  //   let myCard = await page.$$("recipe-card-my");
    

  //   if(Object.keys(myCard).length == 0){
  //     console.log("no own recipe");
  //     await newCard.click();
  //     let submit = 
  //   }
  //   else if(Object.keys(emptyCard).length == 0){
  //     console.log("no empty card");
  //   }
  //   else{
  //     console.log("one my recipe card, one empty card");
  //   }
    

    // let test1 = await newCard.jsonValue();
    // console.log("newcard:"+test1);
    // console.log(typeof(emptyCard));
    // let test2 = await emptyCard.jsonValue();
    // console.log("emptyCard:"+test2);
    // let sr = await newCard.getProperty("shadowRoot");
    // let addButton = await sr.$("article");
    // console.log(addButton);

  // });
});



