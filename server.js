const express = require('express');
const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');

const PORT = 8081;

// Data parsing: client send data
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// email, subject, text
app.post('/email', (req, res) => {
    // TODO:
    //send email here
    const { subject, email, text } = req.body
    console.log('Data: ', req.body);

    sendMail(email, subject, text, function (err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.json({ message: 'Email send!!!' });
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.static(__dirname, 'index.html'));
    res.sendFile(path.join(__dirname, 'styles', 'style.css'));

});

app.listen(PORT, () => log('Server is starting on PORT, ', 8081));
