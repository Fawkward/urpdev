"use strict";
mp.events.addCommand('veh', (player, _, ...args) => {
    if (!args.some(x => x)) {
        player.outputChatBox("/veh <car> <color1> <color2> <numberPlate>");
        return;
    }
    let v = mp.vehicles.new(args[0], player.position, {
        numberPlate: args[3],
    });
    v.setColor(parseInt(args[1]), parseInt(args[2]));
    player.putIntoVehicle(v, 0);
    player.outputChatBox(`${args[0]} успешно заспавнен`);

    console.log(`[SERVER] veh был вызван огроком ${player.name}`);
});
mp.events.addCommand('tpcoord', (player, _, ...args) => {
    if (args.length < 3) {
        player.outputChatBox("/tpcoord <x> <y> <z>");
        return;
    }
    let x = args.map(Number);
    if (player.vehicle) {
        let car = player.vehicle;
        player.position = new mp.Vector3(x[0], x[1], x[2]);
        car.position = new mp.Vector3(x[0], x[1], x[2]);
        player.putIntoVehicle(car, 0);
    }
    player.position = new mp.Vector3(x[0], x[1], x[2]);
    player.outputChatBox(`Вы были успешно телепортированы на координаты ${x[0]} ${x[1]} ${x[2]}`);
    
    console.log(`[SERVER] tpcoord был вызван игроком ${player.name}`);
});

mp.events.addCommand('log', (player, _, ...args) => {
    console.log(`${player.name}: ${_}`);
});
