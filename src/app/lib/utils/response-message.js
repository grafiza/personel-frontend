export const responseMessage = (status, message, object) => {
  return {
    status: status,
    message: message,
    data: object,
  };
};
