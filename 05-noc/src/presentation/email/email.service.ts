import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

export interface SendMailoptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachement[]
}

export interface Attachement {
  filename: string;
  path: string;
}

export class EmailService {

  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY
    }
  })

  constructor() {}

  async sendEmail(options: SendMailoptions):Promise<boolean> {
    
    const { to, subject, htmlBody, attachments = [] } = options
    
    try {
      const  sentInformation = await this.transporter.sendMail({
        to,
        subject,
        html: htmlBody,
        attachments
      })

      const log = new LogEntity({
        level: LogSeverityLevel.low,
        message: 'Email sent',
        origin: 'email.service.ts',
      })

      return true
    } catch (error) {

      const log = new LogEntity({
        level: LogSeverityLevel.high,
        message: 'Email not sent',
        origin: 'email.service.ts',
      })

      return false
    }
  }

  async sendEmailWithFileSystemLogs(to: string | string[]) {
    const subject = 'Logs del servidor'
    const htmlBody = `
      <h1>Logs del servidor</h1>
      <p>Logs del servidor</p>
      <p>Logs del servidor</p>
    `

    const attachements:Attachement[] = [
      { filename: 'logs-all.log', path: './logs/logs-all.log' },
      { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
      { filename: 'logs-high.log', path: './logs/logs-high.log' }
    ]

    return this.sendEmail({ to, subject, htmlBody, attachments: attachements })
  }
}