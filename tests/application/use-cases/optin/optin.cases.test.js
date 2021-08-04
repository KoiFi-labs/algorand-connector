const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { OptinError } = require("../../../../application/use-cases/optin/errors");
const optinUoc = require("../../../../application/use-cases/optin");
const commonDependencies = {}
describe("optin uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			optin: validTrue
    }
    let uoc = optinUoc(dependencies)
    await uoc({})
     
});
	test("should throw if optin fails", async () => {
    
    let dependencies = {
			optin: errored
    }
    let uoc = optinUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(OptinError)
     
});

})