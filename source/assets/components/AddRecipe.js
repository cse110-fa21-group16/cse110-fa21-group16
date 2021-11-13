import { addMy } from "../scripts/helpCrudFunc.js";
class AddRecipe extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  set data(data) {
    let styling = document.createElement("style");
    let styles =
      `/* Global styling */
       
      * {
        margin: 0;
        padding: 0;
        color: rgb(48, 90, 80);
      }

       /*****************************************
        *****************************************
        Style for article
        *****************************************
        *****************************************/

      article {
        width: 60vw;
        box-shadow: 0px 0px 15px #888888;
        margin: 10px 0px 90px 10px;
      }
       
       /*****************************************
        *****************************************
        Style for header section in article
        *****************************************
        *****************************************/
       header {
         display: flex;
         justify-content: center;
         /* border: 1px solid orange; */
       }
       
       .header-div {
         background-color: rgb(48, 90, 80);
         width: 100%;
         height: 12vh;
         padding: 0px;
         display: flex;
         justify-content: space-between;
         align-items: center;
         flex-flow: row nowrap;
       }
       
       .header-div h1 {
         color: white;
         font-size: 2vw;
       }
       
       .header-placeholder {
         visibility: hidden;
       }
       
       .home-link {
         text-decoration: none;
         color: white;
         font-size: 2vw;
         margin: 0px 0px 0px 20px;
       }
       
       /*****************************************
        *****************************************
        Style for main in article 
        *****************************************
        *****************************************/
       main {
         display: flex;
         width: 100%;
         flex-flow: column wrap;
         align-items: center;
         /* border: 1px solid red; */
       }
       
       /*  Style for the origin div 
           This div contains picture, instructions, and ingredients sections
       */
       .origin {
         width: 60%;
         display: grid;
         justify-content: center;
         grid-template-columns: 100%;
         /* border: 1px solid yellow; */
       }
       
       /*****************************************
        Style for picture section 
        *****************************************/
       .picture {
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin: 2em 0;
         /* border: 1px solid black; */
       }
       
       #recipe-name {
         border: none;
         font-size: 2vw;
         height: 50%;
         margin: 0 10px;
         outline: none;
         resize: none;
         text-align: center;
         width: 50%;
       }
       #recipe-name:hover{
         border: 1px solid #000000;
       }
       
       .recipe-image-div {
         width: 300px;
         height: 200px;
         border: 1px solid rgb(48, 90, 80);
         box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
         margin: 1em 0;
       }
       
       /*****************************************
        Style for instructions section 
        *****************************************/
       .instructions {
         /* border: 1px solid blue; */
       }
       
       /* Style for procedures div */
       .procedures {
         padding-left: 20px;
         margin-top: 20px;
         /* border: 1px solid greenyellow; */
       }
       
       /* Style for list items. Setting padding between each item */
       li {
         padding-top: 10px;
       }
       
       .step-item {
         width: 95%;
         height: 50px;
         border-radius: 10px;
         padding-top: 5px;
         padding-left: 5px;
         resize: none;
       }
       
       /* Style for add more button in instruction section */
       .add-instruction {
         width: calc(95% + 5px);
         height: 50px;
         background-color: rgb(48, 90, 80);
         color: white;
         border: none;
         font-size: 32px;
         margin-top: 10px;
         border-radius: 10px;
       }
       
       .add-instruction:hover {
         cursor: pointer;
       }
       
       /*****************************************
        Style for ingredients section 
        *****************************************/
       .ingredients {
         /* border: 1px solid green; */
       }
       
       .ingredients-general-div {
         padding-left: 20px;
         margin-top: 20px;
         /* border: 1px solid greenyellow; */
       }
       
       .ingredients-list-div {
         display: grid;
         grid-template-columns: 50% 20% 27.5%;
       }
       
       .placeholer-title {
         visibility: hidden;
       }
       
       .ingredients-item {
         width: 95%;
         height: 30px;
         border-radius: 10px;
         padding-top: 5px;
         padding-left: 5px;
         resize: none;
       }
       
       .amount-item {
         width: 80%;
         height: 30px;
         border-radius: 10px;
         padding-top: 5px;
         padding-left: 5px;
       }
       
       .unit-item {
         width: 95%;
         height: 40px;
         border-radius: 10px;
         padding-top: 5px;
         padding-left: 5px;
       }
       
       /* Style for cartegory section. Splitting it into 4 columns
          Each checkbox takes 1 column and their corresponding label take 1 column*/
       .diet-restrict {
         width: 100%;
         display: flex;
         padding-top: 10px;
         /* border: 1px solid black; */
       }
       
       .diet-restrict-div {
         width: 100%;
         padding-left: 20px;
         /* border: 1px solid black; */
       }
       
       .category {
         display: grid;
         grid-template-columns: 50% 50%;
         /* border: 1px solid black; */
       }
       
       /*****************************************
        *****************************************
        Style for footer section in article
        *****************************************
        *****************************************/
       footer {
         width: 100%;
         display: flex;
         justify-content: center;
       }
       
       /* Style for action-buttons div */
       .action-buttons {
         width: 55%;
         display: flex;
         flex-direction: row-reverse;
         padding: 5px 5px 5px 5px;
         margin-top: 10px;
         margin-bottom: 20px;
         /* border: 1px solid blue; */
       }
       
       /* Standard style for submit and delete buttons */
       #submit-edit,
       #delete-edit,
       #cancel-edit {
         margin-left: 5px;
         width: 30%;
         height: 30px;
         background-color: rgb(48, 90, 80);
         border: none;
         color: white;
         border-radius: 99px;
       }
       
       #delete-edit,
       #cancel-edit {
         background-color: red;
       }
       
       #submit-edit:hover,
       #delete-edit:hover,
       #cancel-edit:hover {
         cursor: pointer;
       }
       
       .title {
         font-size: 1vw;
       }
      `;

