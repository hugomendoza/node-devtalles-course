import nodemailer from 'nodemailer'
import { EmailService, SendMailoptions } from "./email.service"

describe('EmailService', () => {

  const emailService = new EmailService()
  const mockSendMail = jest.fn()

  nodemailer.createTransport = jest.fn().mockReturnValue({
    sendMail: mockSendMail
  })

  test('should send email', async () => {

    const options:SendMailoptions = {
      to: 'hams21@gmailer.es',
      subject: 'Test',
      htmlBody: '<h1>test</h1>'
    }
    
    await emailService.sendEmail(options)
    
    expect (mockSendMail).toHaveBeenCalledWith({
      attachments: expect.any(Array),
      html: "<h1>test</h1>",
      subject: "Test",
      to: "hams21@gmailer.es",
    })
  })

  test('should send email with attachments', async () => {

    const email = 'fernando@gmailer.es'
    await emailService.sendEmailWithFileSystemLogs(email)
    expect(mockSendMail).toHaveBeenCalledWith({
      to: email,
      subject: 'Logs del servidor',
      html: expect.any(String),
      attachments: expect.arrayContaining([
        { filename: 'logs-all.log', path: './logs/logs-all.log' },
        { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
        { filename: 'logs-high.log', path: './logs/logs-high.log' }
      ])
    })
  })
})