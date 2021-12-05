# Decision on changing "Featured Recipes of the Day" to "Featured Recipes" to make it less misleading

* Status: accepted
* Deciders: Tai, Edwin
* Date: 2021-12-05


## Context and Problem Statement

We realized that the title "Featured Recipes of the Day" might be misleading since we are not fetching new featured recipes every day

## Decision Drivers 

* We don't want the user to be mislead
* Implementing a feature where we fetch every 24 hours might have issues for "old" AND "new" users ultimately leading to the app being down for some users on a given day

## Considered Options

* Changing "Featured Recipes of the Day" to "Featured Recipes"
* Increase the number of featured recipes fetched
* Randomizing the featured recipes fetched

## Decision Outcome

Changing the title "Featued Recipes of the Day" to "Featured Recipes" to make it less misleading for the user and avoid future conflicts with "old" and "new" users

### Positive Consequences <!-- optional -->

* Users won't have to deal with the app going down on some day
* Users won't have to wait 24 hours thinking new featured recipes will be fetched

### Negative Consequences <!-- optional -->

* Being able to fetch new featured recipes every day allowed for a more dynamic app

## Pros and Cons of the Options <!-- optional -->

### Changing "Featured Recipes of the Day" to "Featured Recipes"


* Good, it makes it less misleading for the user
* Good, it avoids making the user believe and potentially make them wait 24 hours for new featured recipes
* Bad, because having such feature could bring the attention to new users

### Increase the number of featured recipes fetched

* Good, because this will provide the users with more variety of recipes and more recipes to explore and try
* Bad, because increasing the number of features recipes fetched will make it more expensive in terms of points per call

### Randomizing the featured recipes fetched

* Good, because this will provide the users with a wider variety of recipes
* Bad, because it might be too expensive to randomize fetched recipes every time the user wants to refresh the featured recipes
