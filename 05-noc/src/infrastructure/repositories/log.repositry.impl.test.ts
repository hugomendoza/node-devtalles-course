import { LogDatasource } from "../../domain/datasources/log.datasource"
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity"
import { LogRepositoryImpl } from "./log.repositry.impl"

describe('LogRepositoryImpl', () => {

  const mockLogDatasource = {
    saveLog: jest.fn(),
    getLogs: jest.fn()
  }

  const logRepository = new LogRepositoryImpl(mockLogDatasource)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('saveLog should call the datasource with arguments', async () => {
    const log = {
      level: 'low',
      message: LogSeverityLevel.high,
    } as LogEntity

    await logRepository.saveLog(log)

    expect(mockLogDatasource.saveLog).toHaveBeenCalledWith(log)
  })

  test('getLogs should call the datasource with arguments', async () => {
    await logRepository.getLogs(LogSeverityLevel.low)
    expect(mockLogDatasource.getLogs).toHaveBeenCalledWith(LogSeverityLevel.low)
  })
})