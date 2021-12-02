// nutrition_facts.test.js
import { calculateServing, getTitle, getTime, getSteps, getFeaturedSteps, getStepsArray } from "../source/assets/scripts/helpGetDataFunc.js";
//const functions = require('../source/assets/components/NutritionPage.js');

/* Tests CalculateServing
*  This function calculates the nutrition facts of some number servings based on the provided 
*  base amount of 1 serving and the desired number of servings.*/

test('test nutrition fact conversion, serving size 1', () => {
    expect(calculateServing(858.18, 1)).toBe(858.18);
});

test('test nutrition fact conversion, serving size 1', () => {
    expect(calculateServing(33.91, 1)).toBe(33.91);
});

test('test nutrition fact conversion, serving size 2', () => {
    expect(calculateServing(858.18, 2)).toBe(1716.36);
});

test('test nutrition fact conversion, serving size 2', () => {
    expect(calculateServing(33.91, 2)).toBe(67.82);
});

test('test nutrition fact conversion, serving size 5', () => {
    expect(calculateServing(144.41, 5)).toBe(722.05); //cholest
});

test('test nutrition fact conversion, serving size 5', () => {
    expect(calculateServing(6.47, 5)).toBe(32.35); //fiber
});

test('test nutrition fact conversion, serving size 13', () => {
    expect(calculateServing(450.89, 13)).toBe(5861.57); //sodium
});

test('test nutrition fact conversion, serving size 13', () => {
    expect(calculateServing(9.94, 13)).toBe(129.22); //iron
});

//invalid input of 0, should result in nutrition facts for serving size 1
test('test invalid nutrition fact conversion, serving size 0', () => {
    expect(calculateServing(554.32, 0)).toBe(554.32); //cholest
});

//invalid input of negative number, should result in nutrition facts for serving size 1
test('test invalid nutrition fact conversion, serving size -3', () => {
    expect(calculateServing(83.44, -3)).toBe(83.44); //cholest
});

