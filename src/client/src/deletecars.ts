mp.keys.bind(0x58, false, () => { // 0x58 - 'X'
    mp.events.callRemote('C2S:keyDown:delCars', mp.players.local.position, 100);
});