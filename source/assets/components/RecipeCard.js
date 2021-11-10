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

      *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .favorite
      {
        height: 30px;
        width: 50px;
      }
      
      .images {
        position: relative;
        top: 0;
        left: 0;
      }    
      .card {
        overflow: hidden;
        box-shadow: 0px 2px 20px gray;  
        border-radius: 0.4rem;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        transition: transform 200ms ease-in;
        height: 540px;
      }
      .card__image {
        position: relative;
        height: 12rem;
        width: 100%;
        object-fit: cover;
      }

      .favorite {
        position: absolute;
        top: 5px;
        right: 5px;
      }
      
      .card__title {
        // padding: 1rem;
        display: -webkit-box;
        height: 80px;
        line-height: 25px;
        overflow: hidden;
        --wekbit-line-clamp: 2;
        --webkit-box-orient: vertical;
        
      }

      .card__organization{
        color: black !important;
      }

      .card__description {
        height: 35px;
        line-height: 16px;
        padding-top: 4px;
        overflow: hidden;
        --wekbit-line-clamp: 2;
        position: relative;
        top: 10px;

      }
      
       div.rating {
        align-items: center;
        column-gap: 5px;
        display: flex;
        position:relative;
        top: 5px; 
      }

      div.rating > img {
        height: auto;
        display: inline-block;
        object-fit: scale-down;
        width: 78px;
      }

      time{
        position: relative;
        top: 8px;
      }
      .card__btn {
        padding: 1rem;
        font-family: inherit;
        font-weight: bold;
        font-size: 1rem;
        margin: 1rem;
        border: 2px solid darkgreen;
        background: transparent;
        color: green;
        border-radius: 0.4rem;
      }

      .ingred > img{
        position:relative;
        top: 20px; 
        right 10px;  
        height: 30px; 
        width: 30px; 
      }

      .ingred > span{
        position:relative;
        top:14px;
      }
      p.ingredients {
        position:relative;
        top: 20px;
        height: 32px;
        line-height: 16px;
        padding-top: 2px;
        overflow: hidden;
      }

      .card:hover {
        transform: scale(1.02);
      }
    
      .card:hover .card__btn {
        background: darkgreen;
        color: white;
      } 
    `;
      styleElem.innerHTML = styles;
  
      // Here's the root element that you'll want to attach all of your other elements to
      const card = document.createElement("article");

      //first div of card
      const reciCard = document.createElement("div");
      reciCard.classList.add("card");

      //body of the card
      const card_body = document.createElement("div");
      card_body.classList.add("card__body");

      /* ************************
                Image 
         ************************
      */
      const images = document.createElement("div");
      images.classList.add("images");

      const img = document.createElement("img");
      img.classList.add("card__image");
      const imgSrc = searchForKey(data, "thumbnail") || searchForKey(data, "thumbnailUrl") || searchForKey(data, "url"); 
      const title = searchForKey(data, "headline");
    
      img.setAttribute("src", imgSrc);
      img.setAttribute("alt", title);

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

      images.appendChild(img);
      images.appendChild(input);

      card_body.appendChild(images);

    
      /* ************************
                Title 
         ************************
      */
      const titl = document.createElement("h2");
      titl.classList.add("card__title");
      titl.textContent = title;
      card_body.appendChild(titl);

       /* ************************
                Organization 
         ************************
      */
       const organization = document.createElement("p");
       organization.classList.add("card__organization");
       const org = getOrganization(data) || searchForKey(data, "organization");
       organization.textContent = org;
       card_body.append(organization);
       
       /* ************************
                Rating 
         ************************
      */
        const ratingV = searchForKey(data, "aggregateRating")?.ratingValue; 
        const ratingC = searchForKey(data, "aggregateRating")?.ratingCount; 

        const rating = document.createElement('div');
        rating.classList.add('rating');
        const ratingScore = document.createElement('span');
        rating.appendChild(ratingScore);
    
        if (ratingV) { //if the recipe has a review
          const ratingCount = document.createElement('span');
          const ratingImg = document.createElement('img');
    
          const ratingImgScore = Math.round(ratingV); //we round to the nearest integer in order to use one of the star svg's given
    
          ratingImg.setAttribute('src', `assets/images/${ratingImgScore}-star.svg`); //set the new start svg
    
          ratingScore.textContent = Math.round(ratingV*100)/100; //we do this in order to evade having such a big decimal number (rounds to 2 decimal points)
          ratingCount.textContent = `(${ratingC})`;  //we set the amount of reviews (count)
    
          rating.appendChild(ratingImg);
          rating.appendChild(ratingCount);
        } else {
          ratingScore.textContent = "There are currently no reviews"; //if there is no ratingV then the recipe has no reviews
        }
        card_body.appendChild(rating)

        /* ************************
                Time 
         **************************
      */
        const time = document.createElement('time');
        const totalTime = searchForKey(data, 'totalTime');
        time.textContent = convertTime(totalTime);
        card_body.appendChild(time);



       /* ************************
                Description 
         *************************
      */
      const info = searchForKey(data, "description");
      const description = document.createElement("p");
      description.classList.add("card__description");
      description.textContent = info;
      card_body.appendChild(description);

       /* ************************
                Ingredient Title 
         **************************
      */
      const ingTitle = document.createElement("div");
      ingTitle.classList.add("ingred");

      const ingImg = document.createElement("img");
      ingImg.setAttribute("src", "assets/images/ingredients.png");
      ingImg.setAttribute("alt", "Ingredients Image");

      ingTitle.appendChild(ingImg);

      const ti = document.createElement("span");
      ti.textContent = "Ingredients:";
      ingTitle.appendChild(ti);

      card_body.appendChild(ingTitle);

    //   <div class="ingred">
    //    <img src="assets/images/ingredients.png" alt="ing">
    //    <span>Ingedents:</span>
    // </div>

      /* ************************
                Ingredients 
         ************************
      */
       const ingredients = document.createElement('p');
       ingredients.classList.add('ingredients');
       const ingredientsList = searchForKey(data, 'recipeIngredient');
       ingredients.textContent = createIngredientList(ingredientsList);
       card_body.appendChild(ingredients);

       /* ************************
                Button 
         ************************
      */
      const button = document.createElement("button");
      button.classList.add("card__btn");
      button.textContent = "View Recipe";

      reciCard.appendChild(card_body);
      reciCard.appendChild(button);


      card.appendChild(reciCard);
      



  
    //   const img = document.createElement('img');
    //   // console.log(data);
    //   const imgSrc = searchForKey(data, "thumbnail") || searchForKey(data, "thumbnailUrl") || searchForKey(data, "url"); //get the thumbnail url
    //   const title = searchForKey(data, "headline");  //might change 
    //   const organization = getOrganization(data) || searchForKey(data, "organization"); //get the organization name
    //   const linkToArticle = getUrl(data) || searchForKey(data, 'mainEntityOfPage'); //get the url to the article)
    //   const ratingV = searchForKey(data, "aggregateRating")?.ratingValue; //get the rating value of the recipe
    //   const ratingC = searchForKey(data, "aggregateRating")?.ratingCount; //get the rating count of the recipe
  
    //   img.setAttribute("src", imgSrc);  //store the source of the image for the recipe
    //   img.setAttribute("alt", title); //store the alternative text 
    //   card.appendChild(img); //append to 'article'
  
    //   const titl = document.createElement('p'); //create the title element
    //   titl.classList.add('title'); //add it to the class title 
    //   const link = document.createElement('a'); //create the link element
    //   link.setAttribute("href", linkToArticle); //set its link to the link of the article
    //   link.textContent = title; //change the content of the link to its headline 
    //   titl.appendChild(link); 
    //   card.appendChild(titl);
      
    //   const org = document.createElement('p');
    //   org.classList.add("organization");
    //   org.textContent = organization; //change the organization name
    //   card.appendChild(org); 
  
  
    //   const rating = document.createElement('div');
    //   rating.classList.add('rating');
    //   const ratingScore = document.createElement('span');
    //   rating.appendChild(ratingScore);
  
    //   if (ratingV) { //if the recipe has a review
    //     const ratingCount = document.createElement('span');
    //     const ratingImg = document.createElement('img');
  
    //     const ratingImgScore = Math.round(ratingV); //we round to the nearest integer in order to use one of the star svg's given
  
    //     ratingImg.setAttribute('src', `assets/images/icons/${ratingImgScore}-star.svg`); //set the new start svg
  
    //     ratingScore.textContent = Math.round(ratingV*100)/100; //we do this in order to evade having such a big decimal number (rounds to 2 decimal points)
    //     ratingCount.textContent = `(${ratingC})`;  //we set the amount of reviews (count)
  
    //     rating.appendChild(ratingImg);
    //     rating.appendChild(ratingCount);
    //   } else {
    //     ratingScore.textContent = "There are currently no reviews"; //if there is no ratingV then the recipe has no reviews
    //   }
    //   card.appendChild(rating)
  
    //   const time = document.createElement('time');
    //   const totalTime = searchForKey(data, 'totalTime');
    //   time.textContent = convertTime(totalTime);
    //   card.appendChild(time);
  
    //   const ingredients = document.createElement('p');
    //   ingredients.classList.add('ingredients');
    //   const ingredientsList = searchForKey(data, 'recipeIngredient');
    //   ingredients.textContent = createIngredientList(ingredientsList);
    //   card.appendChild(ingredients);
  
      this.shadowRoot.appendChild(styleElem);
      this.shadowRoot.appendChild(card);

      // Some functions that will be helpful here:
      //    document.createElement()
      //    document.querySelector()
      //    element.classList.add()
      //    element.setAttribute()
      //    element.appendChild()
      //    & All of the helper functions below
  
      // Make sure to attach your root element and styles to the shadow DOM you
      // created in the constructor()
  
      // Part 1 Expose - TODO


      
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

