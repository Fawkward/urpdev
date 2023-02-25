"use strict";
mp.events.add('playerJoin', (player) => {
    console.log(`[SERVER]: SocialClub: ${player.socialClub} playerName: ${player.name}`);
    player.callProc('RPC::S2C:Getting:SocialClub', [player.socialClub]);
});
