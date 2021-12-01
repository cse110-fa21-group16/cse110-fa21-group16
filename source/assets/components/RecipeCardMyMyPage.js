import { router } from "../scripts/main.js";
import { getTitle, getImgUrl } from "../scripts/helpGetDataFunc.js";

/**
 * This is the component for the My Recipe Card element in the My Recipes Page.
 * @class
 */
class RecipeCardMyMyPage extends HTMLElement {
  /**
   * Attach the shadowroot which contains the My Recipe Card materials.
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
        height: 300px;
        justify-content:space-between;
        margin: 25px;
        padding: 0 16px 16px 16px;
        transition: all 0.4s linear;
        width: 200px;
        -moz-transition: all 0.4s linear;
        -o-transition: all 0.4s linear;
        -webkit-transition: all 0.4s linear; 
      }

      article:hover {
        box-shadow:0px 1px 17px -8px #000;
      }

      article p {
        color: #305A50;
        font-size: 16px;
        text-align: center;
      }

      article > img {
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        height: 135px;
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

    // button element - check recipe
    const checkButton = document.createElement("button");
    checkButton.textContent = "CHECK";
    card.appendChild(checkButton);

    // bind check button
    checkButton.addEventListener("click", (e) => {
      console.log(e.path[0].nodeName);
      speechSynthesis.cancel();
      // if (e.path[0].nodeName == "B") return;
      router.navigate(data["id"]);
    });


    this.shadow.appendChild(styleElem);
    this.shadow.appendChild(card);
  }
}


// /**
//  * Load My Recipe Page
//  * @returns Void
//  */
//  function viewRecipe(data) {
//   $("#view-recipe-page").classList.add("main-shown");
//   const viewRecipePage = document.createElement("view-my-recipe");
//   viewRecipePage.data = data;
//   $("#view-recipe-page").appendChild(viewRecipePage);
//   leaveMain();
// }

// Define the "recipe-card-my-my-page" element using this class.
customElements.define("recipe-card-my-my-page", RecipeCardMyMyPage);
