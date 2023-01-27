const ssm = require('./services/ssm')();

module.exports.handler = async () => {
  const param = await ssm.getLocalParameter('/demo/param');

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v3.0! Your function executed successfully!',
      param,
    }),
  };
};
