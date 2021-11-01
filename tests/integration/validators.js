var Validator = require('jsonschema').Validator;
var v = new Validator();
exports.Types = {
    Transaction : {
        "id": "/UnsignedTransaction",
        "type": "object",
        "properties": {
          "data": {
            "type": "string"
          },
          "gasPrice": {
            "type": "number"
          },
          "gasLimit": {
            "type": "number"
          },
          "nonce": {
            "type": "number"
          }
        },
        "required": ["data","gasPrice","gasLimit"]
    },
    CommitedTransaction : {
      "id": "/UnsignedTransaction",
      "type": "object",
      "properties": {
        "txId": {
          "type": "string"
        }
      },
      "required": ["data","gasPrice","gasLimit", "hash"]
  }
}

exports.validate = (object, type) => v.validate(object, type).valid