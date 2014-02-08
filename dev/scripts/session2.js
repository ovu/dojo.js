define(function(require) {
  var gameOfLife = {};
  var INVALID_PARAMETER_EXCEPTION = "Invalid parameter";
  var rules = [[0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0]];
  
  gameOfLife.gameField = [];
  gameOfLife.evaluate = function(state, neighbors) {
    return rules[state][neighbors];
  };

  gameOfLife.init = function(size) {
    if (typeof size === 'undefined' || size < 0) {
      throw INVALID_PARAMETER_EXCEPTION;
    }

    var rowSize = size; // remember the row length... oops
    while(size--){
      gameOfLife.gameField.push(new Array(rowSize));
    }
  };

  gameOfLife.populate = function () {
    gameOfLife.gameField.forEach(function (row){
       row.forEach(function (cell) {
        cell = (Math.random() < 0.5) ? 1: 0;
      });
    });
  };

  return gameOfLife;
});