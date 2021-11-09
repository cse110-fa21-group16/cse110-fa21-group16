class EditRecipe extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    set(data) {
        let styling = document.createElement('style');
        let styles =
        `
        /* Delete Confirmation Section Style */
        .delete-confirmation{
            width: 100%;
        }
        .delete-confirmation-container{
            background-color: #FAFAFA;
            border: 1px solid rgb(48, 90, 80);
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            height: 25vh;
            margin: 0 auto;
            width: 35vw;
        }
        
        /* Children of Delete Confirmation */
        .delete-title{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1.75em;
            margin: 2em 0;
            text-align: center;
        }
        
        .delete-buttons{
            display: flex; 
            justify-content: space-around;   
        }
        .delete-button{
            border: 2px solid rgb(48, 90, 80);
            background-color: #FAFAFA;
            color: #000000;
            padding: 1em 3em;
            
            letter-spacing: .1em;
            text-transform: uppercase;
        }
        .delete-button:hover{
            border-color: #FAFAFA;
            background-color: rgb(48, 90, 80);
            color: #FAFAFA;
        }
        `;

        styling.innerHTML = styles;

        // Root Element
        let deleteSection = document.createElement("section")

        // Root Attributes
        deleteSection.setAttribute("class", "delete-confirmation");

        ///////////////////////////////////////////////////////////////////////////////
        ///////////////////////// DELETE CONFIRMATION CONTAINER ///////////////////////
        ///////////////////////////////////////////////////////////////////////////////
        let container = document.createElement("div");

        // Container Attributes 
        container.setAttribute("class", "delete-confirmation-container");

        // Delete Title
        let title = document.createElement("h2");
        title.setAttribute("class", "delete-title");
        title.innerHTML = "Do you want to delete this recipe?";
        // Append Title to container 
        container.appendChild(title);

        // Buttons div 
        let buttons = document.createElement("div");
        let yesButton = document.createElement("button");
        let noButton = document.createElement("button");

        // Buttons Attributes 
        yesButton.setAttribute("type", "button");
        yesButton.setAttribute("class", "delete-button");
        yesButton.setAttribute("id", "delete-yes");
        noButton.setAttribute("type", "button");
        noButton.setAttribute("class", "delete-button");
        noButton.setAttribute("id", "delete-no");

        // Append buttons to buttons div
        buttons.appendChild(yesButton);
        buttons.appendChild(noButton);

        // Append buttons div to container 
        container.appendChild(buttons);


        ///////////////////////////////////////////////////////////////////////////////
        ///////////////////////// APPEND TO SECTION & SHADOW DOM //////////////////////
        ///////////////////////////////////////////////////////////////////////////////
        deleteSection.appendChild(container);

        this.shadowRoot.appendChild(styling);
        this.shadowRoot.appendChild(deleteSection);
    }

}