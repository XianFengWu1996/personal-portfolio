import { Transporter } from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';
import handlebars from 'handlebars';
import fs from 'fs';
import { promisify } from 'util';
import path from 'path';

const readFile = promisify(fs.readFile);

export const sendEmailWithMessage = async (
  data: RequestData,
  transporter: Transporter
) => {
  let mailOption: MailOptions = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_RECIPIENT,
    // to: '', // testing front end remove later
    subject: 'Personal Portfolio Contact Form Message',
    html: `
          <div>Sender: ${data.name}</div>
          <div>Email: ${data.email}</div>
          <div>Subject: ${data.subject}</div>
          <div>Message: ${data.message}</div>
        `,
  };

  try {
    await transporter.sendMail(mailOption);
  } catch (error) {
    console.log(error);
    throw new Error('Opps, failed to send message');
  }
};

export const sendConfirmationMessage = async (
  data: RequestData,
  transporter: Transporter
) => {
  let originalHtmlFile = await readFile(
    path.join(
      process.cwd(),
      '/src/pages/api/email/confirmation/confirmation.handlebars'
    ),
    'utf-8'
  );

  let template = handlebars.compile(originalHtmlFile);
  let templateData = {
    name: data.name,
    myName: process.env.NODEMAILER_MYNAME,
  };
  let templateHtml = template(templateData);

  let mailOption: MailOptions = {
    from: process.env.NODEMAILER_USER,
    to: data.email,
    subject: 'Message Received',
    html: templateHtml,
  };

  try {
    await transporter.sendMail(mailOption);
  } catch (error) {
    throw new Error('Opps, failed to send confirmation message');
  }
};
