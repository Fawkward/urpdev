mp.events.add('playerJoin', (player: PlayerMp) => {
	console.log(
		`[SERVER]: SocialClub: ${player.socialClub} playerName: ${player.name}`
	);
	player.callProc('RPC::S2C:Getting:SocialClub', [player.socialClub]);
});
