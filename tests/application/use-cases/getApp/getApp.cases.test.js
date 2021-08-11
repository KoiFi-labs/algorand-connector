const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetAppError } = require("../../../../application/use-cases/getApp/errors");
const getAppUoc = require("../../../../application/use-cases/getApp");
const commonDependencies = {}
describe("getApp uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			getApp: validTrue
    }
    let uoc = getAppUoc(dependencies)
    await uoc({})
     
});
	test("should throw if getApp fails", async () => {
    
    let dependencies = {
			getApp: errored
    }
    let uoc = getAppUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(SomeError)
     
});

})