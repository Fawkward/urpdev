"use strict";
mp.events.add('C2S:Fps:Send', (player, fps) => {
    console.log(`${player.name} имеет ${fps} FPS.`);
});
