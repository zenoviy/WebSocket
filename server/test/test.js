const chai = require("chai");

describe("math 2 + 2", () => {
    it("should give ansver 4", () => {
        let sum = 2 + 2;
        chai.expect(sum, (err) => { console.log(err) }).to.be.equal(4);
    })
})