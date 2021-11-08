class EditRecipe extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
}

// define the 'edit-recipe' element using this class
customElements.define('edit-recipe', EditRecipe);