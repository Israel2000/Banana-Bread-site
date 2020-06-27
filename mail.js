const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'a1e7c3807c5b9102d40fc5858534c3fd-468bde97-36c8b092',
        domain: 'sandbox47dd0585e3fd48f2ad5ff18aec951f7b.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    // callback(cb)
    const mailOptions = {
        from: email,
        to: 'ibelete2000@gmail.com',
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;
// subject
// text
// from
