const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetTransactionError } = require("../../../../application/entities/getTransaction/errors");

const getTransactionEntity = require("../../../../application/entities/getTransaction");

describe("getTransaction entity test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with entity dependencies
        }
        let entity = getTransactionEntity(dependencies)
        await entity({})
        
    });
    
})