    styling.innerHTML = styles;

    // root element to attach everything to
    let page = document.createElement("article");

    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////// creating the header section /////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    let header = document.createElement("header");
    let headerDiv = document.createElement("div");
    let headerHomeLink = document.createElement("a");
    let headerTitle = document.createElement("h1");
    let headerPlaceholder = document.createElement("h1");

    headerDiv.setAttribute("class", "header-div");
    headerHomeLink.setAttribute("class", "home-link");
    headerHomeLink.setAttribute("href", "index.html");
    headerHomeLink.innerHTML = "LOGO";
    headerTitle.setAttribute("class", "header-title");
    headerTitle.innerHTML = "ADD RECIPE";
    headerPlaceholder.setAttribute("class", "header-placeholder");
    headerPlaceholder.innerHTML = "HOLDER";

    headerDiv.appendChild(headerHomeLink);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(headerPlaceholder);
    header.appendChild(headerDiv);

    /////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// creating the main > picture section ///////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////

    let main = document.createElement("main");

    let origin = document.createElement("div");
    origin.setAttribute("class", "origin");

    let picSection = document.createElement("section");
    let picTitle = document.createElement("textarea");
    picSection.setAttribute("class", "picture");
    picTitle.setAttribute("id", "recipe-name");
    picTitle.innerHTML = "Recipe Name";

    let picImgContainer = document.createElement("div");
    let picInput = document.createElement("input");
    picImgContainer.setAttribute("class", "recipe-image-container");
    picInput.setAttribute("type", "file");
    picInput.setAttribute("accept", "image/*");

    picImgContainer.appendChild(picInput);

    picSection.appendChild(picTitle);
    picSection.appendChild(picImgContainer);

    /////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// creating the main > diet section //////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    let dietSection = document.createElement("section");
    dietSection.setAttribute("class", "diet-restrict");

