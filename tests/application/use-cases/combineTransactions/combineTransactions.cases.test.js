const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CombineTransactionsError } = require("../../../../application/use-cases/combineTransactions/errors");
const combineTransactionsUoc = require("../../../../application/use-cases/combineTransactions");
const commonDependencies = {}
describe("combineTransactions uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			combineTransactions: validTrue
    }
    let uoc = combineTransactionsUoc(dependencies)
    await uoc({})
     
});
	test("should throw if combineTransactions fails", async () => {
    
    let dependencies = {
			combineTransactions: errored
    }
    let uoc = combineTransactionsUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(SomeError)
     
});

})