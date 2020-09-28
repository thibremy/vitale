import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
import { Asset } from './types'

export const create = (event: any): Asset => {
  let resolving: any = null
  let response = null

  return {
    get() {
      return ''
    },
    async resolve() {
      if (!resolving) {
        resolving = getAssetFromKV(event)
      }

      response = await resolving
      return response
    }
  }
}
