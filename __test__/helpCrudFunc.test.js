import { checkFav, rmFav, addFav, addMy, updateMy, rmMy } from "../source/assets/scripts/helpCrudFunc.js";

global.localStorage = require("localStorage");
// Example of how to import and use localstorage in jest unit test
localStorage.setItem("testing", "matched");
test("test localStorage", () => {
    expect(localStorage.getItem("testing")).toBe("matched");
})

//test addMy Function, checking if the localStoraged stores data correctly
//nMRID is nextMyRecipeID, mRA is myRecipeArray
let data = {"id": 12345};
let data1 = {"id": 3333};
let data2 = {"id": 2345};
let nMRID = 3;
let mRA = [data1, data2];
test("test addMy Function", () => {
    addMy(data, nMRID, mRA);
    expect(localStorage.getItem('nextMyRecipeID')).toBe('4');
    expect(localStorage.getItem('myRecipeArray')).toBe('[{\"id\":3333},{\"id\":2345},{\"id\":3}]')
})

