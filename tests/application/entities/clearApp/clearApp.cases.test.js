const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { ClearAppError } = require("../../../../application/entities/clearApp/errors");
const clearAppEntity = require("../../../../application/entities/clearApp");
describe("clearApp entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			clearApp: validTrue
    }
    let entity = clearAppEntity(dependencies)
    await entity({})
     
});
	test("should throw if clearApp fails", async () => {
    
    let dependencies = {
			clearApp: errored
    }
    let entity = clearAppEntity(dependencies)
    await expect(entity({})).rejects.toThrow(SomeError)
     
});

})