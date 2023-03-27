

export interface iTimeline {
    clan: string
    buildOrder: iMonth[]
  }
  
export interface iMonth {
    name: string
    number: number
    year: number
    activated: boolean

}

export enum eOrderType {
    BUILDING,
    RELIC,
    LORE,
    SPECIAL,
    NOTE
}

export interface iOrder {
    type: eOrderType,
    data: any
}
