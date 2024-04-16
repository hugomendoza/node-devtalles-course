import 'dotenv/config'
import { Server } from "./presentation/server";
import { MongoDatabase } from './data/mongo-db';
import { envs } from './config/plugins/envs.plugin';
import { PrismaClient } from '@prisma/client';

(async() => {
  main();
})();

async function main () {

  // await MongoDatabase.connect({
  //   mongoUrl: envs.MONGO_URL,
  //   dbName: envs.MONGO_DB_NAME
  // })

  // const prisma = new PrismaClient()
  // const newLog = await prisma.logModel.create({
  //   data: {
  //     message: 'Test message desde PostgresSql',
  //     origin: 'app.ts',
  //     level: 'HIGH'
  //   }
  // })

  // console.log(newLog)

  // const logs = await prisma.logModel.findMany({
  //   where: {
  //     level: 'MEDIUM'
  //   }
  // });
  // console.log(logs)

  //Crear colección = tablas RDS y documentos = raw RDS
  // const newLog = await LogModel.create({
  //   message: 'Test message desde Mongo',
  //   origin: 'app.ts',
  //   level: 'low'
  // })

  // await newLog.save();
  // console.log(newLog)

  // const logs = await LogModel.find();
  // console.log(logs)
  Server.start();
}