function validURL(url) {
    var results = "";
    var match;
    if (
        (match = url.match(
            /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im
        ))
    ) {
        results = match[1];
        // if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
        //     result = match[1]
        // }
    }
    results = "http://" + results + "/";
    //console.log(results);
    //! Hash here
    const input = results;

    const crypto = require("crypto");
    const hexString = "hex";
    const hash = crypto.createHash("sha256");
    hash.update(input);
    const id = hash.digest(hexString);
    return id;
}

module.exports = validURL;
