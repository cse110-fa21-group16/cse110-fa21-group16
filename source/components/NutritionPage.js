class NutritionPage extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({mode: "open"});
    }

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
           }
         
          .servings{
            margin-top: 23px;
            text-align: center;
          }
         
          #servingSize{
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
           max-width: 20%;
           background-color: rgb(48, 90, 80);
           padding: 10px;
           margin: auto;
           display: flex;
           flex-direction: column;
         }
         
         .item {
           display: flex;
           justify-content: space-between;
           background-color: rgba(255, 255, 255, 0.8);
           padding: 20px;
           font-size: 30px;
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
             width: 55%;
             display: flex;
             justify-content: center;
             padding: 5px 5px 5px 5px;
             margin-top: 10px;
           }
         
           #back{
             font-size: x-large;
             margin-left: 5px;
             width: 25%;
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

        ///////////////////////////////////////////////////////////////////////////////
        ///////////////////////// Creating the header section /////////////////////////
        ///////////////////////////////////////////////////////////////////////////////
        let header = document.createElement("header");
        let headerDiv = document.createElement("div");
        let headerTitle = document.createElement("h1");
        
        headerDiv.classList.add("header-div");
        headerTitle.classList.add("header-title");
        headerTitle.innerHTML("Nutrition Facts");

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
        servings.innerHTML("Enter the amount of servings");

        let form = document.createElement("form");
        form.setAttribute("action", "");
        let label = document.createElement("label");
        label.setAttribute("for", "amount");
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "servingSize");
        input.setAttribute("name", "amount");
        
        form.appendChild(label);
        form.appendChild(input);
        servings.appendChild(form);
        amountPerServings.appendChild(servings);

        /////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////// Creating the Nutrition Facts /////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////
        
        let facts = document.createElement("section");
        facts.classList.add("facts");
        let gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-container");

        // calories
        let calories = document.createElement("div");
        calories.classList.add("item calories");
        let caloriesDiv = document.createElement("div");
        caloriesDiv.innerHTML("Calories");
        let caloriesSpan = document.createElement("span");
        caloriesSpan.innerHTML("100");

        calories.appendChild(caloriesDiv);
        calories.appendChild(caloriesSpan);

        // sat-fat
        let satFat = document.createElement("div");
        satFat.classList.add("item sat-fat");
        let satFatDiv = document.createElement("div");
        satFatDiv.innerHTML("Total Fat");
        let satFatSpan = document.createElement("span");
        satFatSpan.innerHTML("100");

        satFat.appendChild(satFatDiv);
        satFat.appendChild(satFatSpan);

        // trans-fat
        let transFat = document.createElement("div");
        transFat.classList.add("item trans-fat");
        let transFatDiv = document.createElement("div");
        transFatDiv.innerHTML("Trans Fat");
        let transFatSpan = document.createElement("span");
        transFatSpan.innerHTML("100");

        transFat.appendChild(transFatDiv);
        transFat.appendChild(transFatSpan);

        // cholesterol
        let cholesterol = document.createElement("div");
        cholesterol.classList.add("item cholesterol");
        let cholesterolDiv = document.createElement("div");
        cholesterolDiv.innerHTML("Cholesterol");
        let cholesterolSpan = document.createElement("span");
        cholesterolSpan.innerHTML("100");

        cholesterol.appendChild(cholesterolDiv);
        cholesterol.appendChild(cholesterolSpan);

        // sodium
        let sodium = document.createElement("div");
        sodium.classList.add("item sodium");
        let sodiumDiv = document.createElement("div");
        sodiumDiv.innerHTML("Sodium");
        let sodiumSpan = document.createElement("span");
        sodiumSpan.innerHTML("100");

        sodium.appendChild(sodiumDiv);
        sodium.appendChild(sodiumSpan);

        // carbohydrate
        let carbohydrate = document.createElement("div");
        carbohydrate.classList.add("item carbohydrate");
        let carbohydrateDiv = document.createElement("div");
        carbohydrateDiv.innerHTML("Carbohydrate");
        let carbohydrateSpan = document.createElement("span");
        carbohydrateSpan.innerHTML("100");

        carbohydrate.appendChild(carbohydrateDiv);
        carbohydrate.appendChild(carbohydrateSpan);

        // fiber
        let fiber = document.createElement("div");
        fiber.classList.add("item fiber");
        let fiberDiv = document.createElement("div");
        fiberDiv.innerHTML("Dietary Fiber");
        let fiberSpan = document.createElement("span");
        fiberSpan.innerHTML("100");

        fiber.appendChild(fiberDiv);
        fiber.appendChild(fiberSpan);

        // sugars
        let sugars = document.createElement("div");
        sugars.classList.add("item sugars");
        let sugarsDiv = document.createElement("div");
        sugarsDiv.innerHTML("Total Sugars");
        let sugarsSpan = document.createElement("span");
        sugarsSpan.innerHTML("100");


        sugars.appendChild(sugarsDiv);
        sugars.appendChild(sugarsSpan);

        // protein
        let protein = document.createElement("div");
        protein.classList.add("item protein");
        let proteinDiv = document.createElement("div");
        proteinDiv.innerHTML("Protein");
        let proteinSpan = document.createElement("span");
        proteinSpan.innerHTML("100");


        protein.appendChild(proteinDiv);
        protein.appendChild(proteinSpan);

        // vitamins
        let vitamins = document.createElement("div");
        vitamins.classList.add("item vitamins");
        let vitaminsDiv = document.createElement("div");
        vitaminsDiv.innerHTML("Vitamins");
        let vitaminsSpan = document.createElement("span");
        vitaminsSpan.innerHTML("100");

        vitamins.appendChild(vitaminsDiv);
        vitamins.appendChild(vitaminsSpan);

        // append all divs to grid-container

        gridContainer.appendChild(calories);
        gridContainer.appendChild(satFat);
        gridContainer.appendChild(transFat);
        gridContainer.appendChild(cholesterol);
        gridContainer.appendChild(sodium);
        gridContainer.appendChild(carbohydrate);
        gridContainer.appendChild(fiber);
        gridContainer.appendChild(sugars);
        gridContainer.appendChild(protein);
        gridContainer.appendChild(vitamins);

        facts.appendChild(gridContainer);
        
        ////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////// Append origin children //////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////
        origin.appendChild(amountPerServings);
        origin.appendChild(facts);

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
        actionButtons.classList.add("action-buttons");

        // Action Buttons
        let backButton = document.createElement("button");
        backButton.setAttribute("id", "back");
        backButton.innerHTML("Go Back");

        // Append Buttons to Div
        actionButtons.appendChild(backButton);

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
        this.shadowRoot.appendChild(styling);
        this.shadowRoot.appendChild(page);
    }
}

// define the 'nutrition-page' element using this class
customElements.define("nutrition-page", NutritionPage);