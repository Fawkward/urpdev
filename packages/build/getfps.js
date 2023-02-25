"use strict";
mp.events.addProc('RPC::C2S:Fps:Send', (player, fps) => {
    console.log(`${player.name} имеет ${fps} FPS.`);
});
