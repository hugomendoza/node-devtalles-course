import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repositry.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fsLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);

const mongoLogRepository = new LogRepositoryImpl(
  new MongoLogDatasource()
);

const postgresLogRepository = new LogRepositoryImpl(
  new PostgresLogDatasource()
);

const emailService = new EmailService();

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
    
    // new SendEmailLogs(
    //   emailService,
    //   fileSystemLogRepository
    // ).execute(
    //   ['hams21@gmail.com', 'cronoshimura@yahoo.es']
    // )

    // const emailService = new EmailService(
    //   fileSystemLogRepository
    // );
    // emailService.sendEmailWithFileSystemLogs(
    //   ['hams21@gmail.com', 'cronoshimura@yahoo.es']
    // );

    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () =>  {
    //     const url = 'https://www.google.com/'
    //     new CheckService(
    //       logRepository,
    //       () => console.log(`${url} is ok`),
    //       (error) => console.log(error)
    //     ).execute(url)
    //   }
    // );

    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () =>  {
    //     const url = 'https://www.google.com/'
    //     new CheckServiceMultiple(
    //       [fsLogRepository, mongoLogRepository, postgresLogRepository],
    //       () => console.log(`${url} is ok`),
    //       (error) => console.log(error)
    //     ).execute(url)
    //   }
    // );
  }
}