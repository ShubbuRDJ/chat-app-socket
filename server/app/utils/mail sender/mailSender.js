const nodemailer = require('nodemailer');

// Create a transporter using gmail SMTP server
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD
  }
});

// Function to send a password reset email
const sendPasswordResetEmail = async (toEmail) => {
  try {
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: toEmail,
      subject: 'Password Reset OTP',
      html: `OTP <h2>${process.env.BYPASS_OTP}</h2> for reset your password.`
    });
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendPasswordResetEmail;
