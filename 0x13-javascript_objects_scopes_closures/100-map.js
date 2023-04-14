#!/usr/bin/node
// A script that imports an array and computes a new array.
const lists = require('./100-data').list;
console.log(lists);
const newList = lists.map((items, index) => items * index);
console.log(newList);
