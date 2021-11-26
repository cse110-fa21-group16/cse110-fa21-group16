import { $ } from "../scripts/main.js";
import { leaveMain } from "../scripts/main.js";

/**
 * This is the component for the New Card element in the landing page.
 * @class
 */
class NewCard extends HTMLElement {
  /**
   * Attach the shadowroot which contains the plus sign image and styling of a blank recipe card.
   * @constructor
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

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
        justify-content:center;
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
        cursor: pointer;
      } 
    `;
    styleElem.innerHTML = styles;

    const card = document.createElement("article");

    const checkButton = document.createElement("img");
    checkButton.src = "assets/images/icons/add.svg";
    checkButton.width = "50";
    card.appendChild(checkButton);
    card.addEventListener("click", this.addNewRecipe);


    this.shadow.appendChild(styleElem);
    this.shadow.appendChild(card);
  }

  /**
   * Triggers the add action in which the add page will pop up.
   * @returns Void
   */
  addNewRecipe() {
    leaveMain();
    let addRecipePage = document.createElement("add-recipe");
    addRecipePage.data = {};
    $("#add-recipe-page").appendChild(addRecipePage);
    $("#add-recipe-page").classList.add("main-shown");
  }
}

// Define the "new-card" element using this class.
customElements.define("new-card", NewCard);