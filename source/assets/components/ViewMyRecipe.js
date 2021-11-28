import { $, loadMain, router } from "../scripts/main.js";
import { getImgUrl, getTitle, getTime, getSteps, getIngre } from "../scripts/helpGetDataFunc.js";
import { getDairy, getGluten, getVegan, getVegeta } from "../scripts/helpGetDataFunc.js";

/**
 * This is the component for the View My Recipe Page.
 * @class
 */
class ViewMyRecipe extends HTMLElement {
    /**
     * Attach the shadowroot which contains the View Recipe Page materials.
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
        let styleElem = document.createElement("style");
        let styles = `
        /* root css style */
        * {
            color: #305A50;
            margin: 0;
            padding: 0;
        }

        /* article */
        article {
            box-shadow: 0px 0px 15px #888888;
            display: flex;
            flex-flow: row wrap;
            margin: 10px 0px 90px 0px;
        }


        /* header */
        article > header {
            align-items: center;
            background-color: rgb(48, 90, 80);
            display: flex;
            flex-flow: row nowrap;
            height: 12vh;
            justify-content: space-between;
            width: 100%;
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

        #header-title {
            color: white;
            font-size: 2vw;
        }

        #header-placeholder {
            visibility: hidden;
        }

        #home-link {
            color: white;
            font-size: 2vw;
            margin: 0px 0px 0px 20px;
            text-decoration: none;
        }


        /* main */
        article > main {
            align-content: flex-start;
            display: flex;
            flex: 1 1 70%;
            flex-flow: row wrap;
            justify-content: center;
            padding: 15px;
        }

        /* main-header */
        #main-header {
            align-items: center;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            margin: 20px 0px 50px 0px;
            width: 100%;
        }

        #main-header > h1 {
            line-height: 35px;
            font-size: 30px;
            margin: 0px 30px;
        }


        /* left-main */
        #left-main {
            align-items: center;
            display: flex;
            flex: 1 1 40%;
            flex-flow: column nowrap;
        }

        #left-main > img {
            border-radius: 14px;
            width: 260px;
        }

        #left-main > h2 {
            visibility: hidden;
            margin: 10px 0px 20px 0px;
        }
        
        #left-main > p {
            visibility: hidden;
            font-size: 20px;
            margin-bottom: 10px;
        }

        #left-main > button {
            background-color: #ffffff;
            border: 1px solid #ccccd8;
            border-radius: 14px;
            color: #305a50;
            cursor: pointer;
            font-size: 16px;
            min-width: 120px;
            padding: 5px 20px;
        }
        
        #left-main > button:hover {
            border: 1px solid #313131;
            background: darkgreen;
            color: white;
        }

        /* right-main */
        #right-main {
            display: flex;
            flex: 1 1 60%;
            flex-flow: column nowrap;
        }

        #right-main > h2 {
            margin-bottom: 15px;
        }

        #steps-list {
            font-size: 17px;
            text-indent: 50px;
            line-height: 30px;
            margin: 0px 5px 0px 10px;
        }

        #steps-list > ol > li {
            font-size: 17px;
            margin: 20px 5px 20px 30px;
            text-indent: 0px;
        }

        /* main-footer */
        #main-footer{
            align-items: center;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-end;
            margin: 90px 60px 60px 60px;
            width: 100%;
        }

        #main-footer > button {
            background-color: #ffffff;
            border: 1px solid #ccccd8;
            border-radius: 14px;
            color: #305a50;
            cursor: pointer;
            font-size: 16px;
            margin: 0px 20px 0px 0px;
            min-width: 120px;
            padding: 5px 20px;
        }
        
        #main-footer > button:hover {
            border: 1px solid #313131;
            background: darkgreen;
            color: white;
        }


        /* aside */
        article > aside {
            align-items: center;
            background-color: rgb(240,249,255);
            display: flex;
            flex: 1 1 25%;
            flex-flow: column nowrap;
            padding-bottom: 60px;
        }

        #ingre-aside {
            margin: 40px 15px;
        }

        #ingre-aside h2 {
            text-align: center;
        }

        #ingre-list > ol > li {
            font-size: 16px;
            margin: 10px 10px 10px 30px;
        }

        .diet-check {
            align-items: center;
            display: flex;
            flex-flow: row nowrap;
            margin: 20px;
        }

        .diet-check > span{
            font-size: 20px;
            margin: 0px 10px;
        }

        .diet-check > img {
            width: 20px;
            height: 20px;
        }
        `;
        styleElem.innerHTML = styles;

        let card = document.createElement("article");

        // header
        let logoSec = document.createElement("section");
        let titleSec = document.createElement("section");
        let holderSec = document.createElement("section");
        logoSec.setAttribute("id", "logo-sec");
        titleSec.setAttribute("id", "title-sec");
        holderSec.setAttribute("id", "holder-sec");

        let header = document.createElement("header");
        let headerHomeLink = document.createElement("a");
        let headerTitle = document.createElement("h1");
        let headerPlaceholder = document.createElement("h1");
        let headerLogo = document.createElement("img");

        headerHomeLink.id = "home-link";
        headerHomeLink.setAttribute("href", "./");
        headerLogo.setAttribute("src", "./assets/images/logo-temp.png");
        headerLogo.setAttribute("class", "logo-img");

        headerTitle.id = "header-title";
        headerTitle.innerHTML = "VIEW RECIPE";
        headerPlaceholder.id = "header-placeholder";
        headerPlaceholder.innerHTML = "HOLDER";

        logoSec.appendChild(headerHomeLink);
        titleSec.appendChild(headerTitle);
        holderSec.appendChild(headerPlaceholder);
        headerHomeLink.appendChild(headerLogo);
        header.appendChild(logoSec);
        header.appendChild(titleSec);
        header.appendChild(holderSec);

        // main
        let main = document.createElement("main");

        // main-header
        let mainHeaderSec = document.createElement("section");
        mainHeaderSec.id = "main-header";
        let recipeTitle = document.createElement("h1");
        recipeTitle.textContent = getTitle(data);


        mainHeaderSec.appendChild(recipeTitle);

        // left-main
        let leftMainSec = document.createElement("section");
        leftMainSec.id = "left-main";

        let recipeImg = document.createElement("img");
        recipeImg.src = getImgUrl(data);
        recipeImg.alt = getTitle(data);

        let timeLabel = document.createElement("h2");
        timeLabel.textContent = "Time: ";

        let cookTime = document.createElement("p");
        cookTime.textContent = `${getTime(data)} min`;

        // let toNutPage = document.createElement("button");
        // toNutPage.textContent = "Nutrition Facts";
        
        var speechSynthesis = window.speechSynthesis;
        let textToSpeech = document.createElement("button");
        textToSpeech.textContent = "TTS";
        textToSpeech.addEventListener("click", () => {
            this.playTextToSpeech();
        })

        leftMainSec.appendChild(recipeImg);
        leftMainSec.appendChild(timeLabel);
        leftMainSec.appendChild(cookTime);
        // leftMainSec.appendChild(toNutPage);
        leftMainSec.appendChild(textToSpeech);

        // right-main
        let rightMainSec = document.createElement("section");
        rightMainSec.id = "right-main";

        let stepsTitle = document.createElement("h2");
        stepsTitle.textContent = "Procedure and steps: ";

        let stepsSec = document.createElement("section");
        stepsSec.id = "steps-list";
        stepsSec.innerHTML = getSteps(data);

        rightMainSec.appendChild(stepsTitle);
        rightMainSec.appendChild(stepsSec);

        // main-footer
        let mainFooterSec = document.createElement("section");
        mainFooterSec.id = "main-footer";

        let backButton = document.createElement("button");
        backButton.textContent = "Back";
        backButton.addEventListener("click", this.myRecipeToLand);

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            this.myRecipeToEdit(data);
        });


        mainFooterSec.appendChild(backButton);
        mainFooterSec.appendChild(editButton);

        main.appendChild(mainHeaderSec);
        main.appendChild(leftMainSec);
        main.appendChild(rightMainSec);
        main.appendChild(mainFooterSec);


        // aside
        let aside = document.createElement("aside");

        // ingre-aside
        let ingreAside = document.createElement("section");
        ingreAside.id = "ingre-aside";

        let ingreLabel = document.createElement("h2");
        ingreLabel.textContent = "Ingredients: ";

        let ingreListSec = document.createElement("section");
        ingreListSec.id = "ingre-list";
        ingreListSec.innerHTML = getIngre(data);

        ingreAside.appendChild(ingreLabel);
        ingreAside.appendChild(ingreListSec);

        // diet-aside
        let dietAside = document.createElement("section");
        dietAside.id = "diet-aside";

        let dietLabel = document.createElement("h2");
        dietLabel.textContent = "Diet Restriction: ";

        // vegan-check
        let veganSec = document.createElement("div");
        veganSec.classList.add("diet-check");
        veganSec.id = "vegan-check";

        let veganImg = document.createElement("img");
        if (getVegan(data)) {
            veganImg.setAttribute("src", "assets/images/icons/fillCheck.svg");
        }
        else {
            veganImg.setAttribute("src", "assets/images/icons/emptyCheck.svg");
        }

        let veganLabel = document.createElement("span");
        veganLabel.textContent = "Vegan";

        veganSec.appendChild(veganImg);
        veganSec.appendChild(veganLabel);

        // dairy-check
        let dairySec = document.createElement("div");
        dairySec.classList.add("diet-check");
        dairySec.id = "dairy-check";

        let dairyImg = document.createElement("img");
        if (getDairy(data)) {
            dairyImg.setAttribute("src", "assets/images/icons/fillCheck.svg");
        }
        else {
            dairyImg.setAttribute("src", "assets/images/icons/emptyCheck.svg");
        }

        let dairyLabel = document.createElement("span");
        dairyLabel.textContent = "Dairy free";

        dairySec.appendChild(dairyImg);
        dairySec.appendChild(dairyLabel);

        // gluten-check
        let glutenSec = document.createElement("div");
        glutenSec.classList.add("diet-check");
        glutenSec.id = "gluten-check";

        let glutenImg = document.createElement("img");
        if (getGluten(data)) {
            glutenImg.setAttribute("src", "assets/images/icons/fillCheck.svg");
        }
        else {
            glutenImg.setAttribute("src", "assets/images/icons/emptyCheck.svg");
        }

        let glutenLabel = document.createElement("span");
        glutenLabel.textContent = "Gluten free";

        glutenSec.appendChild(glutenImg);
        glutenSec.appendChild(glutenLabel);

        // vegeta-check
        let vegetaSec = document.createElement("div");
        vegetaSec.classList.add("diet-check");
        vegetaSec.id = "veget-check";

        let vegetaImg = document.createElement("img");
        if (getVegeta(data)) {
            vegetaImg.setAttribute("src", "assets/images/icons/fillCheck.svg");
        }
        else {
            vegetaImg.setAttribute("src", "assets/images/icons/emptyCheck.svg");
        }

        let vegetaLabel = document.createElement("span");
        vegetaLabel.textContent = "Vegetarian";

        vegetaSec.appendChild(vegetaImg);
        vegetaSec.appendChild(vegetaLabel);

        dietAside.appendChild(dietLabel);
        dietAside.appendChild(veganSec);
        dietAside.appendChild(dairySec);
        dietAside.appendChild(glutenSec);
        dietAside.appendChild(vegetaSec);

        aside.appendChild(ingreAside);
        aside.appendChild(dietAside);

        card.appendChild(header);
        card.appendChild(main);
        card.appendChild(aside);

        this.shadow.appendChild(styleElem);
        this.shadow.appendChild(card);
    }

    /**
     * Leave View My Recipe Page to landing page.
     * @returns Void
     */
    myRecipeToLand() {
        $("#view-recipe-page").classList.remove("main-shown");
        $("#view-recipe-page").innerHTML = "";
        loadMain();
        if ($("#my-page").classList.contains("shown")) {
            router.navigate("ToMyRecipePage");
        }
        else if ($("#search-my").classList.contains("shown")) {
            router.navigate("ToSearchPage");
        }
        else {
            router.navigate("home");
        }
    }

    /**
     * Leave View My Recipe Page to edit page.
     * @param {Object} data a JSON data object contains information to populate this component.
     * @returns Void
     */
    myRecipeToEdit(data) {
        $("#view-recipe-page").classList.remove("main-shown");
        $("#view-recipe-page").innerHTML = "";
        let editRecipePage = document.createElement("edit-recipe");
        editRecipePage.data = data;
        $("#add-recipe-page").appendChild(editRecipePage);
        $("#add-recipe-page").classList.add("main-shown");
    }

    /**
     * TTS for each step in the recipe page
     * @returns Void
     */
    playTextToSpeech() {
        let recipeText = this.shadowRoot.querySelector("#steps-list");
        recipeText = recipeText.querySelectorAll("li");
        let i = 0;
        let speechText = new SpeechSynthesisUtterance(recipeText[i].textContent);
        speechSynthesis.speak(speechText);
        console.log(i);
        window.addEventListener('keydown', function(event) {
            if (event.key == "ArrowRight" && i < recipeText.length - 1) {
                i++;
                let speechText = new SpeechSynthesisUtterance(recipeText[i].textContent);
                speechSynthesis.speak(speechText);
            }
            if (event.key == "ArrowLeft" && i > 0) {
                i--;
                let speechText = new SpeechSynthesisUtterance(recipeText[i].textContent);
                speechSynthesis.speak(speechText);
            }
        });            
    }
}

// Define the "view-fea-recipe" element using this class.
customElements.define("view-my-recipe", ViewMyRecipe);