    let dietDiv = document.createElement("div");
    let dietTitle = document.createElement("h2");
    dietDiv.setAttribute("class", "diet-restrict-div");
    dietTitle.setAttribute("class", "title");
    dietTitle.innerHTML = "Diet Restriction";

    let dietCategory = document.createElement("div");
    dietCategory.setAttribute("class", "category");

    // option 1: vegan
    let dietOption1 = document.createElement("div");
    let optionVegan = document.createElement("input");
    let optionVeganLabel = document.createElement("label");
    optionVegan.setAttribute("type", "checkbox");
    optionVegan.setAttribute("id", "vegan");
    optionVegan.setAttribute("name", "vegan");
    optionVeganLabel.setAttribute("for", "vegan");
    optionVeganLabel.innerHTML = "Vegan";

    dietOption1.appendChild(optionVegan);
    dietOption1.appendChild(optionVeganLabel);

    // option 2: dairy
    let dietOption2 = document.createElement("div");
    let optionDairy = document.createElement("input");
    let optionDairyLabel = document.createElement("label");
    optionDairy.setAttribute("type", "checkbox");
    optionDairy.setAttribute("id", "dairy");
    optionDairy.setAttribute("name", "dairy");
    optionDairyLabel.setAttribute("for", "dairy");
    optionDairyLabel.innerHTML = "Dairy free";

    dietOption2.appendChild(optionDairy);
    dietOption2.appendChild(optionDairyLabel);

    // option 3: glutten
    let dietOption3 = document.createElement("div");
    let optionGlutten = document.createElement("input");
    let optionGluttenLabel = document.createElement("label");
    optionGlutten.setAttribute("type", "checkbox");
    optionGlutten.setAttribute("id", "glutten");
    optionGlutten.setAttribute("name", "glutten");
    optionGluttenLabel.setAttribute("for", "glutten");
    optionGluttenLabel.innerHTML = "Glutten free";

    dietOption3.appendChild(optionGlutten);
    dietOption3.appendChild(optionGluttenLabel);

    // option 4: vegetarian
    let dietOption4 = document.createElement("div");
    let optionVegetarian = document.createElement("input");
    let optionVegetarianLabel = document.createElement("label");
    optionVegetarian.setAttribute("type", "checkbox");
    optionVegetarian.setAttribute("id", "vegetarian");
    optionVegetarian.setAttribute("name", "vegetarian");
    optionVegetarianLabel.setAttribute("for", "vegetarian");
    optionVegetarianLabel.innerHTML = "Vegetarian";

    dietOption4.appendChild(optionVegetarian);
    dietOption4.appendChild(optionVegetarianLabel);

    dietCategory.appendChild(dietOption1);
    dietCategory.appendChild(dietOption2);
    dietCategory.appendChild(dietOption3);
    dietCategory.appendChild(dietOption4);

    dietDiv.appendChild(dietTitle);
    dietDiv.appendChild(dietCategory);

    dietSection.appendChild(dietDiv);

    ////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// creating the main > ingred. section //////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    let ingredientSection = document.createElement("section");
    ingredientSection.setAttribute("class", "ingredients");

    let ingredientGeneralDiv = document.createElement("div");
    ingredientGeneralDiv.setAttribute("class", "ingredients-general-div");

    let ingredientListDiv = document.createElement("div");
    ingredientListDiv.setAttribute("class", "ingredients-list-div");

    let ingredientColumn = document.createElement("div"); // ingredient column
    let ingredientColumnTitle = document.createElement("h2");
    let ingredientColumnInput = document.createElement("textarea");
    ingredientColumn.setAttribute("class", "ingredient-column");
    ingredientColumnTitle.setAttribute("class", "title");
    ingredientColumnTitle.innerHTML = "Ingredient:";
    ingredientColumnInput.setAttribute("class", "ingredients-item");
    ingredientColumnInput.innerHTML = "Populate data here";

