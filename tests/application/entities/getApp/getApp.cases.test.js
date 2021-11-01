const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetAppError } = require("../../../../application/entities/getApp/errors");
const getAppEntity = require("../../../../application/entities/getApp");
describe("getApp entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			getApp: validTrue
    }
    let entity = getAppEntity(dependencies)
    await entity({})
     
});
	test("should throw if getApp fails", async () => {
    
    let dependencies = {
			getApp: errored
    }
    let entity = getAppEntity(dependencies)
    await expect(entity({})).rejects.toThrow(SomeError)
     
});

})