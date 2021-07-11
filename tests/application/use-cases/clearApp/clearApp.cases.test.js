const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { ClearAppError } = require("../../../../application/use-cases/clearApp/errors");
const clearAppUoc = require("../../../../application/use-cases/clearApp");
const commonDependencies = {}
describe("clearApp uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			clearApp: validTrue
    }
    let uoc = clearAppUoc(dependencies)
    await uoc({})
     
});
	test("should throw if clearApp fails", async () => {
    
    let dependencies = {
			clearApp: errored
    }
    let uoc = clearAppUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(SomeError)
     
});

})