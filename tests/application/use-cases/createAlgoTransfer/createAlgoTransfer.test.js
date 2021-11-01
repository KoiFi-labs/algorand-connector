const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateAlgoTransferError } = require("../../../../application/use-cases/createAlgoTransfer/errors");
const createAlgoTransferUOC = require("../../../../application/use-cases/createAlgoTransfer");

//Actor dependencies: this code does not need to be considered in the tests (asume the correct actor access the uoc)
const commonDependencies = {getUserAndAppByIdentification: validTrue,can: validTrue}

describe("createAlgoTransfer uoc test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with uoc dependencies
        }
        Object.assign(dependencies,commonDependencies)
        let uoc = createAlgoTransferUOC(dependencies)
        await uoc({/*complete with uoc parameters*/})
        
    });
    
})