# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @lapatissiere/lotide`

**Require it:**

`const _ = require('@lapatissiere/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head : function to retrieve the first element from the array
* tail : function to retrieve every element except the head (first element) of the array
* middle : function to return an array with only the middle element(s) of the provided array. Returns empty array if elements in array are less than 3
* assertArraysEqual : function for asserting that two arrays are equal
* assertEqual : function to compare two primitive values
* assertObjectsEqual : function for asserting that two objects are equal
* countLetters : function that takes in a sentence (as a string) and returns a count of each of the letters in that sentence
* countOnly : function that takes in a collection of items and returns counts for a specific subset of those items
* eqArrays : function that compares two arrays for a perfect match
* eqObjects : function that compares two objects for a match
* findKeyByValue : function that searches for a key on an object where its value matches a given value
* letterPositions : function that returns all the indices (zero-based positions) in the string where each character is found
* map : function that will return a new array based on the results of its callback function
* takeUntil : function that will keep collecting items from a provided array until the callback provided returns a truthy value
* without : function that returns a subset of a given array, removing unwanted elements
