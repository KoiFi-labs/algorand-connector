const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateASAError } = require("../../../../application/use-cases/createASA/errors");
const createASAUoc = require("../../../../application/use-cases/createASA");
const commonDependencies = {}
describe("createASA uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			createASA: validTrue
    }
    let uoc = createASAUoc(dependencies)
    await uoc({})
     
});
	test("should throw if createASA fails", async () => {
    
    let dependencies = {
			createASA: errored
    }
    let uoc = createASAUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(SomeError)
     
});

})