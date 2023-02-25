function logToServer(message: string): void {
  mp.events.callRemote('C2S:Message:ToServer', message);
}

logToServer('mandrika');
