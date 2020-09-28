export interface Asset {
  get(): any
  resolve(): Promise<any>
}
