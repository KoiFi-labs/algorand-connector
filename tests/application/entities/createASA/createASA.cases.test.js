const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateASAError } = require("../../../../application/entities/createASA/errors");
const createASAEntity = require("../../../../application/entities/createASA");
describe("createASA entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			createASA: validTrue
    }
    let entity = createASAEntity(dependencies)
    await entity({})
     
});
	test("should throw if createASA fails", async () => {
    
    let dependencies = {
			createASA: errored
    }
    let entity = createASAEntity(dependencies)
    await expect(entity({})).rejects.toThrow(SomeError)
     
});

})