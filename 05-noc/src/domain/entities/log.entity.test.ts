import { LogEntity, LogSeverityLevel } from "./log.entity"

describe('LogEntity', () => {
  
  const dataObj = {
    origin: 'log.entity.test.ts',
    message: 'Hola Mundo',
    level: LogSeverityLevel.high
  }

  test('should create a LogEntity instance', () => {

    const log = new LogEntity(dataObj)

    expect(log).toBeInstanceOf(LogEntity)
    expect(log.message).toBe(dataObj.message)
    expect(log.level).toBe(dataObj.level)
    expect(log.origin).toBe(dataObj.origin)
    expect(log.createdAt).toBeInstanceOf(Date)
  })

  test('should create a LogEntity instance from json', () => {
    
    const json = `{"level":"high","message":"https://www.localhost:3000 is not TypeError: fetch failed","createdAt":"2024-04-12T17:51:35.022Z","origin":"check-service.ts"}`
    
    const log = LogEntity.fromJson(json)

    expect(log).toBeInstanceOf(LogEntity)
    expect(log.message).toBe("https://www.localhost:3000 is not TypeError: fetch failed")
    expect(log.level).toBe(LogSeverityLevel.high)
    expect(log.origin).toBe("check-service.ts")
    expect(log.createdAt).toBeInstanceOf(Date)

  })

  test('should create a LogEntity instance from object', () => {
    const log = LogEntity.fromObject(dataObj)

    expect(log).toBeInstanceOf(LogEntity)
    expect(log.message).toBe(dataObj.message)
    expect(log.level).toBe(dataObj.level)
    expect(log.origin).toBe(dataObj.origin)
    expect(log.createdAt).toBeInstanceOf(Date)
  })
})