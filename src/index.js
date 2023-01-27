const ssm = require('./services/ssm')();

module.exports.hello = async (event) => {
  const param = ssm.getLocalParameter('/demo/param');

  console.log(param);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v3.0! Your function executed successfully!'
    }),
  };
};
