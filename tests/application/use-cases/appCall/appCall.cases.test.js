const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { AppCallError } = require("../../../../application/use-cases/appCall/errors");
const appCallUoc = require("../../../../application/use-cases/appCall");
const commonDependencies = {}
describe("appCall uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			appCall: validTrue
    }
    let uoc = appCallUoc(dependencies)
    await uoc({})
     
});
	test("should throw if appCall fails", async () => {
    
    let dependencies = {
			appCall: errored
    }
    let uoc = appCallUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(AppCallError)
     
});

})