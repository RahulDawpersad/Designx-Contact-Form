const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static('public'));

// POST route for form submission
app.post('/send-email', (req, res) => {
    const { fullName, phoneNumber, email, subject, message } = req.body;

    // Create a transporter object using nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'designxfolio@gmail.com', // Replace with your Gmail email address
            pass: 'eplxjtlwnzjrfvkw' // Replace with your Gmail password
        }
    });

    // Email options
    let mailOptions = {
        from: email,
        to: 'designxfolio@gmail.com', // Replace with the recipient's email address
        subject: subject,
        text: `Name: ${fullName}\nPhone Number: ${phoneNumber}\nEmail: ${email}\n\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error: Unable to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Success: Email sent successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
