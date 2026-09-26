interface Env {
  ASSETS: {
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response(null, { status: 405 })
    }

    const url = new URL(request.url)

    return new Response(
      request.method === 'HEAD'
        ? null
        : (await env.ASSETS.fetch(url.origin + '/404')).body,
      {
        status: 404,
        headers: {
          'Cache-Control': 'public, max-age=0, must-revalidate',
          'Content-Type': 'text/html',
        },
      },
    )
  },
}
