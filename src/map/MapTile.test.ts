import { default as MapTile, TileData } from './MapTile'

describe('MapTile', () => {
  it('should initialize with some tileData', () => {
    const tileData: TileData = {
      top: true,
      bottom: false,
      left: false,
      right: false
    }
    const tile = new MapTile(tileData)
    expect(tile).toBeDefined()
    expect(tile.top).toBe(true)
    expect(tile.bottom).toBe(false)
  })
})