    ingredientColumn.appendChild(ingredientColumnTitle);
    ingredientColumn.appendChild(ingredientColumnInput);

    let amountColumn = document.createElement("div"); // amount column
    let amountColumnTitle = document.createElement("h2");
    let amountColumnInput = document.createElement("input");

    amountColumn.setAttribute("class", "amount-column");
    amountColumnTitle.setAttribute("class", "title");
    amountColumnTitle.innerHTML = "Amount:";
    amountColumnInput.setAttribute("class", "amount-item");
    amountColumnInput.setAttribute("type", "number");
    amountColumnInput.setAttribute("value", "1");

    let addIngredient = document.createElement("button");
    addIngredient.setAttribute("class", "add-instruction");
    addIngredient.setAttribute("id", "add-ingredient");
    addIngredient.innerHTML = "+";


    amountColumn.appendChild(amountColumnTitle);
    amountColumn.appendChild(amountColumnInput);

    let unitColumn = document.createElement("div"); // unit column
    let unitColumnTitle = document.createElement("h2");
    unitColumn.setAttribute("class", "unit-column");
    unitColumnTitle.setAttribute("class", "title");
    unitColumnTitle.innerHTML = "Unit:";

    let unitColumnInput = document.createElement("select");
    let unitDefault = document.createElement("option");
    let unitGrams = document.createElement("option");
    let unitKilograms = document.createElement("option");
    let unitPounds = document.createElement("option");
    let unitTablespoons = document.createElement("option");
    let unitCups = document.createElement("option");
    unitDefault.setAttribute("value", "");
    unitGrams.setAttribute("value", "grams");
    unitKilograms.setAttribute("value", "kgs");
    unitPounds.setAttribute("value", "lbs");
    unitTablespoons.setAttribute("value", "tbps");
    unitCups.setAttribute("value", "cups");
    unitDefault.innerHTML = "Select unit";
    unitGrams.innerHTML = "grams";
    unitKilograms.innerHTML = "kgs";
    unitPounds.innerHTML = "lbs";
    unitTablespoons.innerHTML = "tbps";
    unitCups.innerHTML = "cups";
    unitColumnInput.setAttribute("class", "unit-item");
    unitColumnInput.appendChild(unitDefault);
    unitColumnInput.appendChild(unitGrams);
    unitColumnInput.appendChild(unitKilograms);
    unitColumnInput.appendChild(unitPounds);
    unitColumnInput.appendChild(unitTablespoons);
    unitColumnInput.appendChild(unitCups);

    unitColumn.appendChild(unitColumnTitle);
    unitColumn.appendChild(unitColumnInput);

    ingredientListDiv.appendChild(ingredientColumn);
    ingredientListDiv.appendChild(amountColumn);
    ingredientListDiv.appendChild(unitColumn);

    ingredientGeneralDiv.appendChild(ingredientListDiv);
    ingredientGeneralDiv.appendChild(addIngredient);
    ingredientSection.appendChild(ingredientGeneralDiv);

    addIngredient.addEventListener("click", function (event) {
      addIngreItems(addIngredient);
    });

    ////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// creating the main > instruction section //////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    let instructionSection = document.createElement("section");
    instructionSection.setAttribute("class", "instructions");

    // Procedures div 
    let procedures = document.createElement("div");
    procedures.setAttribute("class", "procedures");

    // Procedure Title 
    let procedureTitle = document.createElement("h2");
    procedureTitle.setAttribute("class", "title");
    procedureTitle.innerHTML = "Procedures: ";
    // Append title to procedures div 
    procedures.appendChild(procedureTitle);

    // Procedure List 
    let procedureDivList = document.createElement("div");
    procedureDivList.setAttribute("class", "steps-div");
    let procedureList = document.createElement("ol");
    procedureList.setAttribute("class", "step-list");

