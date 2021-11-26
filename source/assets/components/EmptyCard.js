/**
 * This is the component for the Empty Card element.
 * @class
 */
class EmptyCard extends HTMLElement {
  /**
   * Create an empty recipe card.
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
        border: 1px solid rgb(223, 225, 229);
        border-radius: 40px;
        height: 350px;
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
    `;
    styleElem.innerHTML = styles;

    const card = document.createElement("article");

    this.shadow.appendChild(styleElem);
    this.shadow.appendChild(card);
  }
}

// Define the "empty-card" element using this class.
customElements.define("empty-card", EmptyCard);