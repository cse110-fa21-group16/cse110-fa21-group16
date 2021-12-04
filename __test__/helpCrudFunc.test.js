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

//test for updateMy, update empty recipe array.
let myRecipeArray4 = [];
test("test updateMy Function, empty recipe array", () => {
    updateMy(recipe1, myRecipeArray4);
    expect(localStorage.getItem('myRecipeArray')).toBe("[]");
});

//variables representing ids
let r1 = {"id": 1};
let r2 = {"id": 2};
let r3 = {"id": 3};
let r4 = {"id": 4};
let r5 = {"id": 5};

//creates  an array of 5 elements
let rmMyRecipeArray1 = [r1,r2,r3,r4,r5];
//first test removes 1 item from the array
test("test1 rmMy function", () => {
    rmMy(r1, rmMyRecipeArray1);
    expect(localStorage.getItem('myRecipeArray')).toBe('[{\"id\":2},{\"id\":3},{\"id\":4},{\"id\":5}]')
    //expected output should be this [2,3,4,5]
});

//creates an array of 1 element
let rmMyRecipeArray2 = [r1];
//second test to remove 1 item from 1 item array (leaves empty array)
test("test2 rmMy function", () => {
    rmMy(r1, rmMyRecipeArray2);
    expect(localStorage.getItem('myRecipeArray')).toBe('[]')
    //expected output should be an empty array
});

//creates an array of 2 elements
let rmMyRecipeArray3 = [r1,r5];
//third test removes 1 item from the array of 2 elements
test("test3 rmMy function", () => {
    rmMy(r1, rmMyRecipeArray3);
    expect(localStorage.getItem('myRecipeArray')).toBe('[{\"id\":5}]')
    //expected output should be [5]
});

//creates an array of 3 elements
let rmMyRecipeArray4 = [r1,r2,r5];
//fourth test removes 1 item from the array of 3 elements
test("test4 rmMy function", () => {
    rmMy(r2, rmMyRecipeArray4);
    expect(localStorage.getItem('myRecipeArray')).toBe('[{\"id\":1},{\"id\":5}]')
    //expected output [1,5]
});

//creates an array of 4 elements
let rmMyRecipeArray5 = [r1,r2,r3,r5];
//fifth test removes 1 item from the array of 4 elements
test("test5 rmMy function", () => {
    rmMy(r3, rmMyRecipeArray5);
    expect(localStorage.getItem('myRecipeArray')).toBe('[{\"id\":1},{\"id\":2},{\"id\":5}]')
    //expected output [1,2,5]
});

//creates an array of 2 elements
let rmMyRecipeArray6 = [r1,r4];
//sixth test removes last element from teh array of 2 elements
test("test6 rmMy function", () => {
    rmMy(r4, rmMyRecipeArray6);
    expect(localStorage.getItem('myRecipeArray')).toBe('[{\"id\":1}]')
    //expected output [1]
});

//creates an array of 0 elements
let rmMyRecipeArray7 = [];
//seventh test removes element from empty array
test("test7 rmMy function", () => {
    rmMy(r1, rmMyRecipeArray7);
    expect(localStorage.getItem('myRecipeArray')).toBe('[]')
    //expected output []
});

