const virusTotal = require("../function/virusTotal/3VvirusTotal");
require("../function/virusTotal/constants");

class apiController {
    // POST - /api/3block/system/virustotal/v3
    async virustotal(req, res, next) {
        var url = req.body.url;
        //res.json({ msg: "This is CORS-enabled for a Single Route" });
        console.log(url);
        try {
            const a = await virusTotal(url, API_KEY_VIRUSTOTAL[6]);
            console.log("done!");
            console.log(a);
            res.json(a);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new apiController();
