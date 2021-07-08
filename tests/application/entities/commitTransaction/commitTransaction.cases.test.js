const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CommitTransactionError } = require("../../../../application/entities/commitTransaction/errors");
const commitTransactionEntity = require("../../../../application/entities/commitTransaction");
describe("commitTransaction entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			commitTransaction: validTrue
    }
    let entity = commitTransactionEntity(dependencies)
    await entity({})
     
});
	test("should throw if commitTransaction fails", async () => {
    
    let dependencies = {
			commitTransaction: errored
    }
    let entity = commitTransactionEntity(dependencies)
    await expect(entity({})).rejects.toThrow(CommitTransactionError)
     
});

})