"use strict";
mp.events.add('C2S:keyDown:delCars', (player, position, radius) => {
    let vehList = forCars(player.position, 100);
    vehList.forEach((x) => {
        x.destroy();
    });
    console.log(`[SERVER] Удалены все машины в раsдиусе ${radius} метров от игрока ${player.name}.`);
});
function forCars(position, radius) {
    let vehList = [];
    mp.vehicles.forEachInRange(position, radius, (vehicle) => {
        vehList.push(vehicle);
    });
    return vehList;
}
