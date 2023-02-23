mp.events.add('logToServer', (log: string) => {
    const parsedLog = JSON.parse(log);
    //console.log.apply(console, parsedLog);
    console.log(parsedLog);
  });