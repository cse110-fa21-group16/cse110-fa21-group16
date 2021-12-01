//import { ExecutionContext } from "puppeteer";

describe("Test for add recipe", () => {
  jest.setTimeout(30000);
  beforeAll(async () => {
    await page.goto("https://unruffled-lichterman-185ae7.netlify.app",{"waitUntil" : "networkidle0"});

    // clicks bring the page to my page
    let myPageButton = await page.$("#to-my-page");
    await myPageButton.click();
  });

  // adding card and check for add/delete ingredient and produce
  it("check and add recipe in my page", async () => {
    // await page.screenshot({
    //   path: "./3rightafterclickadd.png",
    //   fullPage: true
    // });
    // if anything is wrong, change testResult to false;
    let testResult = true;
    let myPageList = await page.$("#my-page-list");
    // record how many card in the list
    let cards = await myPageList.$$("new-card-my-page, recipe-card-my-my-page");
    // console.log("before add card num:" + cards.length);

    for(let cardNum = 0; cardNum<10; cardNum++){
      let myCard = await myPageList.$("new-card-my-page");
      let myCardRoot = await myCard.getProperty("shadowRoot");
      let plus = await myCardRoot.$("img");
      await plus.click();

      // wait for page load
      await page.waitForTimeout(100);
      
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
      if(ingredientList.length !== 5){
        console.log("!!add ingredient button fail!!");
        testResult = false;
      }
      await delIngredient.click();
      await delIngredient.click();
      await delIngredient.click();
      ingredientList = await newingredientSec.$$(".ingredients-list-div");
      if(ingredientList.length !== 2){
        console.log("!!delete ingredient button fail!!");
        testResult = false;
      }
      // final testing to make sure there are 3 ingredient block
      await addIngredient.click();
      ingredientList = await newingredientSec.$$(".ingredients-list-div");
      if(ingredientList.length !== 3){
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
      if(stepList.length !== 6){
        console.log("!!add step button fail!!");
        testResult = false;
      }
      await delStep.click();
      await delStep.click();
      await delStep.click();
      stepList = await stepSec.$$(".step-item");
      if(stepList.length !== 3){
        console.log("!!delete step button fail!!");
        testResult = false;
      }
      // continue add steps
      for(let i=0; i<stepList.length; i++){
        await stepList[i].type(((i+1)*10101).toString());
      }

      // await page.screenshot({
      //   path: "./screenshot/4beforesubmit.png",
      //   fullPage: true
      // });
      // submit the recipe
      let submit = await addPageRoot.$("#submit-edit");
      await submit.click();
    }

    cards = await myPageList.$$("new-card-my-page, recipe-card-my-my-page");
    console.log("after add card num:" + cards.length);

    // await page.screenshot({
    //   path: "./screenshot.png",
    //   fullPage: true
    // });



    expect(testResult).toBe(true);
  });

  // checking added recipe correctness
  it("check recipes just added", async () => {
    // if anything is wrong, change testResult to false;
    let testResult = true;

    // await page.screenshot({
    //   path: "./screenshot/5checkingbeforeclick.png",
    //   fullPage: true
    // });

    let myPageList = await page.$("#my-page-list");
    let cards = await myPageList.$$("recipe-card-my-my-page");
    // check ard title
    for(let i=0; i<cards.length; i++){
      myPageList = await page.$("#my-page-list");
      cards = await myPageList.$$("recipe-card-my-my-page");
      let cardRoot = await cards[i].getProperty("shadowRoot");
      let title = await cardRoot.$(".title");
      title = await title.getProperty("innerText");
      title = title['_remoteObject'].value;
      // check title in my recipe
      if(title != "random recipe"){
        console.log("card title mismatch");
        console.log(title);
        testResult = false;
      }
      await page.screenshot({
        path: "./screenshot/" + (6+i).toString() +"checkingbeforeclick.png",
        fullPage: true
      });

      // click on check button
      let button = await cardRoot.$("button");
      await button.click();
      // check title
      let viewCard = await page.$("view-my-recipe");
      let viewCardRoot = await viewCard.getProperty("shadowRoot");
      title = await viewCardRoot.$("#main-header");
      title = await title.$("h1");
      title = await title.getProperty("innerText");
      title = title['_remoteObject'].value;
      if(title != "random recipe"){
        console.log("view card title mismatch");
        testResult = false;
      }
      // check steps
      let stepList = await viewCardRoot.$("#steps-list");
      stepList = await stepList.$$("li");
      for(let k=0; k<stepList.length; k++){
        let step = await stepList[k].getProperty("innerText");
        step = step['_remoteObject'].value;
        if(step != ((k+1)*10101).toString()){
          console.log("steps mismatch");
          testResult = false;
        }
      }

      // check ingredients
      let ingredientList = await viewCardRoot.$("#ingre-list");
      ingredientList = await ingredientList.$$("li");
      for(let k=0; k<ingredientList.length; k++){
        let ingredient = await ingredientList[k].getProperty("innerText");
        ingredient = ingredient['_remoteObject'].value;
        let rightIngre = (k*100).toString()+"\n\n- ";
        rightIngre += k.toFixed(2).toString()+" kgs";
        if(ingredient != rightIngre){
          console.log("ingredient mismatch");
          testResult = false;
        }
      }

      // check diet
      let dietList = await viewCardRoot.$$(".diet-check");
      for(let k=0; k<dietList.length; k++){
        let dietPic = await dietList[k].$eval("img", (img) => {
          return img.getAttribute("src");
        });
        if(dietPic != "assets/images/icons/fillCheck.svg"){
          console.log("diet selection mismatch");
          testResult = false;
        }
      }
      let back = await viewCardRoot.$("#main-footer");
      back = await back.$("button");
      await back.click();

    }
    expect(testResult).toBe(true);
  });

  it("check delete recipe in my page", async () => {
    let testResult = true;
    let myPageList = await page.$("#my-page-list");
    let cards = await myPageList.$$("recipe-card-my-my-page");
    // record number of cards
    let cardNum = cards.length;
    //deleting recipe one by one
    while(cards.length != 0){
      // click into the recipe
      let cardRoot = await cards[0].getProperty("shadowRoot");
      let button = await cardRoot.$("button");
      await button.click();

      // click into edit recipe
      let viewCard = await page.$("view-my-recipe");
      let viewCardRoot = await viewCard.getProperty("shadowRoot");
      let edit = await viewCardRoot.$("#main-footer");
      edit = await edit.$$("button");
      await edit[1].click();

      // click delete button
      let editRecipe = await page.$("edit-recipe");
      let editRecipeRoot = await editRecipe.getProperty("shadowRoot");
      let deleteBtn = await editRecipeRoot.$("#delete-edit");
      await deleteBtn.click();

      // click yes for confirmation
      let deleteConf = await page.$("delete-confirmation");
      let deleteConfRoot = await deleteConf.getProperty("shadowRoot");
      let yes = await deleteConfRoot.$("#delete-yes");
      await yes.click();

      // update variables
      myPageList = await page.$("#my-page-list");
      cards = await myPageList.$$("recipe-card-my-my-page");
      // check for card number
      if(cardNum-1 != cards.length){
        testResult = false;
      }
    }
    if(!testResult){
      console.log("delete card failed")
    }

    expect(testResult).toBe(true);
  });
  
      
  // await page.screenshot({
  //   path: "./screenshot/1.png",
  //   fullPage: true
  // });

});



