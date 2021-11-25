import { router } from "../scripts/main.js";
import { getImgUrl, getTitle, getTime } from "../scripts/helpGetDataFunc.js";

/**
 * This is the component for the Featured Recipe Card element in the landing page.
 * @class
 */
class RecipeCardFea extends HTMLElement {
  /**
   * Attach the shadowroot which contains the Featured Recipe Card materials.
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
    const styleElem = document.createElement("style");
    const styles = `
      * {
        margin: 0;
        padding: 0;
      }
      
      article {
        align-items: center;
        border: 1px solid rgb(223, 225, 229);
        border-radius: 40px;
        display: flex;
        flex-direction: column;
        height: 350px;
        justify-content:space-between;
        margin: 25px;
        padding: 0 16px 16px 16px;
        transition: all 0.4s linear;
        width: 250px;
        -moz-transition: all 0.4s linear;
        -o-transition: all 0.4s linear;
        -webkit-transition: all 0.4s linear; 
      }

      article:hover {
        box-shadow:0px 1px 17px -8px #000;
      }

      article p {
        color: #305A50;
        font-size: 20px;
        text-align: center;
      }

      article > img {
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        height: 180px;
        object-fit: cover;
        width: calc(100% + 32px);
      }

      article button {
        border: 1px solid #ccccd8;
        background-color: #fff;
        border-radius: 14px;
        color: #305A50;
        cursor: pointer;
        font-size: 20px;
        padding: 5px 30px;
      }
    
      article button:hover {
        border: 1px solid #313131;
        background: darkgreen;
        color: white;
      }
    
      article .cook-time {
        font-size: 15px;
      }
    `;
    styleElem.innerHTML = styles;

    const card = document.createElement("article");

    const recipeImg = document.createElement("img");
    recipeImg.src = getImgUrl(data);
    recipeImg.alt = getTitle(data);
    card.appendChild(recipeImg);

    // p element - title
    const recipeTitle = document.createElement("p");
    recipeTitle.classList.add("title");
    recipeTitle.textContent = getTitle(data);
    card.appendChild(recipeTitle);

    // time element
    const time = document.createElement("p");
    time.classList.add("cook-time");
    const totalTime = getTime(data);
    time.textContent = `${totalTime} min`;
    card.appendChild(time);

    // button element - check recipe
    const checkButton = document.createElement("button");
    checkButton.textContent = "COOK!";
    card.appendChild(checkButton);

    // bind check button to router
    checkButton.addEventListener("click", (e) => {
      let page = recipeTitle.innerHTML;
      page = page.replace(/&amp;/g, "");
      router.navigate(page);
    });

    this.shadow.appendChild(styleElem);
    this.shadow.appendChild(card);
  }
}

// /**
//  * Load Featured Recipe Page
//  * @param {Object} data a JSON data object contains information to load the view recipe page.
//  */
// export function viewRecipe(data) {
//   $("#view-recipe-page").classList.add("main-shown");
//   const viewRecipePage = document.createElement("view-fea-recipe");
//   viewRecipePage.data = data;
//   $("#view-recipe-page").appendChild(viewRecipePage);
//   leaveMain();
// }

// Define the "recipe-card-fea" element using this class.
customElements.define("recipe-card-fea", RecipeCardFea);

