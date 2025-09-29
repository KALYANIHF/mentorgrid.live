const nodemailer = require("nodemailer");
const sendEmail = async (email, message) => {
  // send email using node mailer
  const transpoter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const data = await transpoter.verify();
  if (data) {
    (async () => {
      try {
        const info = await transpoter.sendMail({
          from: '"Example Team" <marve.sm.24@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Reset your password with auth token", // Subject line
          text: "Check the below details to proceed", // plain text body
          html: message, // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      } catch (err) {
        console.error("Error while sending mail", err);
      }
    })();
  } else {
    console.log("Error while verifying SMTP connection", data);
  }
};
module.exports = sendEmail;
