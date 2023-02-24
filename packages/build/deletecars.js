"use strict";
mp.events.add('C2S:keyDown:delCars', (player, position, radius) => {
    let mad1 = forcars(player.position, 100);
    //console.log(mad1);
    mad1.forEach((x) => {
        x.destroy();
    });
    console.log(`[SERVER] Удалены все машины в радиусе ${radius} метров от игрока ${player.name}.`);
});
function forcars(position, radius) {
    let mand = [];
    mp.vehicles.forEachInRange(position, radius, (vehicle) => {
        mand.push(vehicle);
    });
    return mand;
}
