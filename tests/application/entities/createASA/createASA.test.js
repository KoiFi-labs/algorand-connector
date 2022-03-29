const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateASAError } = require("../../../../application/entities/createASA/errors");

const createASAEntity = require("../../../../application/entities/createASA");

describe("createASA entity test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with entity dependencies
        }
        let entity = createASAEntity(dependencies)
        await entity({})
        
    });
    
})