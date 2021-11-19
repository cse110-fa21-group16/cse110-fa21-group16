import { checkFav, rmFav, addFav } from "../scripts/helpCrudFunc.js";
import { getImgUrl, getTitle, getTime, getSteps, getIngre } from "../scripts/helpGetDataFunc.js";
import { getDairy, getGluten, getVegan, getVegeta } from "../scripts/helpGetDataFunc.js";

class ViewFeaRecipe extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    set data(data) {
        const styleElem = document.createElement("style");
        const styles = `
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

        #main-header > img {
            width: 25px;
            height: 25px;
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
            margin: 60px 0px 20px 0px;
        }
        
        #left-main > p {
            font-size: 20px;
            margin-bottom: 40px;
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

        const card = document.createElement("article");

        // header
        const header = document.createElement("header");
        const headerHomeLink = document.createElement("a");
        const headerTitle = document.createElement("h1");
        const headerPlaceholder = document.createElement("h1");

        headerHomeLink.id = "home-link";
        headerHomeLink.setAttribute("href", "index.html");
        headerHomeLink.innerHTML = "LOGO";
        headerTitle.id = "header-title";
        headerTitle.innerHTML = "VIEW RECIPE";
        headerPlaceholder.id = "header-placeholder";
        headerPlaceholder.innerHTML = "HOLDER";

        header.appendChild(headerHomeLink);
        header.appendChild(headerTitle);
        header.appendChild(headerPlaceholder);

        // main
        const main = document.createElement("main");

        // main-header
        const mainHeaderSec = document.createElement("section");
        mainHeaderSec.id = "main-header";
        const recipeTitle = document.createElement("h1");
        recipeTitle.textContent = getTitle(data);

        const heartImg = document.createElement("img");
        if (checkFav(getTitle(data))) {
            heartImg.setAttribute("src", "assets/images/icons/fillHeart.svg");
        }
        else {
            heartImg.setAttribute("src", "assets/images/icons/emptyHeart.svg");
        }

        heartImg.addEventListener("click", () => {
            changeHeart(data, heartImg);
        });

        mainHeaderSec.appendChild(recipeTitle);
        mainHeaderSec.appendChild(heartImg);

        // left-main
        const leftMainSec = document.createElement("section");
        leftMainSec.id = "left-main";

        const recipeImg = document.createElement("img");
        recipeImg.src = getImgUrl(data);
        recipeImg.alt = getTitle(data);

        const timeLabel = document.createElement("h2");
        timeLabel.textContent = "Time: ";

        const cookTime = document.createElement("p");
        cookTime.textContent = `${getTime(data)} min`;

        const toNutPage = document.createElement("button");
        toNutPage.textContent = "Nutrition Facts";

        leftMainSec.appendChild(recipeImg);
        leftMainSec.appendChild(timeLabel);
        leftMainSec.appendChild(cookTime);
        leftMainSec.appendChild(toNutPage);

        // right-main
        const rightMainSec = document.createElement("section");
        rightMainSec.id = "right-main";

        const stepsTitle = document.createElement("h2");
        stepsTitle.textContent = "Procedure and steps: ";

        const stepsSec = document.createElement("section");
        stepsSec.id = "steps-list";
        stepsSec.innerHTML = getSteps(data);
        if (stepsSec.innerHTML == '') {
            stepsSec.innerHTML = 'OOOPS! The recipe does not contain any procedure or steps. Please start using your imagination!'
        }

        rightMainSec.appendChild(stepsTitle);
        rightMainSec.appendChild(stepsSec);

        // main-footer
        const mainFooterSec = document.createElement("section");
        mainFooterSec.id = "main-footer";

        const backButton = document.createElement("button");
        backButton.textContent = "Back";
        backButton.addEventListener("click", feaRecipeToLand);

        mainFooterSec.appendChild(backButton);

        main.appendChild(mainHeaderSec);
        main.appendChild(leftMainSec);
        main.appendChild(rightMainSec);
        main.appendChild(mainFooterSec);


        // aside
        const aside = document.createElement("aside");

        // ingre-aside
        const ingreAside = document.createElement("section");
        ingreAside.id = "ingre-aside";

        const ingreLabel = document.createElement("h2");
        ingreLabel.textContent = "Ingredients: ";

        const ingreListSec = document.createElement("section");
        ingreListSec.id = "ingre-list";
        ingreListSec.innerHTML = getIngre(data);

        ingreAside.appendChild(ingreLabel);
        ingreAside.appendChild(ingreListSec);

        // diet-aside
        const dietAside = document.createElement("section");
        dietAside.id = "diet-aside";

        const dietLabel = document.createElement("h2");
        dietLabel.textContent = "Diet Restriction: ";

        // vegan-check
        const veganSec = document.createElement("div");
        veganSec.classList.add("diet-check");
        veganSec.id = "vegan-check";

        const veganImg = document.createElement("img");
        if (getVegan(data)) {
            veganImg.setAttribute("src", "assets/images/icons/fillCheck.svg");
        }
        else {
            veganImg.setAttribute("src", "assets/images/icons/emptyCheck.svg");
        }

        const veganLabel = document.createElement("span");
        veganLabel.textContent = "Vegan";

        veganSec.appendChild(veganImg);
        veganSec.appendChild(veganLabel);

        // dairy-check
        const dairySec = document.createElement("div");
        dairySec.classList.add("diet-check");
        dairySec.id = "dairy-check";

        const dairyImg = document.createElement("img");
        if (getDairy(data)) {
            dairyImg.setAttribute("src", "assets/images/icons/fillCheck.svg");
        }
        else {
            dairyImg.setAttribute("src", "assets/images/icons/emptyCheck.svg");
        }

        const dairyLabel = document.createElement("span");
        dairyLabel.textContent = "Dairy free";

        dairySec.appendChild(dairyImg);
        dairySec.appendChild(dairyLabel);

        // gluten-check
        const glutenSec = document.createElement("div");
        glutenSec.classList.add("diet-check");
        glutenSec.id = "gluten-check";

        const glutenImg = document.createElement("img");
        if (getGluten(data)) {
            glutenImg.setAttribute("src", "assets/images/icons/fillCheck.svg");
        }
        else {
            glutenImg.setAttribute("src", "assets/images/icons/emptyCheck.svg");
        }

        const glutenLabel = document.createElement("span");
        glutenLabel.textContent = "Gluten free";

        glutenSec.appendChild(glutenImg);
        glutenSec.appendChild(glutenLabel);

        // vegeta-check
        const vegetaSec = document.createElement("div");
        vegetaSec.classList.add("diet-check");
        vegetaSec.id = "veget-check";

        const vegetaImg = document.createElement("img");
        if (getVegeta(data)) {
            vegetaImg.setAttribute("src", "assets/images/icons/fillCheck.svg");
        }
        else {
            vegetaImg.setAttribute("src", "assets/images/icons/emptyCheck.svg");
        }

        const vegetaLabel = document.createElement("span");
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
}

/**
 * Toggles on and off the heart based on favorite
 * @returns void
 */
function changeHeart(data, cardObj) {
    if (checkFav(getTitle(data))) {
        cardObj.setAttribute("src", "assets/images/icons/emptyHeart.svg");
        rmFav(getTitle(data));
    }
    else {
        cardObj.setAttribute("src", "assets/images/icons/fillHeart.svg");
        addFav(data);
    }
}

/**
 * Leave Featured Recipe Page to landing page
 * @returns void
 */
function feaRecipeToLand() {
    $("#view-recipe-page").classList.remove("main-shown");
    $("#view-recipe-page").innerHTML = "";
    loadMain();
    if ($("#featured-page").classList.contains("shown")) {
        loadFeatured();
    }
    else if ($("#favorite-page").classList.contains("shown")) {
        loadFavorite();
    }
    else {
        loadLanding();
    }
}



customElements.define("view-fea-recipe", ViewFeaRecipe);