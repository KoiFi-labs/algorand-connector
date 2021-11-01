const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetAppError } = require("../../../../application/use-cases/getApp/errors");
const getAppUOC = require("../../../../application/use-cases/getApp");

//Actor dependencies: this code does not need to be considered in the tests (asume the correct actor access the uoc)
const commonDependencies = {getUserAndAppByIdentification: validTrue,can: validTrue}

describe("getApp uoc test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with uoc dependencies
        }
        Object.assign(dependencies,commonDependencies)
        let uoc = getAppUOC(dependencies)
        await uoc({/*complete with uoc parameters*/})
        
    });
    
})