import * as GraphQL from './graphql'

export const match = (event: any): boolean => {
  const request: Request = event.request
  const url = new URL(request.url)
  return false
}

export function handleRequest(event: any) {
  GraphQL.handleEvent(event)
}
