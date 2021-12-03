import { $, router } from "../scripts/main.js";
import { updateMy } from "../scripts/helpCrudFunc.js";
import { getTitle, getStepsArray, getIngreArray, getImgUrl } from "../scripts/helpGetDataFunc.js";
import { getDairy, getGluten, getVegan, getVegeta } from "../scripts/helpGetDataFunc.js";

/**
 * This is the component for the Edit Recipe Page.
 * @class
 */
class EditRecipe extends HTMLElement {
  /**
   * Attach shadowroot which contains the edit page materials.
   * @constructor
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  /**
   * The data needed to populate the materials are passed in as "data".
   * @param {Object} data a JSON data object contains information to populate this component.
   */
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
          width: 70vw;
          box-shadow: 0px 0px 15px #888888;
          margin: 10px 0px 90px 0px;
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

         #logo-sec {
          width: 33%;
          height: 90px;
          display: flex;
          }
  
         #logo-sec > a > img {
            height: 100%;
            width: 125px;
            object-fit: cover;
          }
  
          #title-sec {
            display: flex;
          }
  
          #holder-sec {
            width: 33%;
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
           width: 70%;
           display: grid;
           justify-content: center;
           grid-template-columns: 100%;
           /* border: 1px solid yellow; */
         }
         
         /*****************************************
          Style for picture section 
          *****************************************/
         .picture {
           width: 98%;
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin: 2em 0;
           /* border: 1px solid black; */
         }
         
         #recipe-name {
           border: 1px solid #ccccd8;
           border-radius: 14px;
           font-size: 2vw;
           height: 50%;
           margin: 0 10px;
           outline: none;
           resize: none;
           text-align: center;
           width: 50%;
         }
         #recipe-name:hover{
          border: 1px solid #313131;
         }
         
         .recipe-image-container input {
          margin: 15px;
        }
 
        
        #pic-img-pre-read {
          border-radius: 14px;
          width: 260px;
          margin: 10px
        }
 
         
         /*****************************************
          Style for instructions section 
          *****************************************/
          .category label {
            margin-left: 5px;
            font-size: 17px;
          }
   
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
           font-size: 18px;
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
           transition: all 0.1s linear;
           -moz-transition: all 0.1s linear;
           -o-transition: all 0.1s linear;
           -webkit-transition: all 0.1s linear; 
         }
         
         .add-instruction:hover {
           cursor: pointer;
           box-shadow:0px 1px 17px -8px #000;
           transform: scale(1.02);
         }

        /* Style for Remove button in instruction section */
        .delete-instruction{
          width: calc(95% + 5px);
           height: 50px;
           background-color: #c0392b;
           color: white;
           border: none;
           font-size: 32px;
           margin-top: 10px;
           border-radius: 10px;
           transition: all 0.1s linear;
           -moz-transition: all 0.1s linear;
           -o-transition: all 0.1s linear;
           -webkit-transition: all 0.1s linear; 
        }
        .delete-instruction:hover {
          cursor: pointer;
          box-shadow:0px 1px 17px -8px #000;
          transform: scale(1.02);
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
           font-size: 17px;
         }
         
         .amount-item {
           border: 1px solid rgb(118, 118, 118);
           width: 80%;
           height: 30px;
           border-radius: 10px;
           padding-top: 5px;
           padding-left: 5px;
           font-size: 17px;
         }
         
         .unit-item {
           width: 95%;
           height: 40px;
           border-radius: 10px;
           padding-top: 5px;
           padding-left: 5px;
           font-size: 17px;
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
          display: flex;
          flex-flow: row nowrap;
          padding: 5px;
          margin: 20px 0px;
          justify-content: center;
        }
         
         /* Standard style for submit and delete buttons */
         #submit-edit,
         #delete-edit,
         #cancel-edit {
          border: 1px solid #ccccd8;
          background-color: #fff;
          border-radius: 14px;
          color: #305A50;
          cursor: pointer;
          font-size: 20px;
          margin: 20px;
          padding: 5px 40px;
          min-width: 150px;
         }
         
         #delete-edit,
         #cancel-edit {
          color: #c0392b;
         }
         
         #submit-edit:hover {
          border: 1px solid #313131;
          background: rgb(48, 90, 80);
          color: white;
         }

         #delete-edit:hover,
         #cancel-edit:hover {
          background: #c0392b;
          color: white;
         }
         
         .title {
          font-size: 20px;
          margin: 5px 0px 10px 0px;
        }
        `;

    styling.innerHTML = styles;

    // root element to attach everything to
    let page = document.createElement("article");

    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////// creating the header section /////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    let logoSec = document.createElement("section");
    let titleSec = document.createElement("section");
    let holderSec = document.createElement("section");
    logoSec.setAttribute("id", "logo-sec");
    titleSec.setAttribute("id", "title-sec");
    holderSec.setAttribute("id", "holder-sec");

    let header = document.createElement("header");
    let headerDiv = document.createElement("div");
    let headerHomeLink = document.createElement("a");
    let headerTitle = document.createElement("h1");
    let headerPlaceholder = document.createElement("h1");
    let headerLogo = document.createElement("img");

    headerDiv.setAttribute("class", "header-div");
    headerHomeLink.setAttribute("class", "home-link");
    headerHomeLink.setAttribute("href", "./");
    headerLogo.setAttribute("src", "./assets/images/logo-temp.png");
    headerLogo.setAttribute("class", "logo-img");

    headerTitle.setAttribute("class", "header-title");
    headerTitle.innerHTML = "EDIT RECIPE";
    headerPlaceholder.setAttribute("class", "header-placeholder");
    headerPlaceholder.innerHTML = "HOLDER";

    logoSec.appendChild(headerHomeLink);
    titleSec.appendChild(headerTitle);
    holderSec.appendChild(headerPlaceholder);
    headerHomeLink.appendChild(headerLogo);

    headerDiv.appendChild(logoSec);
    headerDiv.appendChild(titleSec);
    headerDiv.appendChild(holderSec);
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
    if (getTitle(data) == "") {
      picTitle.placeholder = "Recipe Name";
    }
    else {
      picTitle.innerHTML = getTitle(data);
    }

    let picImgContainer = document.createElement("div");
    let picInput = document.createElement("input");
    let picImgPreRead = document.createElement("img");
    picImgPreRead.id = "pic-img-pre-read";
    picImgPreRead.style.display = "block";
    picImgPreRead.src = getImgUrl(data);
    picImgContainer.setAttribute("class", "recipe-image-container");
    picInput.setAttribute("type", "file");
    picInput.setAttribute("accept", "image/*");

    picInput.addEventListener("change", () => {
      if (picInput.files.length) {
        let file = picInput.files[0];
        let reader = new FileReader();
        reader.onload = () => {
          picImgPreRead.style.display = "block";
          picImgPreRead.src = reader.result;
        };

        reader.readAsDataURL(file);
      }
    });

    picImgContainer.appendChild(picInput);
    picImgContainer.appendChild(picImgPreRead);

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
    dietTitle.innerHTML = "Diet Restriction: ";

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
    if (getVegan(data)) {
      optionVegan.setAttribute("checked", "");
    }

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
    if (getDairy(data)) {
      optionDairy.setAttribute("checked", "");
    }

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
    optionGluttenLabel.innerHTML = "Gluten free";
    if (getGluten(data)) {
      optionGlutten.setAttribute("checked", "");
    }

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
    if (getVegeta(data)) {
      optionVegetarian.setAttribute("checked", "");
    }

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

    let ingreArr = getIngreArray(data);
    for (let i = 0; i < ingreArr.length; i++) {
      let ingredientListDiv = document.createElement("div");
      ingredientListDiv.setAttribute("class", "ingredients-list-div");

      let ingredientColumn = document.createElement("div"); // ingredient column
      let ingredientColumnTitle = document.createElement("h2");
      let ingredientColumnInput = document.createElement("textarea");
      ingredientColumn.setAttribute("class", "ingredient-column");
      ingredientColumnTitle.setAttribute("class", "title");
      ingredientColumnTitle.innerHTML = "Ingredient:";
      ingredientColumnInput.setAttribute("class", "ingredients-item");
      ingredientColumnInput.innerHTML = ingreArr[i].name;

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
      amountColumnInput.value = ingreArr[i].amount;

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
      switch (ingreArr[i].unit) {
        case "":
          unitDefault.setAttribute("selected", "selected");
          break;
        case "grams":
          unitGrams.setAttribute("selected", "selected");
          break;
        case "kgs":
          unitKilograms.setAttribute("selected", "selected");
          break;
        case "lbs":
          unitPounds.setAttribute("selected", "selected");
          break;
        case "tbps":
          unitTablespoons.setAttribute("selected", "selected");
          break;
        case "cups":
          unitCups.setAttribute("selected", "selected");
          break;
      }
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
    }

    // Add Ingredient Button
    let addIngredient = document.createElement("button");
    addIngredient.setAttribute("class", "add-instruction");
    addIngredient.setAttribute("id", "add-ingredient");
    addIngredient.innerHTML = "+";

    // Remove Ingredient Button
    let removeIngredient = document.createElement("button");
    removeIngredient.setAttribute("class", "delete-instruction");
    removeIngredient.setAttribute("id", "remove-ingredient");
    removeIngredient.textContent = "-";

    // Add Buttons to div
    ingredientGeneralDiv.appendChild(addIngredient);
    ingredientGeneralDiv.appendChild(removeIngredient);
    ingredientSection.appendChild(ingredientGeneralDiv);

    // Add/Remove Button Click Events
    addIngredient.addEventListener("click", () => {
      this.addIngreItems(addIngredient);
    });
    removeIngredient.addEventListener("click", () => {
      this.removeIngreItem(ingredientGeneralDiv);
    })

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

    let stepsArr = getStepsArray(data);
    for (let i = 0; i < stepsArr.length; i++) {
      let procedureListItem = document.createElement("li");
      let procedureListText = document.createElement("textarea");
      procedureListText.setAttribute("class", "step-item");
      procedureListText.innerHTML = stepsArr[i];

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

    addInstruction.addEventListener("click", () => {
      this.addInstruItems(procedureList);
    });

    // Remove Instruction Button 
    let removeInstruction = document.createElement("button");
    removeInstruction.setAttribute("class", "delete-instruction");
    removeInstruction.setAttribute("id", "remove-instruction");
    removeInstruction.textContent = "-";
    // Append button to Div List 
    procedureDivList.appendChild(removeInstruction);
    // Remove Button Click Event 
    removeInstruction.addEventListener("click", () => {
      this.removeInstruItem(procedureList);
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
    let deleteButton = document.createElement("button");
    let cancelButton = document.createElement("button");

    submitButton.setAttribute("id", "submit-edit");
    deleteButton.setAttribute("id", "delete-edit");
    cancelButton.setAttribute("id", "cancel-edit");
    submitButton.innerHTML = "Submit";
    deleteButton.innerHTML = "Delete";
    cancelButton.innerHTML = "Cancel";

    // Append Buttons to Div
    actionButtons.appendChild(cancelButton);
    actionButtons.appendChild(deleteButton);
    actionButtons.appendChild(submitButton);

    cancelButton.addEventListener("click", () => {
      // if (e.path[0].nodeName == "B") return;
      router.navigate(data["id"]);
    });

    deleteButton.addEventListener("click", () => {
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

      inputData["id"] = data["id"];

      // Using canvas to compress image
      let imgCanvas = document.createElement("canvas");
      let imgContext = imgCanvas.getContext("2d");

      imgCanvas.width = picImgPreRead.width;
      imgCanvas.height = picImgPreRead.height;

      imgContext.drawImage(picImgPreRead, 0, 0, picImgPreRead.width, picImgPreRead.height);
      inputData["image"] = imgCanvas.toDataURL("image/jpeg");

      this.toDelete(inputData);
    });

    submitButton.addEventListener("click", () => {
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
        if (ingreItemList[i].value != "") {
          let newIngreInfo = {}
          newIngreInfo["name"] = ingreItemList[i].value;
          newIngreInfo["amount"] = amountList[i].value;
          newIngreInfo["unit"] = unitList[i].value;
          inputData["extendedIngredients"].push(newIngreInfo);
        }
      }

      let instruList = procedureList.getElementsByClassName("step-item");
      let listHtml = "<ol>";
      let instruArray = [];
      let nonEmptyIndex = 0;
      let trueIndex = 0;
      while (trueIndex < instruList.length) {
        if (instruList[trueIndex].value != "") {
          let newInstruList = `<li>Step ${nonEmptyIndex + 1}: ${instruList[trueIndex].value}</li>`;
          listHtml += newInstruList;
          instruArray.push(instruList[trueIndex].value);
          nonEmptyIndex++;
        }
        trueIndex++;
      }
      listHtml += "</ol>"
      inputData["instructions"] = listHtml;
      inputData["instructionsArray"] = instruArray;

      inputData["id"] = data["id"];

      // Using canvas to compress image
      let imgCanvas = document.createElement("canvas");
      let imgContext = imgCanvas.getContext("2d");

      imgCanvas.width = picImgPreRead.width;
      imgCanvas.height = picImgPreRead.height;

      imgContext.drawImage(picImgPreRead, 0, 0, picImgPreRead.width, picImgPreRead.height);
      inputData["image"] = imgCanvas.toDataURL("image/jpeg");

      updateMy(inputData);
      this.leaveEdit(inputData);
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

  /**
   * Removes ingredient div in DOM
   * @param {object} ingreList list of ingredients
   */
  removeIngreItem(ingreList) {
    // Add and remove buttons are part of the ingredient list 
    // If the ingredient list contains more than 1 ingredient 
    // and the 2 buttons 
    if (ingreList.children.length > 3) {
      // Remove the last ingredient
      ingreList.removeChild(ingreList.children[ingreList.children.length - 3]);
    } else {
      // Alert the user 
      alert("There must be at least 1 Ingredient");
    }
  }

  /**
   * Add an ingredient to the bottom of ingredients list
   * @param {HTMLElement} buttonItem the + button element to add on top of it
   */
  addIngreItems(buttonItem) {
    let ingredientListDiv = document.createElement("div");
    ingredientListDiv.setAttribute("class", "ingredients-list-div");

    let ingredientColumn = document.createElement("div"); // ingredient column
    let ingredientColumnTitle = document.createElement("h2");
    let ingredientColumnInput = document.createElement("textarea");
    ingredientColumn.setAttribute("class", "ingredient-column");
    ingredientColumnTitle.setAttribute("class", "title");
    ingredientColumnTitle.innerHTML = "Ingredient:";
    ingredientColumnInput.setAttribute("class", "ingredients-item");

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

  /**
   * Removes the bottom instruction item in list 
   * @param {object} instruList list of instructions
   * @returns Void
   */
  removeInstruItem(instruList) {
    // If the instruction list has more than 1 instruction 
    if (instruList.children.length > 1) {
      // Remove the last instruction 
      instruList.removeChild(instruList.children[instruList.children.length - 1]);
    }
    else {
      // Alert the user 
      alert("There must be at least 1 procedure");
    }
  }

  /**
   * Add an instruction to instructions list
   * @param {HTMLElement} olItem an ordered HTML list element
   * @returns Void
   */
  addInstruItems(olItem) {
    let procedureListItem = document.createElement("li");
    let procedureListText = document.createElement("textarea");
    procedureListText.setAttribute("class", "step-item");

    procedureListItem.appendChild(procedureListText);
    olItem.appendChild(procedureListItem);
  }

  /**
   * Leave the edit page action
   * @param {Object} data a JSON object of data to load the view page after edit
   * @returns Void
   */
  leaveEdit(data) {
    $("#add-recipe-page").classList.remove("main-shown");
    $("#add-recipe-page").innerHTML = "";
    $("#view-recipe-page").classList.add("main-shown");
    let viewRecipePage = document.createElement("view-my-recipe");
    viewRecipePage.data = data;
    $("#view-recipe-page").appendChild(viewRecipePage);
  }

  /**
   * Load delete confirmation page with passed in data
   * @param {Object} data a JSON object of data to load the delete page
   * @returns Void
   */
  toDelete(data) {
    $("#add-recipe-page").classList.remove("main-shown");
    $("#add-recipe-page").innerHTML = "";
    $("#delete-page").classList.add("main-shown");
    const deletePage = document.createElement("delete-confirmation");
    deletePage.data = data;
    $("#delete-page").appendChild(deletePage);
  }
}

// Define the "edit-recipe" element using this class
customElements.define("edit-recipe", EditRecipe);