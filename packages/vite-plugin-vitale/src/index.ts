import { createRollupPlugin } from './build'

function createPlugin(userOptions: any = {}): any {

  return {
    rollupInputOptions: {
      plugins: [createRollupPlugin()]
    },
  }
}

export default createPlugin
