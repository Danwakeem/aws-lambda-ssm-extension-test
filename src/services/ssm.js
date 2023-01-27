const http = require('http');

const SSM = () => {
  // Make http request
  const request = (name) => new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: process.env.PARAMETERS_SECRETS_EXTENSION_HTTP_PORT,
      path: `/systemsmanager/parameters/get?name=${name}&withDecryption=true`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Aws-Parameters-Secrets-Token': process.env.AWS_SESSION_TOKEN,
      },
    };

    const req = http.request(options, (res) => {
      res.on('data', (d) => {
        try {
          const json = JSON.parse(d.toString());
          resolve(json);
        } catch(error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });

  const getLocalParameter = async (name) => {
    const response = await request(name);
    return response;
  }

  return {
    getLocalParameter,
  };
};

module.exports = SSM;
