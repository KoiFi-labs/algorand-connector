const {validTrue, validFalse, errored, assertable, responder} = require("../../../common/helpers");
const { GetAppError } = require("../../../../application/entities/getApp/errors");

const getAppEntity = require("../../../../application/entities/getApp");

describe("getApp entity test", () => {
    test("should be implemented", async () => {
        let dependencies = {
            //complete with entity dependencies
        }
        let entity = getAppEntity(dependencies)
        await entity({})
        
    });
    
})