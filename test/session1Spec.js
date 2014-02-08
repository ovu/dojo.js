define(["session1"], function(gameOfLife) {
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
});