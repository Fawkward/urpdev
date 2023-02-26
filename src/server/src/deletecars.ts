mp.events.add(
	'C2S:keyDown:delCars',
	(player: PlayerMp, position: Vector3Mp, radius: number) => {
		let vehList = forCars(player.position, 100);
		vehList.forEach((x: VehicleMp) => {
			x.destroy();
		});
		console.log(
			`[SERVER] Удалены все машины в раsдиусе ${radius} метров от игрока ${player.name}.`
		);
	}
);

function forCars(position: Vector3Mp, radius: number): VehicleMp[] {
	let vehList: VehicleMp[] = [];
	mp.vehicles.forEachInRange(position, radius, (vehicle: VehicleMp) => {
		vehList.push(vehicle);
	});
	return vehList;
}
