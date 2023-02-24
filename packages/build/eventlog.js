"use strict";
mp.events.add('logToServer', (log) => {
    const parsedLog = JSON.parse(log);
    //console.log.apply(console, parsedLog);
    console.log(parsedLog);
});
