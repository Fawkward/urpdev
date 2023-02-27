import { FPS } from './takeFps';
import { socialClubId } from './takeSocialClub';

mp.events.add('render', () => {
  // Draw to screen.
  mp.game.graphics.drawText(`${FPS.get()}`, [0.03, 0.005], {
    font: 7,
    color: [255, 255, 255, 185],
    scale: [0.7, 0.7],
    outline: true
  });

  mp.events.add('render', () => {
    mp.game.graphics.drawText(`${socialClubId}`, [0.87, 0.005], {
      font: 7,
      color: [255, 255, 255, 185],
      scale: [0.7, 0.7],
      outline: true
    });
  });
});
