var nodemailer = require('nodemailer');

class MailRepository {
    constructor(service, user, password) {
        this.service = service;
        this.user = user;
        this.password = password;
    }
    SendMail(from, to, subject, text) {
        var transporter = nodemailer.createTransport({
            service: this.service,
            auth: {
                user: this.user,
                pass: this.password
            }
        });
        var mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: text
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}

module.exports = MailRepository;