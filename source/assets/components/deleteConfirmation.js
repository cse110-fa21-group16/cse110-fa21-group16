import { rmMy } from "../scripts/helpCrudFunc.js";

class DeleteConfirmation extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    set data(data) {
        const styleElem = document.createElement("style");
        const styles = `
        * {
            margin: 0;
            padding: 0;
            color: rgb(48, 90, 80);
        }

        article {
            align-items: center;
            display: flex;
            flex-flow: row wrap;
            justify-content:center;
            width: 700px;
            box-shadow: 0px 0px 15px #888888;
            margin: 250px 0px 90px 0px;
        }

        h1 {
            text-align: center;
            width: 100%;
            margin-top: 60px;
        }

        div {
            display: flex;
            flex-flow: row nowrap;
            justify-content:space-between;
            width:100%;
            margin: 100px;
        }


        button {
            background-color: #ffffff;
            border: 1px solid #ccccd8;
            border-radius: 14px;
            color: #305a50;
            cursor: pointer;
            font-size: 20px;
            margin: 0px 50px;
            min-width: 120px;
            padding: 5px 20px;
        }
        
        button:hover {
            border: 1px solid #313131;
            background: darkgreen;
            color: white;
        }
        `;
        styleElem.innerHTML = styles;

        const card = document.createElement("article");

        // warn
        const warn = document.createElement("h1");
        warn.textContent = "Do you want to delete this recipe?";

        // Buttons div 
        const buttons = document.createElement("div");
        const yesButton = document.createElement("button");
        const noButton = document.createElement("button");

        yesButton.textContent = "YES";
        noButton.textContent = "NO";

        // Buttons Attributes 
        yesButton.setAttribute("class", "delete-button");
        yesButton.setAttribute("id", "delete-yes");
        noButton.setAttribute("class", "delete-button");
        noButton.setAttribute("id", "delete-no");

        // Append buttons to buttons div
        buttons.appendChild(yesButton);
        buttons.appendChild(noButton);

        yesButton.addEventListener("click", () => {
            deleteRecipe(data);
        });

        noButton.addEventListener("click", () => {
            backToView(data);
        });

        card.appendChild(warn);
        card.appendChild(buttons);

        this.shadow.appendChild(styleElem);
        this.shadow.appendChild(card);
    }
}

/**
 * Delete recipes and return to main page
 * @returns void
 */
function deleteRecipe(data) {
    rmMy(data);
    $("#delete-page").classList.remove("main-shown");
    $("#delete-page").innerHTML = "";
    loadMain();
    if ($("#my-page").classList.contains("shown")) {
        loadMyRecipe();
    }
    else {
        loadLanding();
    }
}


/**
 * Do not delete recipes and return to view page
 * @returns void
 */
function backToView(data) {
    $("#delete-page").classList.remove("main-shown");
    $("#delete-page").innerHTML = "";
    let editRecipePage = document.createElement("edit-recipe");
    editRecipePage.data = data;
    $("#add-recipe-page").appendChild(editRecipePage);
    $("#add-recipe-page").classList.add("main-shown");
}

customElements.define("delete-confirmation", DeleteConfirmation);