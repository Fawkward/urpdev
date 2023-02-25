class FPSCalculator {
  private fps = 0;

  constructor() {
    let lastFrameCount = this.getFrameCount();
    setInterval(() => {
      this.fps = this.getFrameCount() - lastFrameCount;
      lastFrameCount = this.getFrameCount();
    }, 1000);
  }

  public get(): number {
    return this.fps;
  }

  private getFrameCount(): number {
    return mp.game.invoke('0xFC8202EFC642E6F2') as number;
  }
}

export const FPS = new FPSCalculator();

mp.keys.bind(0x71, true, () => {
  mp.events.callRemoteProc('RPC::C2S:Fps:Send', FPS.get());
});
