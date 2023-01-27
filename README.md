# AWS Lambda SSM Extension Test

This is a dumb test app that demos how to use the [AWS SSM Lambda Extension](https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html).

## Usage

### Deployment

```
$ yarn deploy
```

After running deploy, you should see output similar to:

```bash
Deploying aws-lambda-ssm-extension to stage dev (us-east-1)

✔ Service deployed to stack aws-lambda-ssm-extension-dev (112s)

functions:
  hello: aws-node-project-dev-ssmTest (1.5 kB)
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke --function ssmTest
```

Which should result in response similar to the following:

```json
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\"\n}"
}
```
