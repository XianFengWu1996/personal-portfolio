// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { isString } from 'lodash';
import nodemailer from 'nodemailer';
import { sendConfirmationMessage, sendEmailWithMessage } from '@/helper/Email';

type Data = {
  name?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const requestMethod = req.method;

  const body = JSON.parse(req.body);

  const { name, email, subject, message }: RequestData = body;

  if (requestMethod === 'POST') {
    if (
      !isString(name) ||
      !isString(email) ||
      !isString(subject) ||
      !isString(message)
    ) {
      return res.status(400).json({
        message: 'Missing some required fields',
      });
    }

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    Promise.all([
      sendEmailWithMessage(body, transporter),
      sendConfirmationMessage(body, transporter),
    ])
      .then(() => {
        res.status(200).json({});
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(405); // send back a 405 error code for Method not allowed
    res.end();
  }
}
