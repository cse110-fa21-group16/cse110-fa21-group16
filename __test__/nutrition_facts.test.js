// nutrition_facts.test.js
import { calculateServing } from "../source/assets/scripts/helpGetDataFunc.js";
//const functions = require('../source/assets/components/NutritionPage.js');

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
test('test nutrition fact conversion, serving size 0', () => {
    expect(calculateServing(554.32, 0)).toBe(554.32); //cholest
});

//invalid input of negative number, should result in nutrition facts for serving size 1
test('test nutrition fact conversion, serving size -3', () => {
    expect(calculateServing(83.44, -3)).toBe(83.44); //cholest
});



