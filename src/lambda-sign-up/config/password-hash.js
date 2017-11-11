/**
 * Password encryption configuration
 *
 * @author Maykonn Welington Candido<maykonn@outlook.com>
 * @type {{BYTE_SIZE: number, ITERATIONS: number, DIGEST: string, ENCODING: string}}
 */

module.exports = {
    BYTE_SIZE: 128, // increase/decrease difficult to rainbow tables
    ITERATIONS: 4096, // increase/decrease difficult to brute force
    DIGEST: "sha512", // algorithm to hash the password and the salt,
    ENCODING: "hex" // encoding string
};