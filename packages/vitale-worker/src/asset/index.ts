import * as CfAsset from './cloudflare-asset'

export const create = (event: any) => {
  return CfAsset.create(event)
}
