const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CloseOutError } = require("../../../../application/entities/closeOut/errors");
const closeOutEntity = require("../../../../application/entities/closeOut");
describe("closeOut entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			closeOut: validTrue
    }
    let entity = closeOutEntity(dependencies)
    await entity({})
     
});
	test("should throw if closeOut fails", async () => {
    
    let dependencies = {
			closeOut: errored
    }
    let entity = closeOutEntity(dependencies)
    await expect(entity({})).rejects.toThrow(CloseOutError)
     
});

})