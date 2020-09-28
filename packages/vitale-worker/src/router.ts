export type Router = {
  middlewares: [],
}

export const router = {}

export const create = (event: any): Router => {
  const middlewares: any[] = []

  const use  = () => {
    middlewares.push()
  }

  const resolve = () => {
    
  }

  return {
    use,
    resolve,
  }
}

