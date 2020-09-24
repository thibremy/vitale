export const match = (request: Request): boolean => {

  return true
}

export function handleRequest(request: Request) {
  return new Response(JSON.stringify({ page: true }), { status: 200 })
}
