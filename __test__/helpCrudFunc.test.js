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
});
//test2 of addMy. test edge case of addMy Function, checking null case
let data3 = {"id": 7};
let nextMyRecipeID2 = null;
let myRecipeArray2 = null;
test("test2 addMy Function", () => {
    addMy(data3, nextMyRecipeID2, myRecipeArray2);
    expect(localStorage.getItem('nextMyRecipeID')).toBe('1');
    expect(localStorage.getItem('myRecipeArray')).toBe('[{\"id\":0}]')
});

let recipeOne = {"title" : "Chocolate Chip Cookies"};
let recipeTwo = {"title" : "French Toast"};
let recipeThree = {"title" : "Buffalo Wings"};
let recipeFour = {"title" : "Pumpkin Pie"};
let recipeFive = {"title" : "Chicken Alfredo"};

let favRecipeArray1 = [recipeOne, recipeTwo, recipeThree, recipeFour, recipeFive];
//unit test 1 of rmFav function
test("test removing an existing recipe", () => {
    localStorage.setItem("favRecipeArray", JSON.stringify(favRecipeArray1));
    rmFav("Chocolate Chip Cookies", JSON.parse(localStorage.getItem("favRecipeArray")));
    let updatedArr = JSON.parse(localStorage.getItem("favRecipeArray"));
    expect(updatedArr).toEqual(expect.not.stringMatching("Chocolate Chip Cookies"));
    expect(updatedArr.length).toBe(4);
});


let favRecipeArray2 = [recipeOne, recipeTwo, recipeThree, recipeFour, recipeFive];
//unit test 2 of rmFav function
test("test removing a favorite recipe that does not exist", () => {
    localStorage.setItem("favRecipeArray", JSON.stringify(favRecipeArray2));
    rmFav("Chicken Tenders", JSON.parse(localStorage.getItem("favRecipeArray")));
    let updatedArr = JSON.parse(localStorage.getItem("favRecipeArray"));
    //recipe should remain the same
    expect(updatedArr).toEqual(favRecipeArray2);
    expect(updatedArr.length).toBe(5);
});

let favRecipeArray3 = [recipeOne];
//unit test 3 of rmFav function
test("test removing the only favorite recipe", () => {
    localStorage.setItem("favRecipeArray", JSON.stringify(favRecipeArray3));
    rmFav("Chocolate Chip Cookies", JSON.parse(localStorage.getItem("favRecipeArray")));
    let updatedArr = JSON.parse(localStorage.getItem("favRecipeArray"));
    expect(updatedArr.length).toBe(0);
});

let favRecipeArray4 = [recipeOne, recipeTwo];
//unit test 4 of rmFav function
test("test removing a favorite recipe from an array of two favorites", () => {
    localStorage.setItem("favRecipeArray", JSON.stringify(favRecipeArray4));
    rmFav("French Toast", JSON.parse(localStorage.getItem("favRecipeArray")));
    let updatedArr = JSON.parse(localStorage.getItem("favRecipeArray"));
    expect(updatedArr).toEqual(expect.not.stringMatching("French Toast"));
    expect(updatedArr.length).toBe(1);
});

let favRecipeArray5 = [recipeOne, recipeTwo, recipeThree, recipeFour, recipeFive];
let expectedArray = [{"title" : "French Toast"}, {"title" : "Buffalo Wings"}]
//unit test 5 of rmFav function
test("test removing three favorite recipes repeatedly from an array of five favorites", () => {
    localStorage.setItem("favRecipeArray", JSON.stringify(favRecipeArray5));
    rmFav("Chocolate Chip Cookies", JSON.parse(localStorage.getItem("favRecipeArray")));
    rmFav("Chicken Alfredo", JSON.parse(localStorage.getItem("favRecipeArray")));
    rmFav("Pumpkin Pie", JSON.parse(localStorage.getItem("favRecipeArray")));
    let updatedArr = JSON.parse(localStorage.getItem("favRecipeArray"));
    expect(updatedArr).toStrictEqual(expectedArray);
    expect(updatedArr.length).toBe(2);
});

let favRecipeArray6 = [recipeOne, recipeTwo, recipeThree, recipeFour];
//unit test 6 of rmFav function
test("test removing all four favorite recipes", () => {
    localStorage.setItem("favRecipeArray", JSON.stringify(favRecipeArray6));
    rmFav("Chocolate Chip Cookies", JSON.parse(localStorage.getItem("favRecipeArray")));
    rmFav("Buffalo Wings", JSON.parse(localStorage.getItem("favRecipeArray")));
    rmFav("Pumpkin Pie", JSON.parse(localStorage.getItem("favRecipeArray")));
    rmFav("French Toast", JSON.parse(localStorage.getItem("favRecipeArray")));
    let updatedArr = JSON.parse(localStorage.getItem("favRecipeArray"));
    expect(updatedArr.length).toBe(0);
});

//test for updateMy.
let recipe1 = {"id":999, "title":"steam rice"};
let recipe2 = {"id":999, "title":"fried salt"};
let myRecipeArray3 = [recipe1];
test("test updateMy Function", () => {
    updateMy(recipe2, myRecipeArray3);
    expect(localStorage.getItem('myRecipeArray')).toBe("[{\"id\":999,\"title\":\"fried salt\"}]");
});

//test for updateMy, update a none exist recipe.
let recipe3 = {"id":101010, "title":"fried rice"};
test("test updateMy Function, recipe DNE", () => {
    updateMy(recipe3, myRecipeArray3);
    expect(localStorage.getItem('myRecipeArray')).toBe("[{\"id\":999,\"title\":\"fried salt\"}]");
});

//test for updateMy, update a none exist recipe.
let myRecipeArray4 = [];
test("test updateMy Function, empty recipe array", () => {
    updateMy(recipe1, myRecipeArray4);
    expect(localStorage.getItem('myRecipeArray')).toBe("[]");
});