const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CloseOutError } = require("../../../../application/use-cases/closeOut/errors");
const closeOutUoc = require("../../../../application/use-cases/closeOut");
const commonDependencies = {}
describe("closeOut uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			closeOut: validTrue
    }
    let uoc = closeOutUoc(dependencies)
    await uoc({})
     
});
	test("should throw if closeOut fails", async () => {
    
    let dependencies = {
			closeOut: errored
    }
    let uoc = closeOutUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(SomeError)
     
});

})