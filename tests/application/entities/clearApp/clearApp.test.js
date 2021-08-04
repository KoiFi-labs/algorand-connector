const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { ClearAppError } = require("../../../../application/entities/clearApp/errors");

const clearAppEntity = require("../../../../application/entities/clearApp");

describe("clearApp entity test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with entity dependencies
        }
        let entity = clearAppEntity(dependencies)
        await entity({})
        
    });
    
})