import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repositry.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);

// export class Server {
//   public static start() {
//     console.log('Server started...');
//     CronService.createJob(
//       '*/5 * * * * *',
//       () =>  {
//         const url = 'https://www.localhost:3000'
//         new CheckService(
//           fileSystemLogRepository,
//           () => console.log(`${url} is ok`),
//           (error) => console.log(error)
//         ).execute(url)
//         // new CheckService().execute('http://localhost:3000/')
//       }
//     );
//   }
// }

export class Server {
  public static start() {
    console.log('Server started...');

    // * mandar email
    const emailService = new EmailService();
    emailService.sendEmail({
      to: 'hams21@gmail.com',
      subject: 'Test',
      htmlBody: `
        <h1>Test</h1>
        <p>Test</p>
        <p>Test</p>
      `
    })

    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () =>  {
    //     const url = 'https://www.localhost:3000'
    //     new CheckService(
    //       fileSystemLogRepository,
    //       undefined,
    //       undefined
    //     ).execute(url)
    //     // new CheckService().execute('http://localhost:3000/')
    //   }
    // );
  }
}