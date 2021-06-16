const RESULT = {
    SUCCESS: {code: 10000, msg: 'Request Success'},
    CREATE_SUCCESS: {code: 10001, msg: 'Created Successfully'},
    UPDATE_SUCCESS: {code: 10002, msg: 'Updated Successfully'},
    DELETE_SUCCESS: {code: 10003, msg: 'Deleted Successfully'},
    NO_DATA: {code: 10004, msg: ''},
    ARG_ERROR: {code: 40000, msg: 'Parameter Error'},
    NO_LOGIN: {code: 40001, msg: 'Not Logined In'},
    FORBIDDEN: {code: 40003, msg: 'No Access'},
    NOT_FOUND: {code: 40004, msg: 'Not Found'},
    UPLOAD_ERR: {code: 40005, msg: 'Upload Failed'},
    INTERNAL_ERROR: {code: 50000, msg: 'Server Internal Error'},
    FAILD: {code: 50003, msg: 'Request Failed'},
    TOKEN_NO_FIND: {code: 60001, msg: 'Token Not Found, Please Login In Again'},
    TOKEN_ERR: {code: 60002, msg: 'The Token Is Invalid, Please Login In Again'},
}

export default RESULT;