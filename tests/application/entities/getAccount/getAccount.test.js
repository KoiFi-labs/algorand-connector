const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetAccountError } = require("../../../../application/entities/getAccount/errors");

const getAccountEntity = require("../../../../application/entities/getAccount");

describe("getAccount entity test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with entity dependencies
        }
        let entity = getAccountEntity(dependencies)
        await entity({})
        
    });
    
})