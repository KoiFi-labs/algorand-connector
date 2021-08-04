const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { DeleteAppError } = require("../../../../application/use-cases/deleteApp/errors");
const deleteAppUoc = require("../../../../application/use-cases/deleteApp");
const commonDependencies = {}
describe("deleteApp uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			deleteApp: validTrue
    }
    let uoc = deleteAppUoc(dependencies)
    await uoc({})
     
});
	test("should throw if deleteApp fails", async () => {
    
    let dependencies = {
			deleteApp: errored
    }
    let uoc = deleteAppUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(DeleteAppError)
     
});

})