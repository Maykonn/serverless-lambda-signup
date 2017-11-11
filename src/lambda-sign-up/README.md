# SignUp Faas


To test you will need de lambda-local npm package installed:

```
cd /var/www/microservices/authentication
lambda-local -l src/lambda-sign-up/index.js -h handler -e api-gateway-events-sample/sign-up.js -E "{\"environment\":\"localhost\"}"
```

To publish the Lambda function Sign-Up you will need the aws-cli. Go to the directory and:

```
zip -r signup.zip .
aws lambda update-function-code --function-name gp-sign-up-lambda --zip-file fileb://signup.zip --region sa-east-1
```
