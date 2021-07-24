const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CombineTransactionsError } = require("../../../../application/entities/combineTransactions/errors");

const combineTransactionsEntity = require("../../../../application/entities/combineTransactions");

describe("combineTransactions entity test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with entity dependencies
        }
        let entity = combineTransactionsEntity(dependencies)
        await entity({})
        
    });
    
})