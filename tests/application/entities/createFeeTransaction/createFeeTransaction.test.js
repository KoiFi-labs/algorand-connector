const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateFeeTransactionError } = require("../../../../application/entities/createFeeTransaction/errors");

const createFeeTransactionEntity = require("../../../../application/entities/createFeeTransaction");

describe("createFeeTransaction entity test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with entity dependencies
        }
        let entity = createFeeTransactionEntity(dependencies)
        await entity({})
        
    });
    
})