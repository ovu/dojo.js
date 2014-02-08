define(function(require) {
  var gameOfLife = {};


  var rules = [[0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0]];
  gameOfLife.evaluate = function(state, neighbors) {
    return rules[state][neighbors];
  };

  return gameOfLife;
});