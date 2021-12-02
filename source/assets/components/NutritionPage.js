import { $ } from "../scripts/main.js";

/**
 * This is the component for the Add Recipe Page
 * @class
 */
class NutritionPage extends HTMLElement {
  /**
   * Attach the shadowroot which contains the nutrition page materials.
   * @constructor
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  /**
   * The data needed to populate the nutrition materials are passed in as "data".
   * Nutrition is extracted using data["nutrition"]["nutrients"].
   * @param {Object} data a JSON data object contains information to populate this component.
   */
  set data(data) {
    let styling = document.createElement("style");
    let styles =
      `/* Global styling */
      * {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        color: rgb(48, 90, 80);
      }
      
      /*****************************************
      *****************************************
      Style for article
      *****************************************
      *****************************************/
      article {
        width: 100%;
        /* box-shadow: 0px 0px 15px #888888; */
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
          align-items: center;
          justify-content: center;
          flex-flow: row nowrap;
        }
      
        .header-div h1 {
          text-align: center;
          color: white;
          font-size: 3vw;
        }
      
      /*****************************************
      *****************************************
      Style for Servings section in article
      *****************************************
      *****************************************/
      
        input{
          width: 60px;
          height: 30px;
          text-align: center;
        }
      
      .servings{
        margin-top: 23px;
        text-align: center;
      }
      
      #serving-size{
        max-width: 10em;
        margin-top: 10px;
        margin-bottom: 15px;
      }
      
      /*****************************************
      *****************************************
      Style for Nutrition Facts section in article
      *****************************************
      *****************************************/
      
      .grid-container {
        display: grid;
        grid-template-columns: 100%;
        background-color: rgb(48, 90, 80);
        padding: 10px;
        margin: auto;
        display: flex;
        overflow: auto;
        flex-direction: column;
      }
      
      .item {
        display: flex;
        justify-content: space-between;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 20px;
        font-size: 20px;
        text-align: center;
        grid-column-start: 1;
        border-bottom: 1px solid black;
      }
      
      .item>span{
        color: black;
      }
      
        .origin{
          /* text-align: center; */
          font-weight: bold;
          font-size: xx-large;
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
          margin-bottom: 20px;
        }
      
        .action-buttons {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 5px 5px 5px 5px;
          margin-top: 10px;
        }
      
        #back, #calculate {
          font-size: x-large;
          margin-left: 5px;
          width: 100%;
          height: 48px;
          background-color: rgb(48, 90, 80);
          border: none;
          color: white;
          border-radius: 99px;
          cursor: pointer;
          margin-bottom: 4px;
        }
    `;
    
    styling.innerHTML = styles;
    
    // root element to attach everything to
    let page = document.createElement("article");
    let nutritionData = data["nutrition"]["nutrients"];

    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////// Creating the header section /////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    let header = document.createElement("header");
    let headerDiv = document.createElement("div");
    let headerTitle = document.createElement("h1");
    
    headerDiv.classList.add("header-div");
    headerTitle.classList.add("header-title");
    headerTitle.innerHTML = "Nutrition Facts";

    headerDiv.appendChild(headerTitle);
    header.appendChild(headerDiv);

    /////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// Creating the main and origin //////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    
    let main = document.createElement("main");

    let origin = document.createElement("div");
    origin.classList.add("origin");

    /////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// Creating the Servings /////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    
    let amountPerServings = document.createElement("section");
    amountPerServings.classList.add("amountPerServings");
    let servings = document.createElement("div");
    servings.classList.add("servings");
    servings.innerHTML = "Enter the amount of servings";

    let form = document.createElement("div");
    let label = document.createElement("label");
    label.setAttribute("for", "amount");
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "serving-size");
    input.setAttribute("name", "amount");
    let calculateBtn = document.createElement("button");
    calculateBtn.setAttribute("id", "calculate");
    calculateBtn.innerHTML = "Calculate";
    
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(calculateBtn)
    servings.appendChild(form);
    amountPerServings.appendChild(servings);

