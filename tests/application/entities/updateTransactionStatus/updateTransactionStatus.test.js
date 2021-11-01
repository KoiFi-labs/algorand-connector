const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { UpdateTransactionStatusError } = require("../../../../application/entities/updateTransactionStatus/errors");

const updateTransactionStatusEntity = require("../../../../application/entities/updateTransactionStatus");

describe("updateTransactionStatus entity test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with entity dependencies
        }
        let entity = updateTransactionStatusEntity(dependencies)
        await entity({})
        
    });
    
})