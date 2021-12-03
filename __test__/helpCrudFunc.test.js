import { checkFav, rmFav, addFav, addMy, updateMy, rmMy } from "../source/assets/scripts/helpCrudFunc.js";

// Example of how to import and use localstorage in jest unit test
const localStorage = require("localStorage");
localStorage.setItem("testing", "matched");
test("test localStorage", () => {
    expect(localStorage.getItem("testing")).toBe("matched");
})