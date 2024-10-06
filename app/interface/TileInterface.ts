export interface TileInterface {
    index: number
    title: string
    type: TileEnums
    metaData?: LandMeta | StartMeta
}

export enum TileEnums {
    Foreign = 'Foreign',
    Korea = 'KoreaLand',
    Start = 'Start',
    GoldenKey = 'GoldenKey',
    DesertIsland = 'DesertIsland',
}

interface LandMeta {
    landPrice: number,
    villaPrice?: number,
    buildingPrice?: number,
    hotelPrice?: number,
    landToll?: number,
    villaToll?: number,
    buildingToll?: number,
    hotelToll?: number
}

interface StartMeta {
    salary: number
}