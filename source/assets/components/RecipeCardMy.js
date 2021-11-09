const $ = (selector) => document.querySelector(selector);

class RecipeCardMy extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  set data(data) {
    const styleElem = document.createElement('style');
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
        color:#c0392b;
      }
    
    `;
    styleElem.innerHTML = styles;

    const card = document.createElement('article');

    const recipeImg = document.createElement('div');
    card.appendChild(recipeImg);

    // p element - title
    const recipeTitle = document.createElement('p');
    recipeTitle.classList.add("title");
    recipeTitle.textContent = getTitle(data);
    card.appendChild(recipeTitle);

    // button element - check recipe
    const checkButton = document.createElement('button');
    checkButton.textContent = "CHECK";
    card.appendChild(checkButton);


    this.shadow.appendChild(styleElem);
    this.shadow.appendChild(card);
  }
}




function getTitle(data) {
  if (data.headline) return data.headline;
  if (data['@graph']) {
    for (let i = 0; i < data['@graph'].length; i++) {
      if (data['@graph'][i]['@type'] == 'Article') return data['@graph'][i]['headline'];
    }
  };
  return null;
}


customElements.define('recipe-card-my', RecipeCardMy);
