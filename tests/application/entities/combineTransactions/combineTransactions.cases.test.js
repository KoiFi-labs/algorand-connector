const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CombineTransactionsError } = require("../../../../application/entities/combineTransactions/errors");
const combineTransactionsEntity = require("../../../../application/entities/combineTransactions");
describe("combineTransactions entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			combineTransactions: validTrue
    }
    let entity = combineTransactionsEntity(dependencies)
    await entity({})
     
});
	test("should throw if combineTransactions fails", async () => {
    
    let dependencies = {
			combineTransactions: errored
    }
    let entity = combineTransactionsEntity(dependencies)
    await expect(entity({})).rejects.toThrow(SomeError)
     
});

})