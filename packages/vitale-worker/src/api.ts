export const match = (request: Request): boolean => {
  const url = new URL(request.url)
  return true
}

export function handleRequest(request: Request) {
  return new Response(JSON.stringify({ api: true }), { status: 200 })
}
