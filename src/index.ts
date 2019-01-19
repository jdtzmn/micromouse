export interface MicroMouseConfig {
  mouseSpeed: number,
  proximitySpeed: number,
  proximityDistance: number
}

class MicroMouse {
  public mouseSpeed: number
  public proximitySpeed: number
  public proximityDistance: number

  constructor (config: MicroMouseConfig) {
    this.mouseSpeed = config.mouseSpeed
    this.proximityDistance = config.proximityDistance
    this.proximitySpeed = config.proximitySpeed
  }
}

export default MicroMouse
