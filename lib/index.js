/**
 * IsSsh
 * Checks if the input is a ssh url or not.
 *
 * @name IsSsh
 * @function
 * @param {String} input The input url.
 * @return {Boolean} `true` if the input is a ssh url, `false` otherwise.
 */
function IsSsh(input) {
    var index = input.indexOf("://")
      , protocol = input.substring(0, index).split("+")
      ;

    input = input.substring(index + 3);

    if (protocol.indexOf("ssh") !== -1 || protocol.indexOf("rsync") !== -1) {
        return true;
    }

    // TODO This probably could be improved :)
    return input.indexOf("@") < input.indexOf(":");
}

module.exports = IsSsh;
