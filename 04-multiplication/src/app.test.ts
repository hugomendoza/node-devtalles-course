// process.argv = ['node', 'app.ts', '-b', '10']
// import './app'
import { ServerApp } from './presentation/server-app'

describe('Test App.ts', () => {
  test('should class Server.run with values', async () => {
    
    const serverRunMock = jest.fn()
    ServerApp.run = serverRunMock

    process.argv = ['node', 'app.ts', '-b', '10', '-l', '20', '-s', 'true', '-n', 'test', '-d', 'test']

    await import('./app')

    expect(serverRunMock).toHaveBeenCalledWith({
      base: 10,
      limit: 20,
      showTable: true,
      fileName: 'test',
      fileDestination: 'test'
    })
  
  })
})