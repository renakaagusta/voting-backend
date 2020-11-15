// Import Setting model
Setting = require('../model/settingModel');

var multer = require('multer');
var path = require('path');

const storage = multer.diskStorage({
    destination : path.join(__dirname + './../../'),
    filename: function(req, file, cb){
        console.log(file.originalname);
        cb(null,'procedure.pdf')
    }
});

const upload = multer({
    storage : storage
}).single('file');

// Handle index actions
exports.index = function (req, res) {
    Setting.get(function (err, settings){
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Setting Added Successfully",
            data: settings
        });
    });
};

// Handle create actions
exports.new = function (req, res) {

    var setting = new Setting();
    setting.email.email = req.body.emailEmail;
    setting.email.password = req.body.emailPassword;
    setting.authentication.username = req.body.authenticationUsername;
    setting.authentication.password = req.body.authenticationPassword;
    setting.announcement = req.body.announcement;

    // Save and validate
    setting.save(function (err) {
        if (err)
            res.json(err);
    res.json({
        message: "New Setting Created!",
        data: setting
        });
    });
};

// Handle view actions
exports.view = function (req, res) {
    Setting.findById(req.params.id, function (err, setting) {
        if (err)
            res.send(err);
        res.json({
            message: "settings Detail Loading...",
            data: setting
        });
    });
};

// Handle update actions
exports.update = function (req, res) {
    Setting.findOneAndUpdate(
        {_id: req.params.id},
        {$set: {
            'email.email': req.body.emailEmail,
            'email.password': req.body.emailPassword,
            'authentication.username': req.body.authenticationUsername,
            'authentication.password': req.body.authenticationPassword,
            announcement: new Date(req.body.announcement)
        }})
    .then((setting)=>{
        if(setting) {
            res.json({
                message: "setting updated",
                data: setting
            });
        } else {
            res.json({
                message: "setting not found",
                data: {}
            });
        }
    })
    .catch((err)=>{
        res.json({
            message: "error",
            data: err
        })
    })
};

// Handle upload actions
exports.upload = function (req, res) {
    upload(req, res, err => {
        if(err) throw err;

        res.json({
            message: "success upload"
        })
    })
}

// Handle delete actions
exports.delete = function (req, res) { 
    Setting.remove({
            _id: req.params.id
        }, function (err, setting) {
            if (err)
                res.send(err);
        res.json({
            status: "success",
            message: "Setting Deleted!"
        });
    });
};