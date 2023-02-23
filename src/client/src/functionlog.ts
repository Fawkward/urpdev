function sendLogToServer(...args: any[]) {
    const log = args.map(arg => JSON.stringify(arg)).join(' ');
    mp.events.call('logToServer', "log"); // argument log without ""
  }
  
mp.keys.bind(0x71, false, () => { // привязываем нажатие клавиши F2 к удалению машин
    sendLogToServer();
    
  });
  
  
// mp.events.add("playerChat", (text) => {
//     mp.gui.chat.push(`You wrote ${text} in chat.`);
// });



