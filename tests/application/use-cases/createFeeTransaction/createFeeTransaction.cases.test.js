const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateFeeTransactionError } = require("../../../../application/use-cases/createFeeTransaction/errors");
const createFeeTransactionUoc = require("../../../../application/use-cases/createFeeTransaction");
const commonDependencies = {}
describe("createFeeTransaction uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			createFeeTransaction: validTrue
    }
    let uoc = createFeeTransactionUoc(dependencies)
    await uoc({})
     
});
	test("should throw if createFeeTransaction fails", async () => {
    
    let dependencies = {
			createFeeTransaction: errored
    }
    let uoc = createFeeTransactionUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(SomeError)
     
});

})