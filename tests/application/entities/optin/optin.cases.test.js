const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { OptinError } = require("../../../../application/entities/optin/errors");
const optinEntity = require("../../../../application/entities/optin");
describe("optin entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			optin: validTrue
    }
    let entity = optinEntity(dependencies)
    await entity({})
     
});
	test("should throw if optin fails", async () => {
    
    let dependencies = {
			optin: errored
    }
    let entity = optinEntity(dependencies)
    await expect(entity({})).rejects.toThrow(OptinError)
     
});

})