/* sampleRecipe data */
let data = {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 3,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 45,
    "spoonacularScore": 17,
    "healthScore": 1,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 30.18,
    "extendedIngredients": [
      {
        "id": 20081,
        "aisle": "Baking",
        "image": "flour.png",
        "consistency": "solid",
        "name": "all purpose flour",
        "nameClean": "wheat flour",
        "original": "150g All Purpose Flour, sifted",
        "originalString": "150g All Purpose Flour, sifted",
        "originalName": "All Purpose Flour, sifted",
        "amount": 150,
        "unit": "g",
        "meta": [
          "sifted"
        ],
        "metaInformation": [
          "sifted"
        ],
        "measures": {
          "us": {
            "amount": 5.291,
            "unitShort": "oz",
            "unitLong": "ounces"
          },
          "metric": {
            "amount": 150,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 9003,
        "aisle": "Produce",
        "image": "apple.jpg",
        "consistency": "solid",
        "name": "apples",
        "nameClean": "apple",
        "original": "4 Large Apples",
        "originalString": "4 Large Apples",
        "originalName": "Large Apples",
        "amount": 4,
        "unit": "",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 4,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 4,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 19334,
        "aisle": "Baking",
        "image": "light-brown-sugar.jpg",
        "consistency": "solid",
        "name": "brown sugar",
        "nameClean": "golden brown sugar",
        "original": "1/3 cup Brown Sugar",
        "originalString": "1/3 cup Brown Sugar",
        "originalName": "Brown Sugar",
        "amount": 0.3333333333333333,
        "unit": "cup",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.333,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 78.863,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 2010,
        "aisle": "Spices and Seasonings",
        "image": "cinnamon.jpg",
        "consistency": "solid",
        "name": "cinnamon",
        "nameClean": "cinnamon",
        "original": "1 Tbsp Cinnamon",
        "originalString": "1 Tbsp Cinnamon",
        "originalName": "Cinnamon",
        "amount": 1,
        "unit": "Tbsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          },
          "metric": {
            "amount": 1,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          }
        }
      },
      {
        "id": 1123,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "egg.png",
        "consistency": "solid",
        "name": "eggs",
        "nameClean": "egg",
        "original": "2 Eggs, lightly beaten",
        "originalString": "2 Eggs, lightly beaten",
        "originalName": "Eggs, lightly beaten",
        "amount": 2,
        "unit": "",
        "meta": [
          "lightly beaten"
        ],
        "metaInformation": [
          "lightly beaten"
        ],
        "measures": {
          "us": {
            "amount": 2,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 2,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 19335,
        "aisle": "Baking",
        "image": "sugar-in-bowl.png",
        "consistency": "solid",
        "name": "granulated sugar",
        "nameClean": "sugar",
        "original": "2 Tbsp Granulated Sugar",
        "originalString": "2 Tbsp Granulated Sugar",
        "originalName": "Granulated Sugar",
        "amount": 2,
        "unit": "Tbsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 2,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 9156,
        "aisle": "Produce",
        "image": "zest-lemon.jpg",
        "consistency": "solid",
        "name": "lemon zest",
        "nameClean": "lemon peel",
        "original": "1/2 Tsp Lemon Zest",
        "originalString": "1/2 Tsp Lemon Zest",
        "originalName": "Lemon Zest",
        "amount": 0.5,
        "unit": "Tsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 1077,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "milk.png",
        "consistency": "liquid",
        "name": "milk",
        "nameClean": "milk",
        "original": "250ml Milk",
        "originalString": "250ml Milk",
        "originalName": "Milk",
        "amount": 250,
        "unit": "ml",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.057,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 250,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 4582,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "vegetable-oil.jpg",
        "consistency": "liquid",
        "name": "oil",
        "nameClean": "cooking oil",
        "original": "Oil for frying",
        "originalString": "Oil for frying",
        "originalName": "Oil for frying",
        "amount": 16,
        "unit": "servings",
        "meta": [
          "for frying"
        ],
        "metaInformation": [
          "for frying"
        ],
        "measures": {
          "us": {
            "amount": 16,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 16,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 2047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consistency": "solid",
        "name": "salt",
        "nameClean": "salt",
        "original": "1 pinch salt",
        "originalString": "1 pinch salt",
        "originalName": "salt",
        "amount": 1,
        "unit": "pinch",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1,
            "unitShort": "pinch",
            "unitLong": "pinch"
          },
          "metric": {
            "amount": 1,
            "unitShort": "pinch",
            "unitLong": "pinch"
          }
        }
      },
      {
        "id": 1145,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "butter-sliced.jpg",
        "consistency": "solid",
        "name": "unsalted butter",
        "nameClean": "unsalted butter",
        "original": "1 Tbsp Melted Unsalted Butter",
        "originalString": "1 Tbsp Melted Unsalted Butter",
        "originalName": "Melted Unsalted Butter",
        "amount": 1,
        "unit": "Tbsp",
        "meta": [
          "unsalted",
          "melted"
        ],
        "metaInformation": [
          "unsalted",
          "melted"
        ],
        "measures": {
          "us": {
            "amount": 1,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          },
          "metric": {
            "amount": 1,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          }
        }
      }
    ],
    "id": 639487,
    "title": "Cinnamon Sugar Fried Apples",
    "readyInMinutes": 60,
    "servings": 16,
    "sourceUrl": "http://www.foodista.com/recipe/TNR4865M/cinnamon-sugar-fried-apples",
    "image": "https://spoonacular.com/recipeImages/639487-556x370.jpg",
    "imageType": "jpg",
    "nutrition": {
      "nutrients": [
        {
          "name": "Calories",
          "title": "Calories",
          "amount": 118.38,
          "unit": "kcal",
          "percentOfDailyNeeds": 5.92
        },
        {
          "name": "Fat",
          "title": "Fat",
          "amount": 3.33,
          "unit": "g",
          "percentOfDailyNeeds": 5.12
        },
        {
          "name": "Saturated Fat",
          "title": "Saturated Fat",
          "amount": 1.05,
          "unit": "g",
          "percentOfDailyNeeds": 6.57
        },
        {
          "name": "Carbohydrates",
          "title": "Carbohydrates",
          "amount": 20.63,
          "unit": "g",
          "percentOfDailyNeeds": 6.88
        },
        {
          "name": "Net Carbohydrates",
          "title": "Net Carbohydrates",
          "amount": 19.02,
          "unit": "g",
          "percentOfDailyNeeds": 6.91
        },
        {
          "name": "Sugar",
          "title": "Sugar",
          "amount": 11.52,
          "unit": "g",
          "percentOfDailyNeeds": 12.8
        },
        {
          "name": "Cholesterol",
          "title": "Cholesterol",
          "amount": 23.93,
          "unit": "mg",
          "percentOfDailyNeeds": 7.98
        },
        {
          "name": "Sodium",
          "title": "Sodium",
          "amount": 19.04,
          "unit": "mg",
          "percentOfDailyNeeds": 0.83
        },
        {
          "name": "Protein",
          "title": "Protein",
          "amount": 2.3,
          "unit": "g",
          "percentOfDailyNeeds": 4.61
        },
        {
          "name": "Manganese",
          "title": "Manganese",
          "amount": 0.17,
          "unit": "mg",
          "percentOfDailyNeeds": 8.51
        },
        {
          "name": "Selenium",
          "title": "Selenium",
          "amount": 5.53,
          "unit": "µg",
          "percentOfDailyNeeds": 7.9
        },
        {
          "name": "Vitamin B2",
          "title": "Vitamin B2",
          "amount": 0.11,
          "unit": "mg",
          "percentOfDailyNeeds": 6.5
        },
        {
          "name": "Fiber",
          "title": "Fiber",
          "amount": 1.61,
          "unit": "g",
          "percentOfDailyNeeds": 6.44
        },
        {
          "name": "Vitamin B1",
          "title": "Vitamin B1",
          "amount": 0.09,
          "unit": "mg",
          "percentOfDailyNeeds": 6.06
        },
        {
          "name": "Folate",
          "title": "Folate",
          "amount": 22,
          "unit": "µg",
          "percentOfDailyNeeds": 5.5
        },
        {
          "name": "Phosphorus",
          "title": "Phosphorus",
          "amount": 39.86,
          "unit": "mg",
          "percentOfDailyNeeds": 3.99
        },
        {
          "name": "Iron",
          "title": "Iron",
          "amount": 0.67,
          "unit": "mg",
          "percentOfDailyNeeds": 3.69
        },
        {
          "name": "Calcium",
          "title": "Calcium",
          "amount": 33.87,
          "unit": "mg",
          "percentOfDailyNeeds": 3.39
        },
        {
          "name": "Vitamin B3",
          "title": "Vitamin B3",
          "amount": 0.63,
          "unit": "mg",
          "percentOfDailyNeeds": 3.13
        },
        {
          "name": "Vitamin E",
          "title": "Vitamin E",
          "amount": 0.43,
          "unit": "mg",
          "percentOfDailyNeeds": 2.88
        },
        {
          "name": "Potassium",
          "title": "Potassium",
          "amount": 95.47,
          "unit": "mg",
          "percentOfDailyNeeds": 2.73
        },
        {
          "name": "Vitamin C",
          "title": "Vitamin C",
          "amount": 2.19,
          "unit": "mg",
          "percentOfDailyNeeds": 2.66
        },
        {
          "name": "Vitamin K",
          "title": "Vitamin K",
          "amount": 2.3,
          "unit": "µg",
          "percentOfDailyNeeds": 2.2
        },
        {
          "name": "Vitamin B5",
          "title": "Vitamin B5",
          "amount": 0.22,
          "unit": "mg",
          "percentOfDailyNeeds": 2.2
        },
        {
          "name": "Vitamin D",
          "title": "Vitamin D",
          "amount": 0.33,
          "unit": "µg",
          "percentOfDailyNeeds": 2.18
        },
        {
          "name": "Vitamin A",
          "title": "Vitamin A",
          "amount": 103.23,
          "unit": "IU",
          "percentOfDailyNeeds": 2.06
        },
        {
          "name": "Vitamin B6",
          "title": "Vitamin B6",
          "amount": 0.04,
          "unit": "mg",
          "percentOfDailyNeeds": 2.03
        },
        {
          "name": "Vitamin B12",
          "title": "Vitamin B12",
          "amount": 0.12,
          "unit": "µg",
          "percentOfDailyNeeds": 2.01
        },
        {
          "name": "Copper",
          "title": "Copper",
          "amount": 0.04,
          "unit": "mg",
          "percentOfDailyNeeds": 1.89
        },
        {
          "name": "Magnesium",
          "title": "Magnesium",
          "amount": 7.29,
          "unit": "mg",
          "percentOfDailyNeeds": 1.82
        },
        {
          "name": "Zinc",
          "title": "Zinc",
          "amount": 0.22,
          "unit": "mg",
          "percentOfDailyNeeds": 1.49
        }
      ],
      "properties": [
        {
          "name": "Glycemic Index",
          "title": "Glycemic Index",
          "amount": 13.76,
          "unit": ""
        },
        {
          "name": "Glycemic Load",
          "title": "Glycemic Load",
          "amount": 8.18,
          "unit": ""
        }
      ],
      "flavonoids": [
        {
          "name": "Cyanidin",
          "title": "Cyanidin",
          "amount": 0.71,
          "unit": "mg"
        },
        {
          "name": "Petunidin",
          "title": "Petunidin",
          "amount": 0,
          "unit": "mg"
        },
        {
          "name": "Delphinidin",
          "title": "Delphinidin",
          "amount": 0,
          "unit": "mg"
        },
        {
          "name": "Malvidin",
          "title": "Malvidin",
          "amount": 0,
          "unit": "mg"
        },
        {
          "name": "Pelargonidin",
          "title": "Pelargonidin",
          "amount": 0,
          "unit": "mg"
        },
        {
          "name": "Peonidin",
          "title": "Peonidin",
          "amount": 0.01,
          "unit": "mg"
        },
        {
          "name": "Catechin",
          "title": "Catechin",
          "amount": 0.59,
          "unit": "mg"
        },
        {
          "name": "Epigallocatechin",
          "title": "Epigallocatechin",
          "amount": 0.12,
          "unit": "mg"
        },
        {
          "name": "Epicatechin",
          "title": "Epicatechin",
          "amount": 3.43,
          "unit": "mg"
        },
        {
          "name": "Epicatechin 3-gallate",
          "title": "Epicatechin 3-gallate",
          "amount": 0,
          "unit": "mg"
        },
        {
          "name": "Epigallocatechin 3-gallate",
          "title": "Epigallocatechin 3-gallate",
          "amount": 0.09,
          "unit": "mg"
        },
        {
          "name": "Theaflavin",
          "title": "Theaflavin",
          "amount": 0,
          "unit": ""
        },
        {
          "name": "Thearubigins",
          "title": "Thearubigins",
          "amount": 0,
          "unit": ""
        },
        {
          "name": "Eriodictyol",
          "title": "Eriodictyol",
          "amount": 0,
          "unit": ""
        },
        {
          "name": "Hesperetin",
          "title": "Hesperetin",
          "amount": 0,
          "unit": "mg"
        },
        {
          "name": "Naringenin",
          "title": "Naringenin",
          "amount": 0,
          "unit": "mg"
        },
        {
          "name": "Apigenin",
          "title": "Apigenin",
          "amount": 0,
          "unit": "mg"
        },
        {
          "name": "Luteolin",
          "title": "Luteolin",
          "amount": 0.05,
          "unit": "mg"
        },
        {
          "name": "Isorhamnetin",
          "title": "Isorhamnetin",
          "amount": 0,
          "unit": ""
        },
        {
          "name": "Kaempferol",
          "title": "Kaempferol",
          "amount": 0.06,
          "unit": "mg"
        },
        {
          "name": "Myricetin",
          "title": "Myricetin",
          "amount": 0,
          "unit": "mg"
        },
        {
          "name": "Quercetin",
          "title": "Quercetin",
          "amount": 1.82,
          "unit": "mg"
        },
        {
          "name": "Theaflavin-3,3'-digallate",
          "title": "Theaflavin-3,3'-digallate",
          "amount": 0,
          "unit": ""
        },
        {
          "name": "Theaflavin-3'-gallate",
          "title": "Theaflavin-3'-gallate",
          "amount": 0,
          "unit": ""
        },
        {
          "name": "Theaflavin-3-gallate",
          "title": "Theaflavin-3-gallate",
          "amount": 0,
          "unit": ""
        },
        {
          "name": "Gallocatechin",
          "title": "Gallocatechin",
          "amount": 0,
          "unit": "mg"
        }
      ],
      "ingredients": [
        {
          "id": 20081,
          "name": "all purpose flour",
          "amount": 9.38,
          "unit": "g",
          "nutrients": [
            {
              "title": "Cholesterol",
              "name": "Cholesterol",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin K",
              "name": "Vitamin K",
              "amount": 0.03,
              "unit": "µg"
            },
            {
              "title": "Calories",
              "name": "Calories",
              "amount": 34.13,
              "unit": "kcal"
            },
            {
              "title": "Caffeine",
              "name": "Caffeine",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Zinc",
              "name": "Zinc",
              "amount": 0.07,
              "unit": "mg"
            },
            {
              "title": "Vitamin B12",
              "name": "Vitamin B12",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Choline",
              "name": "Choline",
              "amount": 0.98,
              "unit": "mg"
            },
            {
              "title": "Saturated Fat",
              "name": "Saturated Fat",
              "amount": 0.01,
              "unit": "g"
            },
            {
              "title": "Vitamin B3",
              "name": "Vitamin B3",
              "amount": 0.55,
              "unit": "mg"
            },
            {
              "title": "Sugar",
              "name": "Sugar",
              "amount": 0.03,
              "unit": "g"
            },
            {
              "title": "Manganese",
              "name": "Manganese",
              "amount": 0.06,
              "unit": "mg"
            },
            {
              "title": "Vitamin C",
              "name": "Vitamin C",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Protein",
              "name": "Protein",
              "amount": 0.97,
              "unit": "g"
            },
            {
              "title": "Fiber",
              "name": "Fiber",
              "amount": 0.25,
              "unit": "g"
            },
            {
              "title": "Net Carbohydrates",
              "name": "Net Carbohydrates",
              "amount": 6.9,
              "unit": "g"
            },
            {
              "title": "Folic Acid",
              "name": "Folic Acid",
              "amount": 14.44,
              "unit": "µg"
            },
            {
              "title": "Iron",
              "name": "Iron",
              "amount": 0.44,
              "unit": "mg"
            },
            {
              "title": "Magnesium",
              "name": "Magnesium",
              "amount": 2.06,
              "unit": "mg"
            },
            {
              "title": "Carbohydrates",
              "name": "Carbohydrates",
              "amount": 7.15,
              "unit": "g"
            },
            {
              "title": "Folate",
              "name": "Folate",
              "amount": 17.16,
              "unit": "µg"
            },
            {
              "title": "Vitamin B2",
              "name": "Vitamin B2",
              "amount": 0.05,
              "unit": "mg"
            },
            {
              "title": "Alcohol",
              "name": "Alcohol",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Calcium",
              "name": "Calcium",
              "amount": 1.41,
              "unit": "mg"
            },
            {
              "title": "Fat",
              "name": "Fat",
              "amount": 0.09,
              "unit": "g"
            },
            {
              "title": "Vitamin A",
              "name": "Vitamin A",
              "amount": 0,
              "unit": "IU"
            },
            {
              "title": "Vitamin B6",
              "name": "Vitamin B6",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Mono Unsaturated Fat",
              "name": "Mono Unsaturated Fat",
              "amount": 0.01,
              "unit": "g"
            },
            {
              "title": "Poly Unsaturated Fat",
              "name": "Poly Unsaturated Fat",
              "amount": 0.04,
              "unit": "g"
            },
            {
              "title": "Vitamin E",
              "name": "Vitamin E",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Potassium",
              "name": "Potassium",
              "amount": 10.03,
              "unit": "mg"
            },
            {
              "title": "Selenium",
              "name": "Selenium",
              "amount": 3.18,
              "unit": "µg"
            },
            {
              "title": "Sodium",
              "name": "Sodium",
              "amount": 0.19,
              "unit": "mg"
            },
            {
              "title": "Copper",
              "name": "Copper",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Vitamin D",
              "name": "Vitamin D",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Vitamin B5",
              "name": "Vitamin B5",
              "amount": 0.04,
              "unit": "mg"
            },
            {
              "title": "Phosphorus",
              "name": "Phosphorus",
              "amount": 10.13,
              "unit": "mg"
            },
            {
              "title": "Vitamin B1",
              "name": "Vitamin B1",
              "amount": 0.07,
              "unit": "mg"
            }
          ]
        },
        {
          "id": 9003,
          "name": "apples",
          "amount": 0.25,
          "unit": "",
          "nutrients": [
            {
              "title": "Cholesterol",
              "name": "Cholesterol",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin K",
              "name": "Vitamin K",
              "amount": 1,
              "unit": "µg"
            },
            {
              "title": "Calories",
              "name": "Calories",
              "amount": 23.66,
              "unit": "kcal"
            },
            {
              "title": "Caffeine",
              "name": "Caffeine",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Zinc",
              "name": "Zinc",
              "amount": 0.02,
              "unit": "mg"
            },
            {
              "title": "Vitamin B12",
              "name": "Vitamin B12",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Choline",
              "name": "Choline",
              "amount": 1.55,
              "unit": "mg"
            },
            {
              "title": "Saturated Fat",
              "name": "Saturated Fat",
              "amount": 0.01,
              "unit": "g"
            },
            {
              "title": "Vitamin B3",
              "name": "Vitamin B3",
              "amount": 0.04,
              "unit": "mg"
            },
            {
              "title": "Sugar",
              "name": "Sugar",
              "amount": 4.73,
              "unit": "g"
            },
            {
              "title": "Manganese",
              "name": "Manganese",
              "amount": 0.02,
              "unit": "mg"
            },
            {
              "title": "Fluoride",
              "name": "Fluoride",
              "amount": 1.5,
              "unit": "mg"
            },
            {
              "title": "Vitamin C",
              "name": "Vitamin C",
              "amount": 2.09,
              "unit": "mg"
            },
            {
              "title": "Protein",
              "name": "Protein",
              "amount": 0.12,
              "unit": "g"
            },
            {
              "title": "Fiber",
              "name": "Fiber",
              "amount": 1.09,
              "unit": "g"
            },
            {
              "title": "Net Carbohydrates",
              "name": "Net Carbohydrates",
              "amount": 5.19,
              "unit": "g"
            },
            {
              "title": "Folic Acid",
              "name": "Folic Acid",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Iron",
              "name": "Iron",
              "amount": 0.05,
              "unit": "mg"
            },
            {
              "title": "Magnesium",
              "name": "Magnesium",
              "amount": 2.28,
              "unit": "mg"
            },
            {
              "title": "Carbohydrates",
              "name": "Carbohydrates",
              "amount": 6.28,
              "unit": "g"
            },
            {
              "title": "Folate",
              "name": "Folate",
              "amount": 1.37,
              "unit": "µg"
            },
            {
              "title": "Vitamin B2",
              "name": "Vitamin B2",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Alcohol",
              "name": "Alcohol",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Calcium",
              "name": "Calcium",
              "amount": 2.73,
              "unit": "mg"
            },
            {
              "title": "Fat",
              "name": "Fat",
              "amount": 0.08,
              "unit": "g"
            },
            {
              "title": "Vitamin A",
              "name": "Vitamin A",
              "amount": 24.57,
              "unit": "IU"
            },
            {
              "title": "Vitamin B6",
              "name": "Vitamin B6",
              "amount": 0.02,
              "unit": "mg"
            },
            {
              "title": "Mono Unsaturated Fat",
              "name": "Mono Unsaturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Poly Unsaturated Fat",
              "name": "Poly Unsaturated Fat",
              "amount": 0.02,
              "unit": "g"
            },
            {
              "title": "Vitamin E",
              "name": "Vitamin E",
              "amount": 0.08,
              "unit": "mg"
            },
            {
              "title": "Potassium",
              "name": "Potassium",
              "amount": 48.69,
              "unit": "mg"
            },
            {
              "title": "Selenium",
              "name": "Selenium",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Sodium",
              "name": "Sodium",
              "amount": 0.46,
              "unit": "mg"
            },
            {
              "title": "Copper",
              "name": "Copper",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Vitamin D",
              "name": "Vitamin D",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Vitamin B5",
              "name": "Vitamin B5",
              "amount": 0.03,
              "unit": "mg"
            },
            {
              "title": "Phosphorus",
              "name": "Phosphorus",
              "amount": 5.01,
              "unit": "mg"
            },
            {
              "title": "Vitamin B1",
              "name": "Vitamin B1",
              "amount": 0.01,
              "unit": "mg"
            }
          ]
        },
        {
          "id": 19334,
          "name": "brown sugar",
          "amount": 0.02,
          "unit": "cup",
          "nutrients": [
            {
              "title": "Cholesterol",
              "name": "Cholesterol",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin K",
              "name": "Vitamin K",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Calories",
              "name": "Calories",
              "amount": 17.42,
              "unit": "kcal"
            },
            {
              "title": "Caffeine",
              "name": "Caffeine",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Zinc",
              "name": "Zinc",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin B12",
              "name": "Vitamin B12",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Choline",
              "name": "Choline",
              "amount": 0.11,
              "unit": "mg"
            },
            {
              "title": "Saturated Fat",
              "name": "Saturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin B3",
              "name": "Vitamin B3",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Sugar",
              "name": "Sugar",
              "amount": 4.45,
              "unit": "g"
            },
            {
              "title": "Manganese",
              "name": "Manganese",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin C",
              "name": "Vitamin C",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Protein",
              "name": "Protein",
              "amount": 0.01,
              "unit": "g"
            },
            {
              "title": "Fiber",
              "name": "Fiber",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Net Carbohydrates",
              "name": "Net Carbohydrates",
              "amount": 4.5,
              "unit": "g"
            },
            {
              "title": "Folic Acid",
              "name": "Folic Acid",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Iron",
              "name": "Iron",
              "amount": 0.03,
              "unit": "mg"
            },
            {
              "title": "Magnesium",
              "name": "Magnesium",
              "amount": 0.41,
              "unit": "mg"
            },
            {
              "title": "Carbohydrates",
              "name": "Carbohydrates",
              "amount": 4.5,
              "unit": "g"
            },
            {
              "title": "Folate",
              "name": "Folate",
              "amount": 0.05,
              "unit": "µg"
            },
            {
              "title": "Vitamin B2",
              "name": "Vitamin B2",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Alcohol",
              "name": "Alcohol",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Calcium",
              "name": "Calcium",
              "amount": 3.8,
              "unit": "mg"
            },
            {
              "title": "Fat",
              "name": "Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin A",
              "name": "Vitamin A",
              "amount": 0,
              "unit": "IU"
            },
            {
              "title": "Vitamin B6",
              "name": "Vitamin B6",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Mono Unsaturated Fat",
              "name": "Mono Unsaturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Poly Unsaturated Fat",
              "name": "Poly Unsaturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin E",
              "name": "Vitamin E",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Potassium",
              "name": "Potassium",
              "amount": 6.1,
              "unit": "mg"
            },
            {
              "title": "Selenium",
              "name": "Selenium",
              "amount": 0.05,
              "unit": "µg"
            },
            {
              "title": "Sodium",
              "name": "Sodium",
              "amount": 1.28,
              "unit": "mg"
            },
            {
              "title": "Copper",
              "name": "Copper",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin D",
              "name": "Vitamin D",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Vitamin B5",
              "name": "Vitamin B5",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Phosphorus",
              "name": "Phosphorus",
              "amount": 0.18,
              "unit": "mg"
            },
            {
              "title": "Vitamin B1",
              "name": "Vitamin B1",
              "amount": 0,
              "unit": "mg"
            }
          ]
        },
        {
          "id": 2010,
          "name": "cinnamon",
          "amount": 0.06,
          "unit": "Tbsp",
          "nutrients": [
            {
              "title": "Cholesterol",
              "name": "Cholesterol",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin K",
              "name": "Vitamin K",
              "amount": 0.15,
              "unit": "µg"
            },
            {
              "title": "Calories",
              "name": "Calories",
              "amount": 1.2,
              "unit": "kcal"
            },
            {
              "title": "Caffeine",
              "name": "Caffeine",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Zinc",
              "name": "Zinc",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Vitamin B12",
              "name": "Vitamin B12",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Choline",
              "name": "Choline",
              "amount": 0.05,
              "unit": "mg"
            },
            {
              "title": "Saturated Fat",
              "name": "Saturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin B3",
              "name": "Vitamin B3",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Sugar",
              "name": "Sugar",
              "amount": 0.01,
              "unit": "g"
            },
            {
              "title": "Manganese",
              "name": "Manganese",
              "amount": 0.09,
              "unit": "mg"
            },
            {
              "title": "Vitamin C",
              "name": "Vitamin C",
              "amount": 0.02,
              "unit": "mg"
            },
            {
              "title": "Protein",
              "name": "Protein",
              "amount": 0.02,
              "unit": "g"
            },
            {
              "title": "Fiber",
              "name": "Fiber",
              "amount": 0.26,
              "unit": "g"
            },
            {
              "title": "Net Carbohydrates",
              "name": "Net Carbohydrates",
              "amount": 0.13,
              "unit": "g"
            },
            {
              "title": "Folic Acid",
              "name": "Folic Acid",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Iron",
              "name": "Iron",
              "amount": 0.04,
              "unit": "mg"
            },
            {
              "title": "Magnesium",
              "name": "Magnesium",
              "amount": 0.29,
              "unit": "mg"
            },
            {
              "title": "Carbohydrates",
              "name": "Carbohydrates",
              "amount": 0.39,
              "unit": "g"
            },
            {
              "title": "Folate",
              "name": "Folate",
              "amount": 0.03,
              "unit": "µg"
            },
            {
              "title": "Vitamin B2",
              "name": "Vitamin B2",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Alcohol",
              "name": "Alcohol",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Trans Fat",
              "name": "Trans Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Calcium",
              "name": "Calcium",
              "amount": 4.88,
              "unit": "mg"
            },
            {
              "title": "Fat",
              "name": "Fat",
              "amount": 0.01,
              "unit": "g"
            },
            {
              "title": "Vitamin A",
              "name": "Vitamin A",
              "amount": 1.44,
              "unit": "IU"
            },
            {
              "title": "Vitamin B6",
              "name": "Vitamin B6",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Mono Unsaturated Fat",
              "name": "Mono Unsaturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Poly Unsaturated Fat",
              "name": "Poly Unsaturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin E",
              "name": "Vitamin E",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Potassium",
              "name": "Potassium",
              "amount": 2.1,
              "unit": "mg"
            },
            {
              "title": "Selenium",
              "name": "Selenium",
              "amount": 0.02,
              "unit": "µg"
            },
            {
              "title": "Sodium",
              "name": "Sodium",
              "amount": 0.05,
              "unit": "mg"
            },
            {
              "title": "Copper",
              "name": "Copper",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin D",
              "name": "Vitamin D",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Vitamin B5",
              "name": "Vitamin B5",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Phosphorus",
              "name": "Phosphorus",
              "amount": 0.31,
              "unit": "mg"
            },
            {
              "title": "Vitamin B1",
              "name": "Vitamin B1",
              "amount": 0,
              "unit": "mg"
            }
          ]
        },
        {
          "id": 1123,
          "name": "eggs",
          "amount": 0.13,
          "unit": "",
          "nutrients": [
            {
              "title": "Cholesterol",
              "name": "Cholesterol",
              "amount": 20.46,
              "unit": "mg"
            },
            {
              "title": "Vitamin K",
              "name": "Vitamin K",
              "amount": 0.02,
              "unit": "µg"
            },
            {
              "title": "Calories",
              "name": "Calories",
              "amount": 7.87,
              "unit": "kcal"
            },
            {
              "title": "Caffeine",
              "name": "Caffeine",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Zinc",
              "name": "Zinc",
              "amount": 0.07,
              "unit": "mg"
            },
            {
              "title": "Vitamin B12",
              "name": "Vitamin B12",
              "amount": 0.05,
              "unit": "µg"
            },
            {
              "title": "Choline",
              "name": "Choline",
              "amount": 16.16,
              "unit": "mg"
            },
            {
              "title": "Saturated Fat",
              "name": "Saturated Fat",
              "amount": 0.17,
              "unit": "g"
            },
            {
              "title": "Vitamin B3",
              "name": "Vitamin B3",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Sugar",
              "name": "Sugar",
              "amount": 0.02,
              "unit": "g"
            },
            {
              "title": "Manganese",
              "name": "Manganese",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Fluoride",
              "name": "Fluoride",
              "amount": 0.06,
              "unit": "mg"
            },
            {
              "title": "Vitamin C",
              "name": "Vitamin C",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Protein",
              "name": "Protein",
              "amount": 0.69,
              "unit": "g"
            },
            {
              "title": "Fiber",
              "name": "Fiber",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Net Carbohydrates",
              "name": "Net Carbohydrates",
              "amount": 0.04,
              "unit": "g"
            },
            {
              "title": "Folic Acid",
              "name": "Folic Acid",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Iron",
              "name": "Iron",
              "amount": 0.1,
              "unit": "mg"
            },
            {
              "title": "Magnesium",
              "name": "Magnesium",
              "amount": 0.66,
              "unit": "mg"
            },
            {
              "title": "Carbohydrates",
              "name": "Carbohydrates",
              "amount": 0.04,
              "unit": "g"
            },
            {
              "title": "Folate",
              "name": "Folate",
              "amount": 2.59,
              "unit": "µg"
            },
            {
              "title": "Vitamin B2",
              "name": "Vitamin B2",
              "amount": 0.03,
              "unit": "mg"
            },
            {
              "title": "Alcohol",
              "name": "Alcohol",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Trans Fat",
              "name": "Trans Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Calcium",
              "name": "Calcium",
              "amount": 3.08,
              "unit": "mg"
            },
            {
              "title": "Fat",
              "name": "Fat",
              "amount": 0.52,
              "unit": "g"
            },
            {
              "title": "Vitamin A",
              "name": "Vitamin A",
              "amount": 29.7,
              "unit": "IU"
            },
            {
              "title": "Vitamin B6",
              "name": "Vitamin B6",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Mono Unsaturated Fat",
              "name": "Mono Unsaturated Fat",
              "amount": 0.2,
              "unit": "g"
            },
            {
              "title": "Poly Unsaturated Fat",
              "name": "Poly Unsaturated Fat",
              "amount": 0.11,
              "unit": "g"
            },
            {
              "title": "Vitamin E",
              "name": "Vitamin E",
              "amount": 0.06,
              "unit": "mg"
            },
            {
              "title": "Potassium",
              "name": "Potassium",
              "amount": 7.59,
              "unit": "mg"
            },
            {
              "title": "Selenium",
              "name": "Selenium",
              "amount": 1.69,
              "unit": "µg"
            },
            {
              "title": "Sodium",
              "name": "Sodium",
              "amount": 7.81,
              "unit": "mg"
            },
            {
              "title": "Copper",
              "name": "Copper",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin D",
              "name": "Vitamin D",
              "amount": 0.11,
              "unit": "µg"
            },
            {
              "title": "Vitamin B5",
              "name": "Vitamin B5",
              "amount": 0.08,
              "unit": "mg"
            },
            {
              "title": "Phosphorus",
              "name": "Phosphorus",
              "amount": 10.89,
              "unit": "mg"
            },
            {
              "title": "Vitamin B1",
              "name": "Vitamin B1",
              "amount": 0,
              "unit": "mg"
            }
          ]
        },
        {
          "id": 19335,
          "name": "granulated sugar",
          "amount": 0.13,
          "unit": "Tbsp",
          "nutrients": [
            {
              "title": "Cholesterol",
              "name": "Cholesterol",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin K",
              "name": "Vitamin K",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Calories",
              "name": "Calories",
              "amount": 5.81,
              "unit": "kcal"
            },
            {
              "title": "Caffeine",
              "name": "Caffeine",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Zinc",
              "name": "Zinc",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin B12",
              "name": "Vitamin B12",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Choline",
              "name": "Choline",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Saturated Fat",
              "name": "Saturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin B3",
              "name": "Vitamin B3",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Sugar",
              "name": "Sugar",
              "amount": 1.5,
              "unit": "g"
            },
            {
              "title": "Manganese",
              "name": "Manganese",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Fluoride",
              "name": "Fluoride",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin C",
              "name": "Vitamin C",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Protein",
              "name": "Protein",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Fiber",
              "name": "Fiber",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Net Carbohydrates",
              "name": "Net Carbohydrates",
              "amount": 1.5,
              "unit": "g"
            },
            {
              "title": "Folic Acid",
              "name": "Folic Acid",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Iron",
              "name": "Iron",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Magnesium",
              "name": "Magnesium",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Carbohydrates",
              "name": "Carbohydrates",
              "amount": 1.5,
              "unit": "g"
            },
            {
              "title": "Folate",
              "name": "Folate",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Vitamin B2",
              "name": "Vitamin B2",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Alcohol",
              "name": "Alcohol",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Calcium",
              "name": "Calcium",
              "amount": 0.02,
              "unit": "mg"
            },
            {
              "title": "Fat",
              "name": "Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin A",
              "name": "Vitamin A",
              "amount": 0,
              "unit": "IU"
            },
            {
              "title": "Vitamin B6",
              "name": "Vitamin B6",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Mono Unsaturated Fat",
              "name": "Mono Unsaturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Poly Unsaturated Fat",
              "name": "Poly Unsaturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin E",
              "name": "Vitamin E",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Potassium",
              "name": "Potassium",
              "amount": 0.03,
              "unit": "mg"
            },
            {
              "title": "Selenium",
              "name": "Selenium",
              "amount": 0.01,
              "unit": "µg"
            },
            {
              "title": "Sodium",
              "name": "Sodium",
              "amount": 0.02,
              "unit": "mg"
            },
            {
              "title": "Copper",
              "name": "Copper",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin D",
              "name": "Vitamin D",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Vitamin B5",
              "name": "Vitamin B5",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Phosphorus",
              "name": "Phosphorus",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin B1",
              "name": "Vitamin B1",
              "amount": 0,
              "unit": "mg"
            }
          ]
        },
        {
          "id": 9156,
          "name": "lemon zest",
          "amount": 0.03,
          "unit": "Tsp",
          "nutrients": [
            {
              "title": "Cholesterol",
              "name": "Cholesterol",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin K",
              "name": "Vitamin K",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Calories",
              "name": "Calories",
              "amount": 0.03,
              "unit": "kcal"
            },
            {
              "title": "Caffeine",
              "name": "Caffeine",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Zinc",
              "name": "Zinc",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin B12",
              "name": "Vitamin B12",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Choline",
              "name": "Choline",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Saturated Fat",
              "name": "Saturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin B3",
              "name": "Vitamin B3",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Sugar",
              "name": "Sugar",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin C",
              "name": "Vitamin C",
              "amount": 0.08,
              "unit": "mg"
            },
            {
              "title": "Protein",
              "name": "Protein",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Fiber",
              "name": "Fiber",
              "amount": 0.01,
              "unit": "g"
            },
            {
              "title": "Net Carbohydrates",
              "name": "Net Carbohydrates",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Folic Acid",
              "name": "Folic Acid",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Iron",
              "name": "Iron",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Magnesium",
              "name": "Magnesium",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Carbohydrates",
              "name": "Carbohydrates",
              "amount": 0.01,
              "unit": "g"
            },
            {
              "title": "Folate",
              "name": "Folate",
              "amount": 0.01,
              "unit": "µg"
            },
            {
              "title": "Vitamin B2",
              "name": "Vitamin B2",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Alcohol",
              "name": "Alcohol",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Calcium",
              "name": "Calcium",
              "amount": 0.08,
              "unit": "mg"
            },
            {
              "title": "Fat",
              "name": "Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin A",
              "name": "Vitamin A",
              "amount": 0.03,
              "unit": "IU"
            },
            {
              "title": "Vitamin B6",
              "name": "Vitamin B6",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Mono Unsaturated Fat",
              "name": "Mono Unsaturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Poly Unsaturated Fat",
              "name": "Poly Unsaturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin E",
              "name": "Vitamin E",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Potassium",
              "name": "Potassium",
              "amount": 0.1,
              "unit": "mg"
            },
            {
              "title": "Selenium",
              "name": "Selenium",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Sodium",
              "name": "Sodium",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Copper",
              "name": "Copper",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin D",
              "name": "Vitamin D",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Vitamin B5",
              "name": "Vitamin B5",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Phosphorus",
              "name": "Phosphorus",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Vitamin B1",
              "name": "Vitamin B1",
              "amount": 0,
              "unit": "mg"
            }
          ]
        },
        {
          "id": 1077,
          "name": "milk",
          "amount": 15.63,
          "unit": "ml",
          "nutrients": [
            {
              "title": "Cholesterol",
              "name": "Cholesterol",
              "amount": 1.56,
              "unit": "mg"
            },
            {
              "title": "Vitamin K",
              "name": "Vitamin K",
              "amount": 0.05,
              "unit": "µg"
            },
            {
              "title": "Calories",
              "name": "Calories",
              "amount": 9.53,
              "unit": "kcal"
            },
            {
              "title": "Caffeine",
              "name": "Caffeine",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Zinc",
              "name": "Zinc",
              "amount": 0.06,
              "unit": "mg"
            },
            {
              "title": "Vitamin B12",
              "name": "Vitamin B12",
              "amount": 0.07,
              "unit": "µg"
            },
            {
              "title": "Choline",
              "name": "Choline",
              "amount": 2.23,
              "unit": "mg"
            },
            {
              "title": "Saturated Fat",
              "name": "Saturated Fat",
              "amount": 0.29,
              "unit": "g"
            },
            {
              "title": "Vitamin B3",
              "name": "Vitamin B3",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Sugar",
              "name": "Sugar",
              "amount": 0.79,
              "unit": "g"
            },
            {
              "title": "Manganese",
              "name": "Manganese",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin C",
              "name": "Vitamin C",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Protein",
              "name": "Protein",
              "amount": 0.49,
              "unit": "g"
            },
            {
              "title": "Fiber",
              "name": "Fiber",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Net Carbohydrates",
              "name": "Net Carbohydrates",
              "amount": 0.75,
              "unit": "g"
            },
            {
              "title": "Folic Acid",
              "name": "Folic Acid",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Iron",
              "name": "Iron",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Magnesium",
              "name": "Magnesium",
              "amount": 1.56,
              "unit": "mg"
            },
            {
              "title": "Carbohydrates",
              "name": "Carbohydrates",
              "amount": 0.75,
              "unit": "g"
            },
            {
              "title": "Folate",
              "name": "Folate",
              "amount": 0.78,
              "unit": "µg"
            },
            {
              "title": "Vitamin B2",
              "name": "Vitamin B2",
              "amount": 0.03,
              "unit": "mg"
            },
            {
              "title": "Alcohol",
              "name": "Alcohol",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Calcium",
              "name": "Calcium",
              "amount": 17.66,
              "unit": "mg"
            },
            {
              "title": "Fat",
              "name": "Fat",
              "amount": 0.51,
              "unit": "g"
            },
            {
              "title": "Vitamin A",
              "name": "Vitamin A",
              "amount": 25.31,
              "unit": "IU"
            },
            {
              "title": "Vitamin B6",
              "name": "Vitamin B6",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Mono Unsaturated Fat",
              "name": "Mono Unsaturated Fat",
              "amount": 0.13,
              "unit": "g"
            },
            {
              "title": "Poly Unsaturated Fat",
              "name": "Poly Unsaturated Fat",
              "amount": 0.03,
              "unit": "g"
            },
            {
              "title": "Vitamin E",
              "name": "Vitamin E",
              "amount": 0.01,
              "unit": "mg"
            },
            {
              "title": "Potassium",
              "name": "Potassium",
              "amount": 20.63,
              "unit": "mg"
            },
            {
              "title": "Selenium",
              "name": "Selenium",
              "amount": 0.58,
              "unit": "µg"
            },
            {
              "title": "Sodium",
              "name": "Sodium",
              "amount": 6.72,
              "unit": "mg"
            },
            {
              "title": "Copper",
              "name": "Copper",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin D",
              "name": "Vitamin D",
              "amount": 0.2,
              "unit": "µg"
            },
            {
              "title": "Vitamin B5",
              "name": "Vitamin B5",
              "amount": 0.06,
              "unit": "mg"
            },
            {
              "title": "Phosphorus",
              "name": "Phosphorus",
              "amount": 13.13,
              "unit": "mg"
            },
            {
              "title": "Vitamin B1",
              "name": "Vitamin B1",
              "amount": 0.01,
              "unit": "mg"
            }
          ]
        },
        {
          "id": 4582,
          "name": "oil",
          "amount": 1,
          "unit": "servings",
          "nutrients": [
            {
              "title": "Cholesterol",
              "name": "Cholesterol",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin K",
              "name": "Vitamin K",
              "amount": 9.98,
              "unit": "µg"
            },
            {
              "title": "Calories",
              "name": "Calories",
              "amount": 123.76,
              "unit": "kcal"
            },
            {
              "title": "Caffeine",
              "name": "Caffeine",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Zinc",
              "name": "Zinc",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin B12",
              "name": "Vitamin B12",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Choline",
              "name": "Choline",
              "amount": 0.03,
              "unit": "mg"
            },
            {
              "title": "Saturated Fat",
              "name": "Saturated Fat",
              "amount": 1.03,
              "unit": "g"
            },
            {
              "title": "Vitamin B3",
              "name": "Vitamin B3",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Sugar",
              "name": "Sugar",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Manganese",
              "name": "Manganese",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin C",
              "name": "Vitamin C",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Protein",
              "name": "Protein",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Fiber",
              "name": "Fiber",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Net Carbohydrates",
              "name": "Net Carbohydrates",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Folic Acid",
              "name": "Folic Acid",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Iron",
              "name": "Iron",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Magnesium",
              "name": "Magnesium",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Carbohydrates",
              "name": "Carbohydrates",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Folate",
              "name": "Folate",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Vitamin B2",
              "name": "Vitamin B2",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Alcohol",
              "name": "Alcohol",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Trans Fat",
              "name": "Trans Fat",
              "amount": 0.06,
              "unit": "g"
            },
            {
              "title": "Calcium",
              "name": "Calcium",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Fat",
              "name": "Fat",
              "amount": 14,
              "unit": "g"
            },
            {
              "title": "Vitamin A",
              "name": "Vitamin A",
              "amount": 0,
              "unit": "IU"
            },
            {
              "title": "Vitamin B6",
              "name": "Vitamin B6",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Mono Unsaturated Fat",
              "name": "Mono Unsaturated Fat",
              "amount": 8.86,
              "unit": "g"
            },
            {
              "title": "Poly Unsaturated Fat",
              "name": "Poly Unsaturated Fat",
              "amount": 3.94,
              "unit": "g"
            },
            {
              "title": "Vitamin E",
              "name": "Vitamin E",
              "amount": 2.44,
              "unit": "mg"
            },
            {
              "title": "Potassium",
              "name": "Potassium",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Selenium",
              "name": "Selenium",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Sodium",
              "name": "Sodium",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Copper",
              "name": "Copper",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin D",
              "name": "Vitamin D",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Vitamin B5",
              "name": "Vitamin B5",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Phosphorus",
              "name": "Phosphorus",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin B1",
              "name": "Vitamin B1",
              "amount": 0,
              "unit": "mg"
            }
          ]
        },
        {
          "id": 2047,
          "name": "salt",
          "amount": 0.06,
          "unit": "pinch",
          "nutrients": [
            {
              "title": "Cholesterol",
              "name": "Cholesterol",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin K",
              "name": "Vitamin K",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Calories",
              "name": "Calories",
              "amount": 0,
              "unit": "kcal"
            },
            {
              "title": "Caffeine",
              "name": "Caffeine",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Zinc",
              "name": "Zinc",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin B12",
              "name": "Vitamin B12",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Choline",
              "name": "Choline",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Saturated Fat",
              "name": "Saturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin B3",
              "name": "Vitamin B3",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Sugar",
              "name": "Sugar",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Manganese",
              "name": "Manganese",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Fluoride",
              "name": "Fluoride",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin C",
              "name": "Vitamin C",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Protein",
              "name": "Protein",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Fiber",
              "name": "Fiber",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Net Carbohydrates",
              "name": "Net Carbohydrates",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Folic Acid",
              "name": "Folic Acid",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Iron",
              "name": "Iron",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Magnesium",
              "name": "Magnesium",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Carbohydrates",
              "name": "Carbohydrates",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Folate",
              "name": "Folate",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Vitamin B2",
              "name": "Vitamin B2",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Alcohol",
              "name": "Alcohol",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Calcium",
              "name": "Calcium",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Fat",
              "name": "Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin A",
              "name": "Vitamin A",
              "amount": 0,
              "unit": "IU"
            },
            {
              "title": "Vitamin B6",
              "name": "Vitamin B6",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Mono Unsaturated Fat",
              "name": "Mono Unsaturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Poly Unsaturated Fat",
              "name": "Poly Unsaturated Fat",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Vitamin E",
              "name": "Vitamin E",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Potassium",
              "name": "Potassium",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Selenium",
              "name": "Selenium",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Sodium",
              "name": "Sodium",
              "amount": 2.42,
              "unit": "mg"
            },
            {
              "title": "Copper",
              "name": "Copper",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin D",
              "name": "Vitamin D",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Vitamin B5",
              "name": "Vitamin B5",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Phosphorus",
              "name": "Phosphorus",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin B1",
              "name": "Vitamin B1",
              "amount": 0,
              "unit": "mg"
            }
          ]
        },
        {
          "id": 1145,
          "name": "unsalted butter",
          "amount": 0.06,
          "unit": "Tbsp",
          "nutrients": [
            {
              "title": "Cholesterol",
              "name": "Cholesterol",
              "amount": 1.91,
              "unit": "mg"
            },
            {
              "title": "Vitamin K",
              "name": "Vitamin K",
              "amount": 0.06,
              "unit": "µg"
            },
            {
              "title": "Calories",
              "name": "Calories",
              "amount": 6.36,
              "unit": "kcal"
            },
            {
              "title": "Caffeine",
              "name": "Caffeine",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Zinc",
              "name": "Zinc",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin B12",
              "name": "Vitamin B12",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Choline",
              "name": "Choline",
              "amount": 0.17,
              "unit": "mg"
            },
            {
              "title": "Saturated Fat",
              "name": "Saturated Fat",
              "amount": 0.46,
              "unit": "g"
            },
            {
              "title": "Vitamin B3",
              "name": "Vitamin B3",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Sugar",
              "name": "Sugar",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Manganese",
              "name": "Manganese",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Fluoride",
              "name": "Fluoride",
              "amount": 0.02,
              "unit": "mg"
            },
            {
              "title": "Vitamin C",
              "name": "Vitamin C",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Protein",
              "name": "Protein",
              "amount": 0.01,
              "unit": "g"
            },
            {
              "title": "Fiber",
              "name": "Fiber",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Net Carbohydrates",
              "name": "Net Carbohydrates",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Folic Acid",
              "name": "Folic Acid",
              "amount": 0,
              "unit": "µg"
            },
            {
              "title": "Iron",
              "name": "Iron",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Magnesium",
              "name": "Magnesium",
              "amount": 0.02,
              "unit": "mg"
            },
            {
              "title": "Carbohydrates",
              "name": "Carbohydrates",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Folate",
              "name": "Folate",
              "amount": 0.03,
              "unit": "µg"
            },
            {
              "title": "Vitamin B2",
              "name": "Vitamin B2",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Alcohol",
              "name": "Alcohol",
              "amount": 0,
              "unit": "g"
            },
            {
              "title": "Trans Fat",
              "name": "Trans Fat",
              "amount": 0.03,
              "unit": "g"
            },
            {
              "title": "Calcium",
              "name": "Calcium",
              "amount": 0.21,
              "unit": "mg"
            },
            {
              "title": "Fat",
              "name": "Fat",
              "amount": 0.72,
              "unit": "g"
            },
            {
              "title": "Vitamin A",
              "name": "Vitamin A",
              "amount": 22.18,
              "unit": "IU"
            },
            {
              "title": "Vitamin B6",
              "name": "Vitamin B6",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Mono Unsaturated Fat",
              "name": "Mono Unsaturated Fat",
              "amount": 0.19,
              "unit": "g"
            },
            {
              "title": "Poly Unsaturated Fat",
              "name": "Poly Unsaturated Fat",
              "amount": 0.03,
              "unit": "g"
            },
            {
              "title": "Vitamin E",
              "name": "Vitamin E",
              "amount": 0.02,
              "unit": "mg"
            },
            {
              "title": "Potassium",
              "name": "Potassium",
              "amount": 0.21,
              "unit": "mg"
            },
            {
              "title": "Selenium",
              "name": "Selenium",
              "amount": 0.01,
              "unit": "µg"
            },
            {
              "title": "Sodium",
              "name": "Sodium",
              "amount": 0.1,
              "unit": "mg"
            },
            {
              "title": "Copper",
              "name": "Copper",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Vitamin D",
              "name": "Vitamin D",
              "amount": 0.01,
              "unit": "µg"
            },
            {
              "title": "Vitamin B5",
              "name": "Vitamin B5",
              "amount": 0,
              "unit": "mg"
            },
            {
              "title": "Phosphorus",
              "name": "Phosphorus",
              "amount": 0.21,
              "unit": "mg"
            },
            {
              "title": "Vitamin B1",
              "name": "Vitamin B1",
              "amount": 0,
              "unit": "mg"
            }
          ]
        }
      ],
      "caloricBreakdown": {
        "percentProtein": 7.57,
        "percentFat": 24.61,
        "percentCarbs": 67.82
      },
      "weightPerServing": {
        "amount": 98,
        "unit": "g"
      }
    },
    "summary": "Cinnamon Sugar Fried Apples is a <b>vegetarian</b> hor d'oeuvre. For <b>30 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. One serving contains <b>118 calories</b>, <b>2g of protein</b>, and <b>3g of fat</b>. This recipe is liked by 45 foodies and cooks. A mixture of oil, eggs, butter, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes around <b>1 hour</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 19%</b>. This score is rather bad. Try <a href=\"https://spoonacular.com/recipes/roast-apples-with-cinnamon-sugar-219348\">Roast apples with cinnamon sugar</a>, <a href=\"https://spoonacular.com/recipes/low-sugar-slow-cooker-cinnamon-apples-626821\">Low Sugar Slow Cooker Cinnamon Apples</a>, and <a href=\"https://spoonacular.com/recipes/brown-sugar-oatmeal-with-maple-cinnamon-apples-801859\">Brown Sugar Oatmeal with Maple Cinnamon Apples</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ],
    "diets": [
      "lacto ovo vegetarian"
    ],
    "occasions": [],
    "winePairing": {},
    "instructions": "<ol><li>Mix all ingredients for batter (flour, salt, granulated sugar, milk, lightly beaten eggs, lemon zest, and melted unsalted butter) in a bowl until smooth. Cover with plastic wrap and set aside to rest for 30 minutes.</li><li>While batter is resting core and slice apples 1 cm thick. Set aside. Start heating oil.</li><li>Dip apple slices in batter, then fry until golden on each side. Drain the apples well on double lined paper towels. Then sprinkle the cinnamon sugar (brown sugar and cinnamon combined) on the slices. Serve immediately.</li></ol>",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Mix all ingredients for batter (flour, salt, granulated sugar, milk, lightly beaten eggs, lemon zest, and melted unsalted butter) in a bowl until smooth. Cover with plastic wrap and set aside to rest for 30 minutes.While batter is resting core and slice apples 1 cm thick. Set aside. Start heating oil.Dip apple slices in batter, then fry until golden on each side.",
            "ingredients": [
              {
                "id": 10719335,
                "name": "granulated sugar",
                "localizedName": "granulated sugar",
                "image": "sugar-in-bowl.png"
              },
              {
                "id": 1145,
                "name": "unsalted butter",
                "localizedName": "unsalted butter",
                "image": "butter-sliced.jpg"
              },
              {
                "id": 9156,
                "name": "lemon zest",
                "localizedName": "lemon zest",
                "image": "zest-lemon.jpg"
              },
              {
                "id": 9003,
                "name": "apple",
                "localizedName": "apple",
                "image": "apple.jpg"
              },
              {
                "id": 20081,
                "name": "all purpose flour",
                "localizedName": "all purpose flour",
                "image": "flour.png"
              },
              {
                "id": 1123,
                "name": "egg",
                "localizedName": "egg",
                "image": "egg.png"
              },
              {
                "id": 1077,
                "name": "milk",
                "localizedName": "milk",
                "image": "milk.png"
              },
              {
                "id": 2047,
                "name": "salt",
                "localizedName": "salt",
                "image": "salt.jpg"
              },
              {
                "id": 10018364,
                "name": "wrap",
                "localizedName": "wrap",
                "image": "flour-tortilla.jpg"
              },
              {
                "id": 0,
                "name": "dip",
                "localizedName": "dip",
                "image": ""
              },
              {
                "id": 4582,
                "name": "cooking oil",
                "localizedName": "cooking oil",
                "image": "vegetable-oil.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404730,
                "name": "plastic wrap",
                "localizedName": "plastic wrap",
                "image": "plastic-wrap.jpg"
              },
              {
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              }
            ],
            "length": {
              "number": 30,
              "unit": "minutes"
            }
          },
          {
            "number": 2,
            "step": "Drain the apples well on double lined paper towels. Then sprinkle the cinnamon sugar (brown sugar and cinnamon combined) on the slices.",
            "ingredients": [
              {
                "id": 10219335,
                "name": "cinnamon sugar",
                "localizedName": "cinnamon sugar",
                "image": "cinnamon-sugar.png"
              },
              {
                "id": 19334,
                "name": "brown sugar",
                "localizedName": "brown sugar",
                "image": "dark-brown-sugar.png"
              },
              {
                "id": 2010,
                "name": "cinnamon",
                "localizedName": "cinnamon",
                "image": "cinnamon.jpg"
              },
              {
                "id": 9003,
                "name": "apple",
                "localizedName": "apple",
                "image": "apple.jpg"
              }
            ],
            "equipment": [
              {
                "id": 405895,
                "name": "paper towels",
                "localizedName": "paper towels",
                "image": "paper-towels.jpg"
              }
            ]
          },
          {
            "number": 3,
            "step": "Serve immediately.",
            "ingredients": [],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/cinnamon-sugar-fried-apples-639487"
  }

/* Tests getTitle
*  Get the title of recipe.*/
test('test getTitle Func', () => {
    expect(getTitle(data)).toBe('Cinnamon Sugar Fried Apples');
});

/* Tests getTime
*  Get the cooking time of recipe.*/
test('test getTime Func', () => {
    expect(getTime(data)).toBe(60);
});

let expectedSteps = '<ol><li>Mix all ingredients for batter (flour, salt, granulated sugar, milk, lightly beaten eggs, lemon zest, and melted unsalted butter) in a bowl until smooth. Cover with plastic wrap and set aside to rest for 30 minutes.</li><li>While batter is resting core and slice apples 1 cm thick. Set aside. Start heating oil.</li><li>Dip apple slices in batter, then fry until golden on each side. Drain the apples well on double lined paper towels. Then sprinkle the cinnamon sugar (brown sugar and cinnamon combined) on the slices. Serve immediately.</li></ol>';
/* Tests getSteps
*  Get the steps of recipe.*/
test('test getSteps Func', () => {
    expect(getSteps(data)).toBe(expectedSteps);
});

let expectedFeaturedSteps = [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "Mix all ingredients for batter (flour, salt, granulated sugar, milk, lightly beaten eggs, lemon zest, and melted unsalted butter) in a bowl until smooth. Cover with plastic wrap and set aside to rest for 30 minutes.While batter is resting core and slice apples 1 cm thick. Set aside. Start heating oil.Dip apple slices in batter, then fry until golden on each side.",
          "ingredients": [
            {
              "id": 10719335,
              "name": "granulated sugar",
              "localizedName": "granulated sugar",
              "image": "sugar-in-bowl.png"
            },
            {
              "id": 1145,
              "name": "unsalted butter",
              "localizedName": "unsalted butter",
              "image": "butter-sliced.jpg"
            },
            {
              "id": 9156,
              "name": "lemon zest",
              "localizedName": "lemon zest",
              "image": "zest-lemon.jpg"
            },
            {
              "id": 9003,
              "name": "apple",
              "localizedName": "apple",
              "image": "apple.jpg"
            },
            {
              "id": 20081,
              "name": "all purpose flour",
              "localizedName": "all purpose flour",
              "image": "flour.png"
            },
            {
              "id": 1123,
              "name": "egg",
              "localizedName": "egg",
              "image": "egg.png"
            },
            {
              "id": 1077,
              "name": "milk",
              "localizedName": "milk",
              "image": "milk.png"
            },
            {
              "id": 2047,
              "name": "salt",
              "localizedName": "salt",
              "image": "salt.jpg"
            },
            {
              "id": 10018364,
              "name": "wrap",
              "localizedName": "wrap",
              "image": "flour-tortilla.jpg"
            },
            {
              "id": 0,
              "name": "dip",
              "localizedName": "dip",
              "image": ""
            },
            {
              "id": 4582,
              "name": "cooking oil",
              "localizedName": "cooking oil",
              "image": "vegetable-oil.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404730,
              "name": "plastic wrap",
              "localizedName": "plastic wrap",
              "image": "plastic-wrap.jpg"
            },
            {
              "id": 404783,
              "name": "bowl",
              "localizedName": "bowl",
              "image": "bowl.jpg"
            }
          ],
          "length": {
            "number": 30,
            "unit": "minutes"
          }
        },
        {
          "number": 2,
          "step": "Drain the apples well on double lined paper towels. Then sprinkle the cinnamon sugar (brown sugar and cinnamon combined) on the slices.",
          "ingredients": [
            {
              "id": 10219335,
              "name": "cinnamon sugar",
              "localizedName": "cinnamon sugar",
              "image": "cinnamon-sugar.png"
            },
            {
              "id": 19334,
              "name": "brown sugar",
              "localizedName": "brown sugar",
              "image": "dark-brown-sugar.png"
            },
            {
              "id": 2010,
              "name": "cinnamon",
              "localizedName": "cinnamon",
              "image": "cinnamon.jpg"
            },
            {
              "id": 9003,
              "name": "apple",
              "localizedName": "apple",
              "image": "apple.jpg"
            }
          ],
          "equipment": [
            {
              "id": 405895,
              "name": "paper towels",
              "localizedName": "paper towels",
              "image": "paper-towels.jpg"
            }
          ]
        },
        {
          "number": 3,
          "step": "Serve immediately.",
          "ingredients": [],
          "equipment": []
        }
      ]
    }
  ]

/* Tests getFeaturedSteps
*  Get the steps of recipe (Array).*/
test('test getFeaturedSteps Func', () => {
    expect(getFeaturedSteps(data)).toMatchObject(expectedFeaturedSteps);
});

/* Tests getStepsArray
*  Get the steps of recipe (Array).*/
test('test getStepsArray Func', () => {
    expect(getStepsArray(data)).toMatchObject([]);
});
