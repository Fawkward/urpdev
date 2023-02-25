import { FPS } from './takefps';

mp.events.add('render', () => {
  // Draw to screen.
  mp.game.graphics.drawText(`${FPS.get()}`, [0.03, 0.005], {
    font: 7,
    color: [255, 255, 255, 185],
    scale: [1.0, 1.0],
    outline: true
  });
});
