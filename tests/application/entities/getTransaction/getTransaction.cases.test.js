const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetTransactionError } = require("../../../../application/entities/getTransaction/errors");
const getTransactionEntity = require("../../../../application/entities/getTransaction");
describe("getTransaction entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			getTransaction: validTrue
    }
    let entity = getTransactionEntity(dependencies)
    await entity({})
     
});
	test("should throw if getTransaction fails", async () => {
    
    let dependencies = {
			getTransaction: errored
    }
    let entity = getTransactionEntity(dependencies)
    await expect(entity({})).rejects.toThrow(SomeError)
     
});

})