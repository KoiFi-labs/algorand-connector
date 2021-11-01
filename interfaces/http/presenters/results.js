
const responseMapper = {
    //Example of entry: the key is the retuned class name, and the function maps the object into the returned object
    //CreateKYC: (uocReturnedObject) => (uocReturnedObject),
    default: o =>o
}

exports.present = function(data){
    let mapper = data && data.constructor?responseMapper[data.constructor.name]:null
    mapper = mapper?mapper:responseMapper.default
    
    return {status: 200, data: mapper(data)}
}