    // Initialize 3 steps 
    for (let i = 0; i < 3; i++) {

      let procedureListItem = document.createElement("li");
      let procedureListText = document.createElement("textarea");
      procedureListText.setAttribute("class", "step-item");
      procedureListText.innerHTML = "Populate data here";

      procedureListItem.appendChild(procedureListText);
      procedureList.appendChild(procedureListItem);
    }

    // Append Procedure List ol to steps div 
    procedureDivList.appendChild(procedureList);

    // Adding Instruction Button 
    let addInstruction = document.createElement("button");
    addInstruction.setAttribute("class", "add-instruction");
    addInstruction.setAttribute("id", "add-instruction");
    addInstruction.innerHTML = "+";
    // Append button to procedure div list 
    procedureDivList.appendChild(addInstruction);

    addInstruction.addEventListener("click", function (event) {
      addInstruItems(procedureList);
    });

    // Append Procedure Div List to procedures div 
    procedures.appendChild(procedureDivList);

    // Append procedures to instruction section 
    instructionSection.appendChild(procedures);


    ////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////// Append origin children //////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    origin.appendChild(picSection);
    origin.appendChild(dietSection);
    origin.appendChild(ingredientSection);
    origin.appendChild(instructionSection);

    ////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////// Append main children //////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    main.appendChild(origin);

    ////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////// Footer ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    let footer = document.createElement("footer");

    // Action Button Div
    let actionButtons = document.createElement("div");
    actionButtons.setAttribute("class", "action-buttons");

    // Action Buttons
    let submitButton = document.createElement("button");
    let cancelButton = document.createElement("button");

    submitButton.setAttribute("id", "submit-edit");
    cancelButton.setAttribute("id", "cancel-edit");
    submitButton.innerHTML = "Submit";
    cancelButton.innerHTML = "Cancel";

    // Append Buttons to Div
    actionButtons.appendChild(submitButton);
    actionButtons.appendChild(cancelButton);

    cancelButton.addEventListener("click", leaveAdd);

    submitButton.addEventListener("click", function (event) {
      let inputData = {};
      inputData["title"] = picTitle.value;
      inputData["vegetarian"] = optionVegetarian.checked;
      inputData["vegan"] = optionVegan.checked;
      inputData["glutenFree"] = optionGlutten.checked;
      inputData["dairyFree"] = optionDairy.checked;

      inputData["extendedIngredients"] = [];
      let ingreItemList = ingredientGeneralDiv.getElementsByClassName("ingredients-item");
      let amountList = ingredientGeneralDiv.getElementsByClassName("amount-item");
      let unitList = ingredientGeneralDiv.getElementsByClassName("unit-item");
      for (let i = 0; i < ingreItemList.length; i++) {
        let newIngreInfo = {}
        newIngreInfo["name"] = ingreItemList[i].value;
        newIngreInfo["amount"] = amountList[i].value;
        newIngreInfo["unit"] = unitList[i].value;
        inputData["extendedIngredients"].push(newIngreInfo);
      }

      let instruList = procedureList.getElementsByClassName("step-item");
      let listHtml = "<ol>";
      let instruArray = [];
      for (let i of instruList) {
        let newInstruList = `<li>${i.value}</li>`;
        listHtml += newInstruList;
        instruArray.push(i.value);
      }
      listHtml += "</ol>"
      inputData["instructions"] = listHtml;
      inputData["instructionsArray"] = instruArray;

      addMy(inputData);
      leaveAdd();
    });

    // Append Div to footer 
    footer.appendChild(actionButtons);


    ////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////// Append header, main, footer to article ////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    page.appendChild(header);
    page.appendChild(main);
    page.appendChild(footer);

    ////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////// Attach to shadow DOM //////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    this.shadow.appendChild(styling);
    this.shadow.appendChild(page);
  }
}

