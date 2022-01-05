class testController {
    test(req, res, next) {
        res.send("ok");
    }
}
module.exports = new testController();
