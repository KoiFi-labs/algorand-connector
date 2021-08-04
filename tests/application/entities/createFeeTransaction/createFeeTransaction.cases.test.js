const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateFeeTransactionError } = require("../../../../application/entities/createFeeTransaction/errors");
const createFeeTransactionEntity = require("../../../../application/entities/createFeeTransaction");
describe("createFeeTransaction entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			createFeeTransaction: validTrue
    }
    let entity = createFeeTransactionEntity(dependencies)
    await entity({})
     
});
	test("should throw if createFeeTransaction fails", async () => {
    
    let dependencies = {
			createFeeTransaction: errored
    }
    let entity = createFeeTransactionEntity(dependencies)
    await expect(entity({})).rejects.toThrow(SomeError)
     
});

})