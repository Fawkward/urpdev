function logToServer(message: string): void {
  mp.events.callRemote('logToServer', message);
}

logToServer('mandrika');
