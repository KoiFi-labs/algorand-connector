const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateAppError } = require("../../../../application/use-cases/createApp/errors");
const createAppUoc = require("../../../../application/use-cases/createApp");
const commonDependencies = {}
describe("createApp uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			createApp: validTrue
    }
    let uoc = createAppUoc(dependencies)
    await uoc({})
     
});
	test("should throw if createApp fails", async () => {
    
    let dependencies = {
			createApp: errored
    }
    let uoc = createAppUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(CreateAppError)
     
});

})