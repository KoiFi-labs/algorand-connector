const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateAppError } = require("../../../../application/entities/createApp/errors");
const createAppEntity = require("../../../../application/entities/createApp");
describe("createApp entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			createApp: validTrue
    }
    let entity = createAppEntity(dependencies)
    await entity({})
     
});
	test("should throw if createApp fails", async () => {
    
    let dependencies = {
			createApp: errored
    }
    let entity = createAppEntity(dependencies)
    await expect(entity({})).rejects.toThrow(CreateAppError)
     
});

})