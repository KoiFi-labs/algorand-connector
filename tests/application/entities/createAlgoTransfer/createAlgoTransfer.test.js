const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { CreateAlgoTransferError } = require("../../../../application/entities/createAlgoTransfer/errors");

const createAlgoTransferEntity = require("../../../../application/entities/createAlgoTransfer");

describe("createAlgoTransfer entity test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with entity dependencies
        }
        let entity = createAlgoTransferEntity(dependencies)
        await entity({})
        
    });
    
})