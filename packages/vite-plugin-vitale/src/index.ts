import Voie from 'vite-plugin-voie'
import { createRollupPlugin } from './build'

function createPlugin(userOptions: any = {}): any {
  const voie = Voie({
    pagesDir: userOptions.pagesDir,
    extensions: ['vue', 'ts']
  })

  return {
    rollupInputOptions: {
      plugins: [
        ...(voie.rollupInputOptions?.plugins as any),
        createRollupPlugin()
      ]
    }
  }
}

export default createPlugin
