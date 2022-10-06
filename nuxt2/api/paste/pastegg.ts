import { NuxtAxiosInstance } from '@nuxtjs/axios'

export type PasteGGFile = {
  id: string
  name: string
  // eslint-disable-next-line camelcase
  highlight_language: string | null
  content: {
    format: string
    value: string
  }
}

export type PasteGGGetResult = {
  id: string
  name: string | null
  description: string | null
  visibility: 'public' | 'unlisted' | 'private'
  // eslint-disable-next-line camelcase
  created_at: string
  // eslint-disable-next-line camelcase
  updated_at: string
  files: PasteGGFile[]
}

export type PasteGGSuccessResponse<Result> = {
  status: 'success'
  result: Result
}

export type PasteGGErrorResponse = {
  status: 'error'
  error: string
  message?: string | null
}

export type PasteGGGetPasteResponse =
  | PasteGGSuccessResponse<PasteGGGetResult>
  | PasteGGErrorResponse

export async function fetch(
  axios: NuxtAxiosInstance,
  id: string,
  host: string = 'api.paste.gg'
): Promise<PasteGGGetPasteResponse> {
  if (!host.startsWith('https://') && !host.startsWith('http://')) {
    host = `https://${host}`
  }
  return await axios.$get(`${host}/v1/pastes/${id}?full=true`)
}
