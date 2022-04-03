export type PadsInterface = {
    id:number,
    padsIsOn:boolean,
    color:string,
    name:string,
    sound:string
}

export interface PropsPad {
    pad: PadsInterface;
    handlePadClick: (id: number, padIsOn:boolean) => void
}