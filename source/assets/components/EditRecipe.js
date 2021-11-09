class EditRecipe extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    set(data) {
        let styling = document.createElement('style');
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
           width: 60%;
           box-shadow: 0px 0px 15px #888888;
           margin-bottom: 90px;
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
           margin-bottom: 20px;
         }
         
         /* Style for action-buttons div */
         .action-buttons {
           width: 55%;
           display: flex;
           flex-direction: row-reverse;
           padding: 5px 5px 5px 5px;
           margin-top: 10px;
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
        
        styling.innerHTML= styles;
        
        // root element to attach everything to
        let page = document.createElement("article");

        ///////////////////////////////////////////////////////////////////////////////
        ///////////////////////// creating the header section /////////////////////////
        ///////////////////////////////////////////////////////////////////////////////
        let header = document.createElement("header");
        let header_div = document.createElement("div");
        let header_a = document.createElement("a");
        let header_title = document.createElement("h1");
        let header_placeholder = document.createElement("h1");

        header_div.setAttribute("class", "header-div");
        header_a.setAttribute("class", "home-link");
        header_a.setAttribute("href", "index.html");
        header_a.innerHTML = "LOGO";
        header_title.setAttribute("class", "header-title");
        header_title.innerHTML = "EDIT RECIPE";
        header.header_placeholder.setAttribute("class", "header-placeholder");
        header_placeholder.innerHTML = "HOLDER";

        header_div.appendChild(header_a);
        header_div.appendChild(header_title);
        header_div.appendChild(header_placeholder);

        /////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////// creating the main > picture section ///////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////
        
        let main = document.createElement("main");

        let origin = document.createElement("div");
        origin.setAttribute("class", "origin");

        let pic_sec = document.createElement("section");
        let pic_title = document.createElement("textarea");
        pic_sec.setAttribute("class", "picture");
        pic_title.setAttribute("id", "recipe-name");
        pic_title.innerHTML = "Recipe Name";

        let pic_img_container = document.createElement("div");
        let pic_img_div = document.createElement("div");
        let pic_image = document.createElement("img");
        let pic_input = document.createElement("input");
        pic_img_container.setAttribute("class", "recipe-image-container");
        pic_img_div.setAttribute("class", "recipe-image-div");
        pic_image.setAttribute("class", "recipe-image");
        pic_image.setAttribute("alt", "Uploaded image");
        pic_image.setAttribute("width", "300");
        pic_image.setAttribute("height", "200");
        pic_input.setAttribute("type", "file");
        pic_input.setAttribute("accept", "image/*");

        pic_img_div.appendChild(pic_image);
        pic_img_container.appendChild(pic_img_div);
        pic_img_container.appendChild(pic_input);

        pic_sec.appendChild(pic_title);
        pic_sec.appendChild(pic_img_container);
        
        /////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////// creating the main > diet section //////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////
        let diet_sec = document.createElement("section");
        diet_sec.setAttribute("class", "diet-restrict");

        let diet_div = document.createElement("div");
        let diet_title = document.createElement("h2");
        diet_div.setAttribute("class", "diet-restriction-div");
        diet_title.setAttribute("class", "title");
        diet_title.innerHTML = "Diet Restriction";
        
        let diet_categ = document.createElement("div");
        diet_categ.setAttribute("class", "category");

        // option 1: vegan
        let diet_opt1 = document.createElement("div");
        let opt1 = document.createElement("input");
        let opt1_lb = document.createElement("label");
        opt1.setAttribute("type", "checkbox");
        opt1.setAttribute("id", "vegan");
        opt1.setAttribute("name", "vegan");
        opt1_lb.setAttribute("for", "vegan");
        opt1_lb.innerHTML = "Vegan"

        diet_opt1.appendChild(opt1);
        diet_opt1.appendChild(opt1_lb);

        // option 2: dairy
        let diet_opt2 = document.createElement("div");
        let opt2 = document.createElement("input");
        let opt2_lb = document.createElement("label");
        opt2.setAttribute("type", "checkbox");
        opt2.setAttribute("id", "dairy");
        opt2.setAttribute("name", "dairy");
        opt2_lb.setAttribute("for", "dairy");
        opt2_lb.innerHTML = "Dairy free"

        diet_opt2.appendChild(opt2);
        diet_opt2.appendChild(opt2_lb);

        // option 3: glutten
        let diet_opt3 = document.createElement("div");
        let opt3 = document.createElement("input");
        let opt3_lb = document.createElement("label");
        opt3.setAttribute("type", "checkbox");
        opt3.setAttribute("id", "glutten");
        opt3.setAttribute("name", "glutten");
        opt3_lb.setAttribute("for", "glutten");
        opt3_lb.innerHTML = "Glutten free"

        diet_opt3.appendChild(opt3);
        diet_opt3.appendChild(opt3_lb);

        // option 4: vegetarian
        let diet_opt4 = document.createElement("div");
        let opt4 = document.createElement("input");
        let opt4_lb = document.createElement("label");
        opt4.setAttribute("type", "checkbox");
        opt4.setAttribute("id", "vegetarian");
        opt4.setAttribute("name", "vegetarian");
        opt4_lb.setAttribute("for", "vegetarian");
        opt4_lb.innerHTML = "Vegetarian"

        diet_opt4.appendChild(opt4);
        diet_opt4.appendChild(opt4_lb);

        diet_categ.appendChild(diet_opt1);
        diet_categ.appendChild(diet_opt2);
        diet_categ.appendChild(diet_opt3);
        diet_categ.appendChild(diet_opt4);

        diet_div.appendChild(diet_title);
        diet_div.appendChild(diet_categ);

        diet_sec.appendChild(diet_div);

        ////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////// creating the main > ingred. section //////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////
        let ing_sec = document.createElement("section");
        ing_sec.setAttribute("class", "ingredients");

        let ing_gen = document.createElement("div");
        ing_gen.setAttribute("class", "ingredients-general-div");
        
        let ing_list = document.createElement("div");
        ing_list.setAttribute("class", "ingredients-list-div");

        let ing_ing = document.createElement("div"); // ingredient column
        let ing_ing_title = document.createElement("h2");
        let ing_ing_inp = document.createElement("textarea");
        ing_ing.setAttribute("class", "ingredient-column");
        ing_ing_title.setAttribute("class", "title");
        ing_ing_title.innerHTML = "Ingredient:";
        ing_ing_inp.setAttribute("class", "ingredients-item");
        ing_ing_inp.innerHTML = "Populate data here";

        ing_ing.appendChild(ing_ing_title);
        ing_ing.appendChild(ing_ing_inp);

        let ing_amount = document.createElement("div"); // amount column
        let ing_amount_title = document.createElement("h2");
        let ing_amount_inp = document.createElement("input");
        ing_amount.setAttribute("class", "amount-column");
        ing_amount_title.setAttribute("class", "title");
        ing_amount_title.innerHTML = "Amount:";
        ing_amount_inp.setAttribute("class", "amount-item");
        ing_amount_inp.setAttribute("type", "number");
        ing_amount_inp.setAttribute("value", "1");

        ing_amount.appendChild(ing_amount_title);
        ing_amount.appendChild(ing_amount_inp);

        let ing_unit = document.createElement("div"); // unit column
        let ing_unit_title = document.createElement("h2");
        ing_unit.setAttribute("class", "unit-column");
        ing_unit_title.setAttribute("class", "title");
        ing_unit_title.innerHTML = "Unit:";

        let ing_unit_inp = document.createElement("select");
        let unit_df = document.createElement("option");
        let unit_g = document.createElement("option");
        let unit_kgs = document.createElement("option");
        let unit_lbs = document.createElement("option");
        let unit_tbps = document.createElement("option");
        let unit_cups = document.createElement("option");
        unit_df.setAttribute("value", "");
        unit_g.setAttribute("value", "grams");
        unit_kgs.setAttribute("value", "kgs");
        unit_lbs.setAttribute("value", "lbs");
        unit_tbps.setAttribute("value", "tbps");
        unit_cups.setAttribute("value", "cups");
        unit_df.innerHTML = "Select unit";
        unit_g.innerHTML = "grams";
        unit_kgs.innerHTML = "kgs";
        unit_lbs.innerHTML = "lbs";
        unit_tbps.innerHTML = "tbps";
        unit_cups.innerHTML = "cups";
        ing_unit_inp.setAttribute("class", "unit-item");
        ing_unit_inp.appendChild(unit_df);
        ing_unit_inp.appendChild(unit_g);
        ing_unit_inp.appendChild(unit_kgs);
        ing_unit_inp.appendChild(unit_lbs);
        ing_unit_inp.appendChild(unit_tbps);
        ing_unit_inp.appendChild(unit_cups);

        ing_unit.appendChild(ing_unit_title);
        ing_unit.appendChild(ing_amount_inp);

        ing_list.appendChild(ing_ing);
        ing_list.appendChild(ing_amount);
        ing_list.appendChild(ing_unit);
        
        ing_gen.appendChild(ing_list);
        ing_sec.appendChild(ing_gen);

        ////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////// creating the main > instruction section //////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////
        let instructionSection = document.createElement("section");

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
        for(let i = 0; i < 3; i++){

          let procedureListItem = document.createElement("li");
          let procedureListText = document.createElement("textarea");
          procedureListText.setAttribute("class", "step-item");
          procedureListText.innerHTML = "Populate data here";

          procedureListItem.appendChild(procedureListItem);
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

        // Append Procedure Div List to procedures div 
        procedures.appendChild(procedureDivList);

        // Append procedures to instruction section 
        instructionSection.appendChild(procedureDivList);
        

        ////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////// Append origin children //////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////
        origin.appendChild(pic_sec);
        origin.appendChild(diet_sec);
        origin.appendChild(ing_sec);
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

        // Action Buttons
        let submitButton = document.createElement("button");
        let deleteButton = document.createElement("button");
        let cancelButton = document.createElement("button");

        submitButton.setAttribute("id", "submit-edit");
        deleteButton.setAttribute("id", "delete-edit");
        cancelButton.setAttribute("id", "cancel-edit");

        // Append Buttons to Div
        actionButtons.appendChild(submitButton);
        actionButtons.appendChild(deleteButton);
        actionButtons.appendChild(cancelButton);

        // Append Div to footer 
        footer.appendChild(actionButtons);


        // ////////////////////////////////////////////////////////////////////////////////////////////
        // //////////////////////// Append header, main, footer to article ////////////////////////////
        // ////////////////////////////////////////////////////////////////////////////////////////////
        // page.appendChild(header);
        // page.appendChild(main);
        // page.appendChild(footer);
    }
}

// define the 'edit-recipe' element using this class
customElements.define("edit-recipe", EditRecipe);