    /////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// Creating the Nutrition Facts /////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    
    let facts = document.createElement("section");
    facts.classList.add("facts");
    let gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    
    let requiredData = ["calories", "fat", "carbohydrates", "sugar", "cholesterol", "sodium", "srotein", "fiber", "copper", "iron", "calcium"];
    // Loop thru the data array and put every nutrtition on
    for (let i = 0; i < nutritionData.length; i++) {
      let dataName = nutritionData[i]["name"];
      let dataAmount = nutritionData[i]["amount"];
      let dataUnit = nutritionData[i]["unit"];
      if (!(requiredData.includes(dataName.toLowerCase()))) continue; // exclude nutritions that are not needed
      let item = document.createElement("div");
      let nutrition = document.createElement("div");
      let amountUnit = document.createElement("div");
      let amount = document.createElement("span");
      let unit = document.createElement("span");
  
      item.classList.add("item");
      nutrition.classList.add(`${dataName.toLowerCase()}`);
      amount.setAttribute("id", "amount-serving");
      amount.setAttribute("baseAmount", `${dataAmount}`);
      unit.setAttribute("id", "unit-serving");
      nutrition.innerHTML = dataName;
      amount.innerHTML = dataAmount.toFixed(2);
      unit.innerHTML = " " + dataUnit;
      amountUnit.appendChild(amount);
      amountUnit.appendChild(unit);
      item.appendChild(nutrition);
      item.appendChild(amountUnit);
      gridContainer.appendChild(item);
    }

    facts.appendChild(gridContainer);
    
    // Append origin children
    origin.appendChild(amountPerServings);
    origin.appendChild(facts);

    // Append main children
    main.appendChild(origin);

    // Footer
    let footer = document.createElement("footer");

    // Action Button Div
    let actionButtons = document.createElement("div");
    actionButtons.classList.add("action-buttons");

    // Action Buttons
    let backButton = document.createElement("button");
    backButton.setAttribute("id", "back");
    backButton.innerHTML = "Back";
    backButton.addEventListener("click", () => {
      this.backToView(data);
    })

    // Append Buttons to Div
    actionButtons.appendChild(backButton);

    // Append Div to footer 
    footer.appendChild(actionButtons);

    // Append header, main, footer to article
    page.appendChild(header);
    page.appendChild(main);
    page.appendChild(footer);

    // Attach to shadow DOM
    this.shadow.appendChild(styling);
    this.shadow.appendChild(page);

    // Calculate the nutrition facts based on provided servings
    let amountArray = this.shadowRoot.querySelectorAll("#amount-serving");
    calculateBtn.addEventListener("click", () => {
      amountArray.forEach((item) => {
        if (input.value !== "" && input.value > 0) {
          item.innerHTML = this.calculateServing(item.getAttribute("baseAmount"), input.value);
        }
      });
    });
  }

  /**
   * This function calculates the nutrition facts of some number servings based on the provided 
   * base amount of 1 serving and the desired number of servings.
   * @param {*} baseAmount a number representing the base amount of 1 serving
   * @param {*} multiplier a desired number of serving to multiply the baseAmount with
   * @returns Number 
   */
   calculateServing(baseAmount, multiplier) {
    return (baseAmount * multiplier).toFixed(2);
  }

  /**
   * Load the view recipe page action.
   * @param {Object} data a JSON data object contains information to load back the view recipe page.
   * @returns Void
   */
  backToView(data) {
    $("#view-nutrition-page").classList.remove("main-shown");
    $("#view-nutrition-page").innerHTML = "";
    let viewRecipePage = document.createElement("view-fea-recipe");
    viewRecipePage.data = data;
    $("#view-recipe-page").appendChild(viewRecipePage);
    $("#view-recipe-page").classList.add("main-shown");
  }
}

// Define the "nutrition-page" element using this class.
customElements.define("nutrition-page", NutritionPage);