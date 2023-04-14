#!/usr/bin/node
// A function that returns the reversed version of a list:
exports.esrever = function (list) {
  const reversedList = [];
  const last = list.length - 1;
  for (let n = last; n >= 0; n--) {
    reversedList.push(list[n]);
  }
  return (reversedList);
};
