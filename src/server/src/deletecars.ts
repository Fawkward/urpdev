mp.events.add(
	'C2S:keyDown:delCars',
	(player: PlayerMp, position: Vector3Mp, radius: number) => {
		let mad1 = forcars(player.position, 100);
		//console.log(mad1);
		mad1.forEach((x: VehicleMp) => {
			x.destroy();
		});
		console.log(
			`[SERVER] Удалены все машины в радиусе ${radius} метров от игрока ${player.name}.`
		);
	}
);

function forcars(position: Vector3Mp, radius: number): VehicleMp[] {
	let mand: VehicleMp[] = [];
	mp.vehicles.forEachInRange(position, radius, (vehicle: VehicleMp) => {
		mand.push(vehicle);
	});
	return mand;
}
