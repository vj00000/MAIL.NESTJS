import { Injectable } from '@nestjs/common';
let nodemailer = require('nodemailer');

@Injectable()
export class SendMailService {
    public async sendEmail() {
        const transporter = nodemailer.createTransport({
          host: process.env.hostName,
          secure: false,
          port: 587,
          auth: {
            user: process.env.user,
            pass: process.env.password,
          },
        });

        const options = {
            from:  process.env.userMail,
            to: 'YOURMAILID',
            subject: 'TESTING MAILING SERIVICE',
            text: `TESTING TESTING`,
          };
      
          await transporter.sendMail(options);
        }
}
