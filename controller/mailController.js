var nodemailer = require('nodemailer');
Setting = require('../model/settingModel');

// Handle index actions
exports.send = function (req, res) {
    Setting.get(function(err, settings) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }

        const setting = settings[0];

        var votingCardImage = new Buffer(req.body.image.split("base64,")[1], "base64");

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: setting.email.email,
                pass: setting.email.password
            }
        });

        var mailOptions = {
            from: setting.email.email,
            to: req.body.to,
            subject: 'PEMIRA HIMATIPA UGM 2020',
            html: '<h1>Halo '+req.body.name+'</h1><p>Kami mengundang anda untuk mengikuti PEMIRA HIMATIPA UGM 2020. Berikut kami lampirkan kartu pemilihan anda beserta dengan tata cara pemilihan.</p>',
            attachments: [
                {
                    filename: 'Kartu Pemilihan_'+req.body.name+'_'+req.body.nim+'.png',
                    content: votingCardImage
                }
            ]
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) throw err;
            
            res.json({
                message: "New Email sent!",
            });
        });
    })
};