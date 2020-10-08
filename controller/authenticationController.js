const username = "himatipa"
const password = "@pemira2020"

// Handle index actions
exports.login = function (req, res) {
    if ((req.body.username==username) && (req.body.password==password)) { 
        res.json({
            status: "success"
        });
    } else {
        res.json({
            status: "failed"
        });
    }
};