const express = require("express");
const router = express.Router();

const MailService = require("./../services/mail.service.js");

router.post('/send-mail', function (req, res) {
    var mailService = new MailService(req, res);
    mailService.SendMail(req, res);   
});

module.exports = router;