const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { TransferASAError } = require("../../../../application/entities/transferASA/errors");
const transferASAEntity = require("../../../../application/entities/transferASA");
describe("transferASA entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			transferASA: validTrue
    }
    let entity = transferASAEntity(dependencies)
    await entity({})
     
});
	test("should throw if transferASA fails", async () => {
    
    let dependencies = {
			transferASA: errored
    }
    let entity = transferASAEntity(dependencies)
    await expect(entity({})).rejects.toThrow(SomeError)
     
});

})