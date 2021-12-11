# Onboarding

## Cloning the project
You can either fork the repository on GitHub or clone it by using `git clone` in your terminal.

## Running the project
After you have cloned the project, perform the dependencies installation using `npm install` inside the repository folder. In order to run the project locally using VSCode, follow the steps below:
- You must must first start up a live server inside the repository folder using VSCode live server extension (make sure your VSCode has live server extension), then go on to our live site at https://zeste.netlify.app/ and inspect the localStorage. 
- Inside the our **published site's** localStorage, copy/clone the `feaRecipeArray` key (and its value) to your **local site's** localStorage.
- Reload your **local site**.

## Testing project
After you have installed the depenencies, you can then test the project locally by using `npm run test` inside the repository folder. Here are the current tests:
- `addRecipe.test.js`: E2E (End-to-end) tests for adding recipes using Jest Puppeteer.
- `feaFav.test.js`: E2E tests for favoriting recipes using Jest Puppeteer.
- `helpCrudFunc.test.js`: Unit tests for CRUD related functions (functions that directly interact with localStorage).
- `helpGetDataFunc.test.js`: Unit tests for functions that directly interact with the data returned by our API.
- `ui.test.js`: Currently a template file for any other E2E tests.

You can either add new test files or add more tests to `ui.test.js`.
