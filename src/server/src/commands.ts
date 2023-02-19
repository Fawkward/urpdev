mp.events.addCommand('veh', (player : PlayerMp, _ , ...args) => {
    if (!args.some(x => x)){ 
        player.outputChatBox("/veh <car> <color1> <color2> <numberPlate>");
        return;
    }
    let v = mp.vehicles.new(args[0], player.position, {
        numberPlate : args[3],
    });
    v.setColor(parseInt(args[1]), parseInt(args[2]));
    player.putIntoVehicle(v,0);
    player.outputChatBox(`${args[0]} успешно заспавнен`);
    console.log('[SERVER] tpcoord was called');
});