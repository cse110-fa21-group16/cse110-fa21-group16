// router.js

/** Some hints for this router:
  *   - the functions being passed in should mostly be stored so that
  *     you can call them later when you want to navigate to a page
  *   - you should be pushing to history (only when the 'popstate' event
  *     hasn't fired) so that you can use forward / backward buttons
  *   - You should be using hashes to update the URL (e.g. 
  *     https://somewebsite.com#somePage) - the hash is the #somePage part.
  *     It's accessible via window.location.hash and using them lets you
  *     easily modify the URL without refreshing the page or anything
  */

 export class Router {
    static routes = {};
  
    /**
     * Sets up the home function, the page name should always be 'home', which
     * is why no page name variable is passed in.
     * @param {Function} homeFunc The function to run to set the home route
     *                            visually
     */
    constructor(homeFunc) {
      this['home'] = homeFunc;
    }
  
    /**
     * Adds a page name & function so to the router so that the function
     * can be called later when the page is passed in
     * @param {String} page The name of the page to route to (this is used
     *                      as the page's hash as well in the URL)
     * @param {Function} pageFunc The function to run when the page is called
     */
    addPage(page, pageFunc) {
      /**
       * TODO Part 1 - Step 2
       * Just like in the constructor above, store the pageFunc variable inside this
       * router instance using the 'this' keyword. Substitute 'home' for the variable
       * page
       */
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
      console.log(`navigate() function called, requested page: ${page}`);
      /**
       * TODO - Part 1 - Step 4
       * Now, we are going to call the functions that we stored earlier based on 
       * what page is being requested. For this function:
       * 
       *  1. First, check to see if the function exists, if it doesn't log an error
       *     and return out of the function. 'this' is a global variable, so you can 
       *     check to see if it exists nearly the same way you assigned it
       *  2. Create a variable called hash. If page == 'home' set hash to be an empty
       *     string, if page is anything else set it to be the string '#' + page, e.g.
       *     '#ghostCookies'
       *  3. Next, if statePopped is false and window.location.hash does NOT match the
       *     hash that you just made, use history.pushState() to add the current state
       *     and URL + hash to history
       *  4. Finally, call the stored function for the given page
       */
       
       // 1. First, check to see if the function exists, if it doesn't log an error
       // and return out of the function. 'this' is a global variable, so you can 
       // check to see if it exists nearly the same way you assigned it
      if (this[page] == undefined) {
         console.log("Function does not exist");
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
      console.log(statePopped);
      if (statePopped != true && window.location.hash != hash) {
        let curr_state = {'page': page};
        history.pushState(curr_state, '', window.location.origin+window.location.pathname+hash);
      }
  
      // 4. Finally, call the stored function for the given page
      this[page]();
      
      console.log(history.length);
    }
  }