import * as fs from 'fs'
import * as path from 'path'

export function createRollupPlugin(options?: any): any {
  return {
    name: 'vitale',
    generateBundle() {
      this.emitFile({ 
        type: 'asset', 
        fileName: 'worker.js', 
        source: fs.readFileSync(path.resolve(__dirname, '../node_modules/@thibremy/vitale-worker/dist/index.js'))
      })
    },
  }
}
