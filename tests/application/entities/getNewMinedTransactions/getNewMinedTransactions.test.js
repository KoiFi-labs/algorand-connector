const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetNewMinedTransactionsError } = require("../../../../application/entities/getNewMinedTransactions/errors");

const getNewMinedTransactionsEntity = require("../../../../application/entities/getNewMinedTransactions");

describe("getNewMinedTransactions entity test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with entity dependencies
        }
        let entity = getNewMinedTransactionsEntity(dependencies)
        await entity({})
        
    });
    
})