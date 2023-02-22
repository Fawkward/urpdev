mp.keys.bind(0x71, false, () => { 
    mp.events.callRemote('client:deleteVehicles', mp.players.local.position, 100);
});