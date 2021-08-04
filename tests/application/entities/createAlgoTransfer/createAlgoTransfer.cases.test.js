const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateAlgoTransferError } = require("../../../../application/entities/createAlgoTransfer/errors");
const createAlgoTransferEntity = require("../../../../application/entities/createAlgoTransfer");
describe("createAlgoTransfer entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			createAlgoTransfer: validTrue
    }
    let entity = createAlgoTransferEntity(dependencies)
    await entity({})
     
});
	test("should throw if createAlgoTransfer fails", async () => {
    
    let dependencies = {
			createAlgoTransfer: errored
    }
    let entity = createAlgoTransferEntity(dependencies)
    await expect(entity({})).rejects.toThrow(SomeError)
     
});

})