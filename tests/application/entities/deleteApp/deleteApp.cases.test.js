const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { DeleteAppError } = require("../../../../application/entities/deleteApp/errors");
const deleteAppEntity = require("../../../../application/entities/deleteApp");
describe("deleteApp entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			deleteApp: validTrue
    }
    let entity = deleteAppEntity(dependencies)
    await entity({})
     
});
	test("should throw if deleteApp fails", async () => {
    
    let dependencies = {
			deleteApp: errored
    }
    let entity = deleteAppEntity(dependencies)
    await expect(entity({})).rejects.toThrow(DeleteAppError)
     
});

})