module.exports = (error, request, response, next) => {
  console.log('### ERROR HANDLER ###');
  console.log('error', error);
  response.sendStatus(500);
};
