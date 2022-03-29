const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateASAError } = require("../../../../application/use-cases/createASA/errors");
const createASAUOC = require("../../../../application/use-cases/createASA");

//Actor dependencies: this code does not need to be considered in the tests (asume the correct actor access the uoc)
const commonDependencies = {getUserAndAppByIdentification: validTrue,can: validTrue}

describe("createASA uoc test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with uoc dependencies
        }
        Object.assign(dependencies,commonDependencies)
        let uoc = createASAUOC(dependencies)
        await uoc({/*complete with uoc parameters*/})
        
    });
    
})