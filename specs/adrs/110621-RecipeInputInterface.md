# Decision on which approach to take for recipe input implementation (Updated)

* Status: accepted
* Deciders: Daniel, Mohammed , Hao, Tai, Han, Edwin, Gavin 
* Date: 2021-11-07

## Context and Problem Statement

We were debating on whether to give users more freedom when adding recipes by just providing them 2 textboxes and let them format however they want, or let users input their recipes in a more standardized way.

## Decision Drivers <!-- optional -->

* Giving users freedom may allow the app. to be more flexible and easier to use
* Giving users a standardized format will make the recipes look more consistent

## Considered Options

* 2 textboxes for instructions and ingredients
* Structured list of steps and bullet points


## Decision Outcome

Chosen option: textboxes for each instruction and ingredient because even though this approach is a bit more complicated, it gives a better standard and structure to each recipe.

### Positive Consequences <!-- optional -->

* Recipes will look nicer
* Recipes will look more standardized and structured
* Data can be retrieved easier

### Negative Consequences <!-- optional -->

* May be harder to style and implement

## Pros and Cons of the Options <!-- optional -->

### 2 textboxes for instructions and ingredients

* Good, because more freedom for users
* Good, because simple to implement
* Bad, because introduce inconsistency
* Bad, because way too simple

### List of steps and bullet points

* Good, because recipes will be consistent in terms of formatting
* Good, because information are structured so filtering will be easier
* Bad, because may require more time to implement
* Bad, because may introduce other rabbitholes