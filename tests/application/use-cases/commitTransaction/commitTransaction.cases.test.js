const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CommitTransactionError } = require("../../../../application/use-cases/commitTransaction/errors");
const commitTransactionUoc = require("../../../../application/use-cases/commitTransaction");
const commonDependencies = {}
describe("commitTransaction uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			commitTransaction: validTrue
    }
    let uoc = commitTransactionUoc(dependencies)
    await uoc({})
     
});
	test("should throw if commitTransaction fails", async () => {
    
    let dependencies = {
			commitTransaction: errored
    }
    let uoc = commitTransactionUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(CommitTransactionError)
     
});

})