function addIngreItems(buttonItem) {
  let ingredientListDiv = document.createElement("div");
  ingredientListDiv.setAttribute("class", "ingredients-list-div");

  let ingredientColumn = document.createElement("div"); // ingredient column
  let ingredientColumnTitle = document.createElement("h2");
  let ingredientColumnInput = document.createElement("textarea");
  ingredientColumn.setAttribute("class", "ingredient-column");
  ingredientColumnTitle.setAttribute("class", "title");
  ingredientColumnTitle.innerHTML = "Ingredient:";
  ingredientColumnInput.setAttribute("class", "ingredients-item");
  ingredientColumnInput.innerHTML = "Populate data here";

  ingredientColumn.appendChild(ingredientColumnTitle);
  ingredientColumn.appendChild(ingredientColumnInput);

  let amountColumn = document.createElement("div"); // amount column
  let amountColumnTitle = document.createElement("h2");
  let amountColumnInput = document.createElement("input");

  amountColumn.setAttribute("class", "amount-column");
  amountColumnTitle.setAttribute("class", "title");
  amountColumnTitle.innerHTML = "Amount:";
  amountColumnInput.setAttribute("class", "amount-item");
  amountColumnInput.setAttribute("type", "number");
  amountColumnInput.setAttribute("value", "1");

  amountColumn.appendChild(amountColumnTitle);
  amountColumn.appendChild(amountColumnInput);

  let unitColumn = document.createElement("div"); // unit column
  let unitColumnTitle = document.createElement("h2");
  unitColumn.setAttribute("class", "unit-column");
  unitColumnTitle.setAttribute("class", "title");
  unitColumnTitle.innerHTML = "Unit:";

  let unitColumnInput = document.createElement("select");
  let unitDefault = document.createElement("option");
  let unitGrams = document.createElement("option");
  let unitKilograms = document.createElement("option");
  let unitPounds = document.createElement("option");
  let unitTablespoons = document.createElement("option");
  let unitCups = document.createElement("option");
  unitDefault.setAttribute("value", "");
  unitGrams.setAttribute("value", "grams");
  unitKilograms.setAttribute("value", "kgs");
  unitPounds.setAttribute("value", "lbs");
  unitTablespoons.setAttribute("value", "tbps");
  unitCups.setAttribute("value", "cups");
  unitDefault.innerHTML = "Select unit";
  unitGrams.innerHTML = "grams";
  unitKilograms.innerHTML = "kgs";
  unitPounds.innerHTML = "lbs";
  unitTablespoons.innerHTML = "tbps";
  unitCups.innerHTML = "cups";
  unitColumnInput.setAttribute("class", "unit-item");
  unitColumnInput.appendChild(unitDefault);
  unitColumnInput.appendChild(unitGrams);
  unitColumnInput.appendChild(unitKilograms);
  unitColumnInput.appendChild(unitPounds);
  unitColumnInput.appendChild(unitTablespoons);
  unitColumnInput.appendChild(unitCups);

  unitColumn.appendChild(unitColumnTitle);
  unitColumn.appendChild(unitColumnInput);

  ingredientListDiv.appendChild(ingredientColumn);
  ingredientListDiv.appendChild(amountColumn);
  ingredientListDiv.appendChild(unitColumn);
  buttonItem.parentNode.insertBefore(ingredientListDiv, buttonItem);
}


function addInstruItems(olItem) {
  let procedureListItem = document.createElement("li");
  let procedureListText = document.createElement("textarea");
  procedureListText.setAttribute("class", "step-item");
  procedureListText.innerHTML = "Populate data here";

  procedureListItem.appendChild(procedureListText);
  olItem.appendChild(procedureListItem);
}

function leaveAdd() {
  $("#add-recipe-page").classList.remove("main-shown");
  $("#add-recipe-page").innerHTML = "";
  loadMain();
  if ($("#my-page").classList.contains("shown")) {
    loadMyRecipe();
  }
  else {
    loadLanding();
  }
}

// define the "edit-recipe" element using this class
customElements.define("add-recipe", AddRecipe);