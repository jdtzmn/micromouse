export interface TileData {
  top: boolean,
  bottom: boolean,
  left: boolean,
  right: boolean
}

export default class MapTile {
  public top: boolean
  public bottom: boolean
  public left: boolean
  public right: boolean

  constructor (tileData: TileData) {
    this.top = tileData.top
    this.bottom = tileData.bottom
    this.left = tileData.left
    this.right = tileData.right
  }
}
