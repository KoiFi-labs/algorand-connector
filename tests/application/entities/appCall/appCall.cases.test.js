const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { AppCallError } = require("../../../../application/entities/appCall/errors");
const appCallEntity = require("../../../../application/entities/appCall");
describe("appCall entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			appCall: validTrue
    }
    let entity = appCallEntity(dependencies)
    await entity({})
     
});
	test("should throw if appCall fails", async () => {
    
    let dependencies = {
			appCall: errored
    }
    let entity = appCallEntity(dependencies)
    await expect(entity({})).rejects.toThrow(AppCallError)
     
});

})