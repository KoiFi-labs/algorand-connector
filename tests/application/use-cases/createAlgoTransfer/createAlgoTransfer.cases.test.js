const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateAlgoTransferError } = require("../../../../application/use-cases/createAlgoTransfer/errors");
const createAlgoTransferUoc = require("../../../../application/use-cases/createAlgoTransfer");
const commonDependencies = {}
describe("createAlgoTransfer uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			createAlgoTransfer: validTrue
    }
    let uoc = createAlgoTransferUoc(dependencies)
    await uoc({})
     
});
	test("should throw if createAlgoTransfer fails", async () => {
    
    let dependencies = {
			createAlgoTransfer: errored
    }
    let uoc = createAlgoTransferUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(SomeError)
     
});

})