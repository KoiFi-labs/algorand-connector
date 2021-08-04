const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetTransactionError } = require("../../../../application/use-cases/getTransaction/errors");
const getTransactionUoc = require("../../../../application/use-cases/getTransaction");
const commonDependencies = {}
describe("getTransaction uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			getTransaction: validTrue
    }
    let uoc = getTransactionUoc(dependencies)
    await uoc({})
     
});
	test("should throw if getTransaction fails", async () => {
    
    let dependencies = {
			getTransaction: errored
    }
    let uoc = getTransactionUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(SomeError)
     
});

})