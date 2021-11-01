const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CombineTransactionsError } = require("../../../../application/use-cases/combineTransactions/errors");
const combineTransactionsUOC = require("../../../../application/use-cases/combineTransactions");

//Actor dependencies: this code does not need to be considered in the tests (asume the correct actor access the uoc)
const commonDependencies = {getUserAndAppByIdentification: validTrue,can: validTrue}

describe("combineTransactions uoc test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with uoc dependencies
        }
        Object.assign(dependencies,commonDependencies)
        let uoc = combineTransactionsUOC(dependencies)
        await uoc({/*complete with uoc parameters*/})
        
    });
    
})