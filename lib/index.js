// Dependencies
var Protocols = require("protocols");

/**
 * IsSsh
 * Checks if an input value is a ssh url or not.
 *
 * @name IsSsh
 * @function
 * @param {String|Array} input The input url or an array of protocols.
 * @return {Boolean} `true` if the input is a ssh url, `false` otherwise.
 */
function IsSsh(input) {

    if (Array.isArray(input)) {
        return input.indexOf("ssh") !== -1 || input.indexOf("rsync") !== -1;
    }

    if (typeof input !== "string") {
        return false;
    }

    var protocols = Protocols(input);
    input = input.substring(input.indexOf("://") + 3);
    if (IsSsh(protocols)) {
        return true;
    }

    // TODO This probably could be improved :)
    return input.indexOf("@") < input.indexOf(":");
}

module.exports = IsSsh;
