const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { TransferASAError } = require("../../../../application/use-cases/transferASA/errors");
const transferASAUoc = require("../../../../application/use-cases/transferASA");
const commonDependencies = {}
describe("transferASA uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			transferASA: validTrue
    }
    let uoc = transferASAUoc(dependencies)
    await uoc({})
     
});
	test("should throw if transferASA fails", async () => {
    
    let dependencies = {
			transferASA: errored
    }
    let uoc = transferASAUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(SomeError)
     
});

})