/**
 * Function configuration
 *
 * @author Maykonn Welington Candido<maykonn@outlook.com>
 * @type {{BYTE_SIZE: number, ITERATIONS: number, DIGEST: string, ENCODING: string}}
 */

module.exports = {

  AWS_ACCOUNT_ID: "123412341234",
  CLI_PROFILE: "default",
  REGION: "sa-east-1",
  BUCKET: "bucket",
  MAX_AGE: "10",
  IDENTITY_POOL_NAME: "LambdAuth",
  DEVELOPER_PROVIDER_NAME: "login.mycompany.myapp",
  EXTERNAL_NAME: "My Authentication",
  EMAIL_SOURCE: "email@example.com",
  VERIFICATION_PAGE: "http://bucket.s3.amazonaws.com/verify.html",
  RESET_PAGE: "http://bucket.s3.amazonaws.com/reset.html",
  PASSWORD: require('./password-hash'),
  DATABASE: require('./database/config')

};