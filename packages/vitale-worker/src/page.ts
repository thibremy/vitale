import * as CfAsset from './asset/cloudflare-asset'

export const match = (request: Request): boolean => {
  return true
}

export function handleEvent(event: any) {
  const asset = CfAsset.create(event)
  
  return new Response(JSON.stringify({ page: true }), { status: 200 })
}
