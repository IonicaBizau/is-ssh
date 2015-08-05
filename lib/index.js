// Dependencies
var Protocols = require("protocols");

/**
 * IsSsh
 * Checks if an input value is a ssh url or not.
 *
 * @name IsSsh
 * @function
 * @param {String} input The input url.
 * @return {Boolean} `true` if the input is a ssh url, `false` otherwise.
 */
function IsSsh(input) {

    if (typeof input !== "string") {
        return false;
    }

    var protocols = Protocols(input);
    input = input.substring(input.indexOf("://") + 3);
    if (protocols.indexOf("ssh") !== -1 || protocols.indexOf("rsync") !== -1) {
        return true;
    }

    // TODO This probably could be improved :)
    return input.indexOf("@") < input.indexOf(":");
}

module.exports = IsSsh;
