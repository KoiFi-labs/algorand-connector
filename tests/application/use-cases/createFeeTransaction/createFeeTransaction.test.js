const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateFeeTransactionError } = require("../../../../application/use-cases/createFeeTransaction/errors");
const createFeeTransactionUOC = require("../../../../application/use-cases/createFeeTransaction");

//Actor dependencies: this code does not need to be considered in the tests (asume the correct actor access the uoc)
const commonDependencies = {getUserAndAppByIdentification: validTrue,can: validTrue}

describe("createFeeTransaction uoc test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with uoc dependencies
        }
        Object.assign(dependencies,commonDependencies)
        let uoc = createFeeTransactionUOC(dependencies)
        await uoc({/*complete with uoc parameters*/})
        
    });
    
})