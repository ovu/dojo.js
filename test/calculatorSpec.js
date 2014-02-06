define(["calculator"], function (calculator) {
  describe ("calculator specs", function () {
     it("should multiply 3 and 5", function () {
       var product = calculator.multiply(3, 5);
       expect(product).toBe(15);
     });
  });
});
