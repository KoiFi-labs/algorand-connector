const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetAccountError } = require("../../../../application/use-cases/getAccount/errors");
const getAccountUOC = require("../../../../application/use-cases/getAccount");

//Actor dependencies: this code does not need to be considered in the tests (asume the correct actor access the uoc)
const commonDependencies = {getUserAndAppByIdentification: validTrue,can: validTrue}

describe("getAccount uoc test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with uoc dependencies
        }
        Object.assign(dependencies,commonDependencies)
        let uoc = getAccountUOC(dependencies)
        await uoc({/*complete with uoc parameters*/})
        
    });
    
})