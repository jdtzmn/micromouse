import { default as MicroMouse, MicroMouseConfig } from './'

const mouseConfig: MicroMouseConfig = {
  mouseSpeed: 1,
  proximityDistance: 5,
  proximitySpeed: 30,
}

describe('Index', () => {
  it('should initialize', () => {
    const simulator = new MicroMouse(mouseConfig)
    expect(simulator).toBeDefined()
  })
})
