const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { NotifyTransactionsUpdateError } = require("../../../../application/entities/notifyTransactionsUpdate/errors");

const notifyTransactionsUpdateEntity = require("../../../../application/entities/notifyTransactionsUpdate");

describe("notifyTransactionsUpdate entity test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with entity dependencies
        }
        let entity = notifyTransactionsUpdateEntity(dependencies)
        await entity({})
        
    });
    
})