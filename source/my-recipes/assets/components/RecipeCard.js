class RecipeCard extends HTMLElement {
  constructor() {
    super();
    // Part 1 Expose - TODO
    this.attachShadow({mode: 'open'});
    // You'll want to attach the shadow DOM here
  }

  set data(data) {
    // This is the CSS that you'll use for your recipe cards
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
    transform: scale(1.02);
  }
  article p {
    color: #305A50;
    font-size: 20px;
    text-align: center;
    position:relative;
    bottom: 20px;
  }
  article > img {
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    height: 180px;
    object-fit: cover;
    width: calc(100% + 32px);
  }

  article input {
    height:20px;
    width:37px;
    position:relative;
    left: 120px;
    bottom:10px;
  }

  article button {
    border: 1px solid darkgreen;
    background-color: #fff;
    border-radius: 14px;
    color: green;
    cursor: pointer;
    font-size: 20px;
    padding: 5px 30px;
  }
  
  article button:hover {
    border: 1px solid #313131;
    color:#c0392b;
  }

  article time {
    color: #305A50;
    font-size: 18px;
    text-align: center;
    position:relative;
    bottom: 20px;
  }

  article:hover .cook{
    background: darkgreen;
    color: white;
  `;
  styleElem.innerHTML = styles;

  const card = document.createElement('article');

  const recipeImg = document.createElement('img');
  recipeImg.src = searchForKey(data, "thumbnail") || searchForKey(data, "thumbnailUrl") || searchForKey(data, "url");
  recipeImg.alt = searchForKey(data, "headline");
  card.appendChild(recipeImg);

  const input = document.createElement("input");
    let liked = true;
    input.classList.add("favorite");
    input.type = "image";
    input.setAttribute("src", "assets/images/heart.png");
    
    input.addEventListener("click", changeHeart);
    
    function changeHeart()
    {
      if (liked)
      {
          input.setAttribute("src", "assets/images/empty_heart.png");
          liked = false;
      }
      else
      {
          input.setAttribute("src", "assets/images/heart.png");
          liked = true;
      }
    }

    card.appendChild(input);

  // p element - title
  const recipeTitle = document.createElement('p');
  recipeTitle.classList.add("title");
  recipeTitle.textContent = searchForKey(data, "headline");
  card.appendChild(recipeTitle);

  //time element
  const time = document.createElement('time');
  const totalTime = searchForKey(data, 'totalTime');
  time.textContent = convertTime(totalTime);
  card.appendChild(time);

  // button element - check recipe
  const checkButton = document.createElement('button');
  checkButton.classList.add("cook");
  checkButton.textContent = "COOK!";
  card.appendChild(checkButton);
  checkButton.addEventListener("click", function (event) {
    showCheck(data);
  });

    this.shadowRoot.appendChild(styleElem);
    this.shadowRoot.appendChild(card);
  }
}


/*********************************************************************/
/***                       Helper Functions:                       ***/
/***          Below are some functions I used when making          ***/
/***     the solution, feel free to use them or not, up to you     ***/
/*********************************************************************/

/**
 * Recursively search for a key nested somewhere inside an object
 * @param {Object} object the object with which you'd like to search
 * @param {String} key the key that you are looking for in the object
 * @returns {*} the value of the found key
 */
function searchForKey(object, key) {
  var value;
  Object.keys(object).some(function (k) {
    if (k === key) {
      value = object[k];
      return true;
    }
    if (object[k] && typeof object[k] === 'object') {
      value = searchForKey(object[k], key);
      return value !== undefined;
    }
  });
  return value;
}

/**
 * Extract the URL from the given recipe schema JSON object
 * @param {Object} data Raw recipe JSON to find the URL of
 * @returns {String} If found, it returns the URL as a string, otherwise null
 */
function getUrl(data) {
  if (data.url) return data.url;
  if (data['@graph']) {
    for (let i = 0; i < data['@graph'].length; i++) {
      if (data['@graph'][i]['@type'] == 'Article') return data['@graph'][i]['@id'];
    }
  };
  return null;
}

/**
 * Similar to getUrl(), this function extracts the organizations name from the
 * schema JSON object. It's not in a standard location so this function helps.
 * @param {Object} data Raw recipe JSON to find the org string of
 * @returns {String} If found, it retuns the name of the org as a string, otherwise null
 */
function getOrganization(data) {
  if (data.publisher?.name) return data.publisher?.name;
  if (data['@graph']) {
    for (let i = 0; i < data['@graph'].length; i++) {
      if (data['@graph'][i]['@type'] == 'Organization') {
        return data['@graph'][i].name;
      }
    }
  };
  return null;
}

/**
 * Converts ISO 8061 time strings to regular english time strings.
 * Not perfect but it works for this lab
 * @param {String} time time string to format
 * @return {String} formatted time string
 */
function convertTime(time) {
  let timeStr = '';

  // Remove the 'PT'
  time = time.slice(2);

  let timeArr = time.split('');
  if (time.includes('H')) {
    for (let i = 0; i < timeArr.length; i++) {
      if (timeArr[i] == 'H') return `${timeStr} hr`;
      timeStr += timeArr[i];
    }
  } else {
    for (let i = 0; i < timeArr.length; i++) {
      if (timeArr[i] == 'M') return `${timeStr} min`;
      timeStr += timeArr[i];
    }
  }

  return '';
}

/**
 * Takes in a list of ingredients raw from imported data and returns a neatly
 * formatted comma separated list.
 * @param {Array} ingredientArr The raw unprocessed array of ingredients from the
 *                              imported data
 * @return {String} the string comma separate list of ingredients from the array
 */
function createIngredientList(ingredientArr) {
  let finalIngredientList = '';

  /**
   * Removes the quantity and measurement from an ingredient string.
   * This isn't perfect, it makes the assumption that there will always be a quantity
   * (sometimes there isn't, so this would fail on something like '2 apples' or 'Some olive oil').
   * For the purposes of this lab you don't have to worry about those cases.
   * @param {String} ingredient the raw ingredient string you'd like to process
   * @return {String} the ingredient without the measurement & quantity 
   * (e.g. '1 cup flour' returns 'flour')
   */
  function _removeQtyAndMeasurement(ingredient) {
    return ingredient.split(' ').splice(2).join(' ');
  }

  ingredientArr.forEach(ingredient => {
    ingredient = _removeQtyAndMeasurement(ingredient);
    finalIngredientList += `${ingredient}, `;
  });

  // The .slice(0,-2) here gets ride of the extra ', ' added to the last ingredient
  return finalIngredientList.slice(0, -2);
}



// Define the Class so you can use it as a custom element.
// This is critical, leave this here and don't touch it
customElements.define('recipe-card', RecipeCard);
