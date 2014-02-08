define(["session2", "underscore"], function(gameOfLife, _) {
  describe("game of life", function() {
    beforeEach(function() {
      // add a custom matcher for deep equals checking
      this.addMatchers({
        toDeepEqual: function(expected) {
          return _.isEqual(this.actual, expected);
        }
      });
    });

    describe("rules for alive cell", function() {
      it("should kill cell with less than two neighbors", function() {
        expect(gameOfLife.evaluate(1, 0)).toBe(0);
        expect(gameOfLife.evaluate(1, 1)).toBe(0);
      });
      it("should not kill cell with two or three neighbors", function() {
        expect(gameOfLife.evaluate(1, 2)).toBe(1);
        expect(gameOfLife.evaluate(1, 3)).toBe(1);
      });
      it("should kill cell with more than three neighbors", function() {
        expect(gameOfLife.evaluate(1, 4)).toBe(0);
        expect(gameOfLife.evaluate(1, 5)).toBe(0);
        expect(gameOfLife.evaluate(1, 6)).toBe(0);
      });
    });

    describe("rules for dead cell", function() {
      it("should revive a cell with three neighbors", function() {
        expect(gameOfLife.evaluate(0, 3)).toBe(1);
      });
      it("should not revive a cell with other than three neighbors", function() {
        expect(gameOfLife.evaluate(0, 0)).toBe(0);
        expect(gameOfLife.evaluate(0, 1)).toBe(0);
        expect(gameOfLife.evaluate(0, 2)).toBe(0);
        expect(gameOfLife.evaluate(0, 4)).toBe(0);
        expect(gameOfLife.evaluate(0, 5)).toBe(0);
        expect(gameOfLife.evaluate(0, 6)).toBe(0);
      });
    });

    describe("init", function() {
      it("should initalize to the correct dimensions", function() {
        expect(gameOfLife.gameField.length).toBe(0);
        gameOfLife.init(5); // initialize a 5*5 game field
        expect(gameOfLife.gameField.length).toBe(5);
        gameOfLife.gameField.forEach(function(row) {
          expect(row.length).toBe(5);
        });
      });
      it("should throw an exception when the init receive invalid values ", function() {
        expect(function() {
          gameOfLife.init(-1);
        })
          .toThrow(new Error("Invalid parameter"));
      });
      it("should throw an exception when the init receive an undefined value", function() {
        expect(function() {
          gameOfLife.init(undefined);
        })
          .toThrow(new Error("Invalid parameter"));
      });
    });

    describe("populate game field", function() {
      it("should populate a random playing field", function() {
        // initial state should be empty
        gameOfLife.gameField.forEach(function(row) {
          row.forEach(function(cell) {
            expect(cell).toBe(undefined);
          });
        });

        gameOfLife.populate();

        // initial state should be empty
        gameOfLife.gameField.forEach(function(row) {
          row.forEach(function(cell) {
            expect(cell).not.toBe(undefined);
          });
        });
      });
    });
  });
});