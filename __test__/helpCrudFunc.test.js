import { checkFav, rmFav, addFav, addMy, updateMy, rmMy } from "../source/assets/scripts/helpCrudFunc.js";

global.localStorage = require("localStorage");
// Example of how to import and use localstorage in jest unit test
localStorage.setItem("testing", "matched");
test("test localStorage", () => {
    expect(localStorage.getItem("testing")).toBe("matched");
})

//test1 of addMy. test addMy Function, checking if the localStoraged stores data correctly
let data = {"id": 12345};
let data1 = {"id": 3333};
let data2 = {"id": 2345};
let nextMyRecipeID = 3;
let myRecipeArray = [data1, data2];
test("test1 addMy Function", () => {
    addMy(data, nextMyRecipeID, myRecipeArray);
    expect(localStorage.getItem('nextMyRecipeID')).toBe('4');
    expect(localStorage.getItem('myRecipeArray')).toBe('[{\"id\":3333},{\"id\":2345},{\"id\":3}]')
})
//test2 of addMy. test edge case of addMy Function, checking null case
let data3 = {"id": 7};
let nextMyRecipeID2 = null;
let myRecipeArray2 = null;
test("test2 addMy Function", () => {
    addMy(data3, nextMyRecipeID2, myRecipeArray2);
    expect(localStorage.getItem('nextMyRecipeID')).toBe('1');
    expect(localStorage.getItem('myRecipeArray')).toBe('[{\"id\":0}]')
})
