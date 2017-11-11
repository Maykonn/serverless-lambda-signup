var crypto = require('crypto');

module.exports = {

    hash: (password) => {

        const saltHex = crypto.randomBytes(global.config.PASSWORD.BYTE_SIZE)
            .toString(global.config.PASSWORD.ENCODING);

        const derivedKey = crypto.pbkdf2Sync(
            password,
            saltHex,
            global.config.PASSWORD.ITERATIONS,
            global.config.PASSWORD.BYTE_SIZE,
            global.config.PASSWORD.DIGEST
        );

        return {
            salt: saltHex,
            password: derivedKey.toString(global.config.PASSWORD.ENCODING)
        };

    }
};