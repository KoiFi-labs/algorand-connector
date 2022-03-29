const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { TransferASAError } = require("../../../../application/use-cases/transferASA/errors");
const transferASAUOC = require("../../../../application/use-cases/transferASA");

//Actor dependencies: this code does not need to be considered in the tests (asume the correct actor access the uoc)
const commonDependencies = {getUserAndAppByIdentification: validTrue,can: validTrue}

describe("transferASA uoc test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with uoc dependencies
        }
        Object.assign(dependencies,commonDependencies)
        let uoc = transferASAUOC(dependencies)
        await uoc({/*complete with uoc parameters*/})
        
    });
    
})