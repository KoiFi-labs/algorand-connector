//Example of error mapper:
// const errorMapper = {
//     UnauthorizedUserError: 401,
//     CreateUserError:{
//         ExistingUserError:409
//     },
//     CreateKYCError:{
//         UserNotFoundError:404
//     },
//     ListUserWithdrawalInstructionsError:{
//         UserNotFoundError:404,
//         BitexUserNotCreatedError: 409
//     },
//     CreateWithdrawalInstructionError:{
//         UserNotFoundError:404,
//         BitexUserNotCreatedError: 409
//     },
//     CreateTransactionError:{
//         SenderUserNotFoundError:404,
//         ReceiverUserNotFoundError:404,
//         SenderBitexUserNotCreatedError:409,
//         ReceiverBitexUserNotCreatedError:409
//     },
//     default: 500
// }

const errorMapper = {default: 500}

exports.present = function(error){
    let errorMapping = errorMapper[error.constructor.name]
    let bottomError = error
    let errorCode = []
    let def = errorMapper.default
    while(isNaN(errorMapping) && !!errorMapping){
        errorCode.push(bottomError.code)
        bottomError = bottomError.details
        def = errorMapping.default || def
        errorMapping = bottomError && bottomError.constructor && bottomError.constructor.name ? errorMapping[bottomError.constructor.name] : errorMapping.default
        errorMapping = errorMapping || def
        if(!isNaN(errorMapping))
        {
            errorCode.push(bottomError.code)
            error = {code: errorCode.join('-'), message: bottomError.message, details:bottomError.details}
        } //caso borde
        
    }
    return {status:errorMapping || def, data:error}
    
}