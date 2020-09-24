export const match = (request: Request): boolean => {
  return true
}

export function handleRequest(request: Request) {
  return fetch(request)
}
