const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetAccountError } = require("../../../../application/use-cases/getAccount/errors");
const getAccountUoc = require("../../../../application/use-cases/getAccount");
const commonDependencies = {}
describe("getAccount uoc cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			getAccount: validTrue
    }
    let uoc = getAccountUoc(dependencies)
    await uoc({})
     
});
	test("should throw if getAccount fails", async () => {
    
    let dependencies = {
			getAccount: errored
    }
    let uoc = getAccountUoc(dependencies)
    await expect(uoc({})).rejects.toThrow(SomeError)
     
});

})