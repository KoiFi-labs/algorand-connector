const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetAccountError } = require("../../../../application/entities/getAccount/errors");
const getAccountEntity = require("../../../../application/entities/getAccount");
describe("getAccount entity cases test", () => {
	test("Happy path", async () => {
    
    let dependencies = {
			getAccount: validTrue
    }
    let entity = getAccountEntity(dependencies)
    await entity({})
     
});
	test("should throw if getAccount fails", async () => {
    
    let dependencies = {
			getAccount: errored
    }
    let entity = getAccountEntity(dependencies)
    await expect(entity({})).rejects.toThrow(SomeError)
     
});

})