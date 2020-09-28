import * as fs from 'fs'
import * as path from 'path'

const WORKER_DIR = [__dirname, '../node_modules/@thibremy/vitale-worker/']

const WORKER_FILES = ['dist/index.js', 'package.json']

const WORKER_SCRIPT = path.join(...WORKER_DIR, WORKER_FILES[0])
const WORKER_PACKAGE_JSON = path.join(...WORKER_DIR, WORKER_FILES[1])

// const rewrite = (src: any, facadeModuleId: any, renameProps: any) => {
//   return Object.values(src).reduce((bundle, file: any) => {
//     if (file.facadeModuleId.endsWith(facadeModuleId)) {
//       Object.assign(file, renameProps)
//       console.log(file)
//       return bundle
//     }
//     return bundle
//   }, src)
// }

export function createRollupPlugin(options?: any): any {
  return {
    name: 'vitale',
    generateBundle(options: any, bundle: any) {
      this.emitFile({
        type: 'asset',
        fileName: 'dist-worker/dist/index.js',
        source: fs.readFileSync(WORKER_SCRIPT)
      })

      this.emitFile({
        type: 'asset',
        name: 'dist-worker/package.json',
        fileName: 'dist-worker/package.json',
        source: fs.readFileSync(WORKER_PACKAGE_JSON)
      })
    }
  }
}
