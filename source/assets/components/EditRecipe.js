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

        // creating the header sections
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
    }
}

// define the 'edit-recipe' element using this class
customElements.define("edit-recipe", EditRecipe);