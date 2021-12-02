// router.js
// Credit: Lab 7 skeleton, Tai's implementation of skeleton

/**
 * This is the Router class which contains routing functions for each page/component.
 * This is where the navigation functions are stored and occured.
 * @class
 */
 export class Router {
    static routes = {};
  
    /**
     * Sets up the home function, the page name should always be 'home', which
     * is why no page name variable is passed in.
     * @contstructor
     * @param {Function} homeFunc The function to run to set the home route
     *                            visually
     */
    constructor(homeFunc) {
      this["home"] = homeFunc;
    }
  
    /**
     * Adds a page name & function so to the router so that the function
     * can be called later when the page is passed in
     * @param {String} page The name of the page to route to (this is used
     *                      as the page's hash as well in the URL)
     * @param {Function} pageFunc The function to run when the page is called
     */
    addPage(page, pageFunc) {
      this[page] = pageFunc;
    }
  
    /**
     * Changes the page visually to the page that has been passed in. statePopped
     * is used to avoid pushing a new history state on back/forward button presses
     * @param {String} page The name of the page to route to
     * @param {Boolean} statePopped True if this function is being called from a
     *                              'popstate' event instead of a normal card click
     */
    navigate(page, statePopped) {
      // console.log(`navigate() function called, requested page: ${page}`);  
       // 1. First, check to see if the function exists, if it doesn't log an error
       // and return out of the function. 'this' is a global variable, so you can 
       // check to see if it exists nearly the same way you assigned it
      if (this[page] == undefined) {
        //  console.log("Function does not exist");
         this["home"]();
         return;
      }
  
      // 2. Create a variable called hash. If page == 'home' set hash to be an empty
      // string, if page is anything else set it to be the string '#' + page, e.g.
      // '#ghostCookies'
      let hash;
      if (page == "home") {
        hash = '';
      } else {
        hash = "#" + page;
      }
      
      // console.log("window.location.hash: " + window.location.hash);
      // console.log("hash: " + hash);
      
      // 3. Next, if statePopped is false and window.location.hash does NOT match the
      // hash that you just made, use history.pushState() to add the current state
      // and URL + hash to history
      // console.log(statePopped);
      if (statePopped !== true && window.location.hash !== hash) {
        let curr_state = {"page": page};
        history.pushState(curr_state, "", window.location.origin+window.location.pathname+hash);
      }
  
      // 4. Finally, call the stored function for the given page
      this[page]();
    }
  }