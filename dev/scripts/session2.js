define(function(require) {
  var gameOfLife = {};
  var rules = [[0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0]];
  
  gameOfLife.gameField = [];
  gameOfLife.evaluate = function(state, neighbors) {
    return rules[state][neighbors];
  };

  gameOfLife.init = function(size) {
    var rowSize = size; // remember the row length... oops
    while(size--){
      gameOfLife.gameField.push(new Array(rowSize));
    }
  };

  return gameOfLife;
});