# Decision on whether to keep using random API or specific API

* Status: accepted
* Deciders: Tai, Gavin, Kangming
* Date: 2021-11-21


## Context and Problem Statement

We realized that random API on spoonacular does not provide nutrition information

## Decision Drivers <!-- optional -->

* We want to show users nutrition information of food
* We want better API calls that would give more information

## Considered Options

* Random search on spoonacular API
* Specific/bulk search on spoonacular API

## Decision Outcome

Chosen option: Specific/bulk search on spoonacular API, because it contains a lot more information about nutrition facts which are what we need for the app.

### Positive Consequences <!-- optional -->

* Users can now look at nutrients and other things in selected food

### Negative Consequences <!-- optional -->

* This type of call is pretty expensive in terms of point per call

## Pros and Cons of the Options <!-- optional -->

### Random search on spoonacular API

* Good, because it provides a lot of recipes info. in 1 search
* Good, because it is cheap (less point per call)
* Bad, because it doesn't have an option for nutrition information

### Specific/bulk search on spoonacular API

* Good, because it provides exactly what we need
* Bad, because more expensive in terms of point per call