/**
 * Database configuration
 *
 * @author Maykonn Welington Candido<maykonn@outlook.com>
 * @type {{BYTE_SIZE: number, ITERATIONS: number, DIGEST: string, ENCODING: string}}
 */

module.exports = {

    TYPE: require('./supported.json').AWS_DYNAMODB,
    TABLE: "Users"

};