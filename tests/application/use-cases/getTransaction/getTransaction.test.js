const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetTransactionError } = require("../../../../application/use-cases/getTransaction/errors");
const getTransactionUOC = require("../../../../application/use-cases/getTransaction");

//Actor dependencies: this code does not need to be considered in the tests (asume the correct actor access the uoc)
const commonDependencies = {getUserAndAppByIdentification: validTrue,can: validTrue}

describe("getTransaction uoc test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with uoc dependencies
        }
        Object.assign(dependencies,commonDependencies)
        let uoc = getTransactionUOC(dependencies)
        await uoc({/*complete with uoc parameters*/})
        
    });
    
})