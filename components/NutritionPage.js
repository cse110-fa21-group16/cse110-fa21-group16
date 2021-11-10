class EditRecipe extends HTMLElement {
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
        ///////////////////////// creating the header section /////////////////////////
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
        ///////////////////////// creating the main and origin //////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////
        
        let main = document.createElement("main");

        let origin = document.createElement("div");
        origin.classList.add("origin");

        


        let picSection = document.createElement("section");
        let picTitle = document.createElement("textarea");
        picSection.setAttribute("class", "picture");
        picTitle.setAttribute("id", "recipe-name");
        picTitle.innerHTML = "Recipe Name";

        let picImgContainer = document.createElement("div");
        let picImgDiv = document.createElement("div");
        let picImage = document.createElement("img");
        let picInput = document.createElement("input");
        picImgContainer.setAttribute("class", "recipe-image-container");
        picImgDiv.setAttribute("class", "recipe-image-div");
        picImage.setAttribute("class", "recipe-image");
        picImage.setAttribute("alt", "Uploaded image");
        picImage.setAttribute("width", "300");
        picImage.setAttribute("height", "200");
        picInput.setAttribute("type", "file");
        picInput.setAttribute("accept", "image/*");

        picImgDiv.appendChild(picImage);
        picImgContainer.appendChild(picImgDiv);
        picImgContainer.appendChild(picInput);

        picSection.appendChild(picTitle);
        picSection.appendChild(picImgContainer);
        
        
        
        

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
        actionButtons.appendChild(submitButton);
        actionButtons.appendChild(deleteButton);
        actionButtons.appendChild(cancelButton);

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

// define the 'edit-recipe' element using this class
customElements.define("edit-recipe", EditRecipe);