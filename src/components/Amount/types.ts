export interface IAmount  {
    symbol:string,
    onChange: (value: string) => void
    value?: number
}