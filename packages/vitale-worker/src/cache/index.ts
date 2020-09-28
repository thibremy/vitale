export function create(event: any) {
  return {
    async resolve() {
      return handleEvent(event)
    }
  }
}

export async function handleEvent(event: any) {
  console.log('cache handle event')
  return
}
