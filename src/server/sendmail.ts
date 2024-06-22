"use server";
const nodemailer = require("nodemailer");

export default async function sendMail(values: any) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: "wobbethan@gmail.com",
    subject: `${values.subject} (Portfolio)`,
    text: `${values.name} - ${values.email} \n${values.message}`,
  };
  await transporter.sendMail(mailOptions);
}
