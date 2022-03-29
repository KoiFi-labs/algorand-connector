const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { TransferASAError } = require("../../../../application/entities/transferASA/errors");

const transferASAEntity = require("../../../../application/entities/transferASA");

describe("transferASA entity test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with entity dependencies
        }
        let entity = transferASAEntity(dependencies)
        await entity({})
        
    });
    
})