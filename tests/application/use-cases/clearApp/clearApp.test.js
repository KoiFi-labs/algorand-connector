const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { ClearAppError } = require("../../../../application/use-cases/clearApp/errors");
const clearAppUOC = require("../../../../application/use-cases/clearApp");

//Actor dependencies: this code does not need to be considered in the tests (asume the correct actor access the uoc)
const commonDependencies = {getUserAndAppByIdentification: validTrue,can: validTrue}

describe("clearApp uoc test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with uoc dependencies
        }
        Object.assign(dependencies,commonDependencies)
        let uoc = clearAppUOC(dependencies)
        await uoc({/*complete with uoc parameters*/})
        
    });
    
})