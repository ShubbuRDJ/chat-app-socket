module.exports.responseData = {
  success: (data, message, statusCode) => {
    return {
      results: {
        success: true,
        data,
        message,
        statusCode
      }
    };
  },
  failure: (message, statusCode) => {
    return {
      results: {
        success: false,
        message,
        statusCode
      }
    };
  }
};
