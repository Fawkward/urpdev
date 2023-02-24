"use strict";
mp.events.add('playerEnterCheckpoint', (player, checkpoint) => {
    console.log(`[SERVER] Игрок ${player.name} вошел в зону чекпоинта ${checkpoint}`);
});
mp.events.add('playerExitCheckpoint', (player, checkpoint) => {
    console.log(`[SERVER] Игрок ${player.name} вышел из зоны чекпоинта ${checkpoint}`);
});
mp.events.add('playerEnterColshape', (player, colshape) => {
    console.log(`[SERVER] Игрок ${player.name} вошел в коллизию`);
});
mp.events.add('playerExitColshape', (player, colshape) => {
    console.log(`[SERVER] Игрок ${player.name} вышел из коллизии`);
});
mp.events.add('entityCreated', (entity) => {
    console.log(`[SERVER] Создан новый объект ${entity.type}`);
});
mp.events.add('entityDestroyed', (entity) => {
    console.log(`[SERVER] Удален объект ${entity.type}`);
});
mp.events.add('playerJoin', (player) => {
    console.log(`[SERVER] Игрок ${player.name} подключился к серверу.`);
});
mp.events.add('playerChat', (player, message) => {
    console.log(`[SERVER] ${player.name}: ${message}`);
});
mp.events.add('playerDeath', (player, reason, killer) => {
    console.log(`[SERVER] ${player.name} умер. Убийца: ${killer ? killer.name : 'никто'}.`);
});
mp.events.add('playerCommand', (player, command) => {
    console.log(`[SERVER] Игрок ${player.name} использовал команду: ${command}`);
});
mp.events.add('vehicleDeath', (vehicle) => {
    console.log(`[SERVER] Машина ${vehicle.numberPlate} уничтожена.`);
});
