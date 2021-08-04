const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetTimeErroredTransactionsError } = require("../../../../application/entities/getTimeErroredTransactions/errors");

const getTimeErroredTransactionsEntity = require("../../../../application/entities/getTimeErroredTransactions");

describe("getTimeErroredTransactions entity test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with entity dependencies
        }
        let entity = getTimeErroredTransactionsEntity(dependencies)
        await entity({})
        
    });
    
})