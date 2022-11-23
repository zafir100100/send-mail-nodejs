var MailRepository = require('./../repositories/mail.repository.js');
var GmailCredentials = require('./../config/gmail-credentials.js');

class MailService {
    SendMail(req, res) {
        var mailRepository = new MailRepository(GmailCredentials.SERVICE, GmailCredentials.USERNAME, GmailCredentials.APP_PASSWORD);
        mailRepository.SendMail(GmailCredentials.USERNAME, req.body.to, req.body.subject, req.body.text);
        const response = {
            message: 'Mail sent successfully'
        };
        res.status(200).send(response);
    }
}

module.exports = MailService;