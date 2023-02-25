mp.events.add('C2S:Fps:Send', (player: PlayerMp, fps: number) => {
	console.log(`${player.name} имеет ${fps} FPS.`);
});
