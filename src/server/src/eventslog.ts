mp.events.add(
	'playerEnterCheckpoint',
	(player: PlayerMp, checkpoint: CheckpointMp) => {
		console.log(
			`[SERVER] Игрок ${player.name} вошел в зону чекпоинта ${checkpoint}`
		);
	}
);

mp.events.add(
	'playerExitCheckpoint',
	(player: PlayerMp, checkpoint: CheckpointMp) => {
		console.log(
			`[SERVER] Игрок ${player.name} вышел из зоны чекпоинта ${checkpoint}`
		);
	}
);

mp.events.add(
	'playerEnterColshape',
	(player: PlayerMp, colshape: ColshapeMp) => {
		console.log(`[SERVER] Игрок ${player.name} вошел в коллизию`);
	}
);

mp.events.add(
	'playerExitColshape',
	(player: PlayerMp, colshape: ColshapeMp) => {
		console.log(`[SERVER] Игрок ${player.name} вышел из коллизии`);
	}
);

mp.events.add('entityCreated', (entity: EntityMp) => {
	console.log(`[SERVER] Создан новый объект ${entity.type}`);
});

mp.events.add('entityDestroyed', (entity: EntityMp) => {
	console.log(`[SERVER] Удален объект ${entity.type}`);
});

mp.events.add('playerJoin', (player: PlayerMp) => {
	console.log(`[SERVER] Игрок ${player.name} подключился к серверу.`);
});

mp.events.add('playerChat', (player: PlayerMp, message: string) => {
	console.log(`[SERVER] ${player.name}: ${message}`);
});

mp.events.add(
	'playerDeath',
	(player: PlayerMp, reason: HashOrString, killer?: PlayerMp) => {
		console.log(
			`[SERVER] ${player.name} умер. Убийца: ${killer ? killer.name : 'никто'}.`
		);
	}
);

mp.events.add('playerCommand', (player: PlayerMp, command: string) => {
	console.log(`[SERVER] Игрок ${player.name} использовал команду: ${command}`);
});

mp.events.add('vehicleDeath', (vehicle: VehicleMp) => {
	console.log(`[SERVER] Машина ${vehicle.numberPlate} уничтожена.`);
});
