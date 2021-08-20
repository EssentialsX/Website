import { NuxtAxiosInstance } from '@nuxtjs/axios'

const githubUrl = 'https://api.github.com/repos/EssentialsX/Essentials/releases/latest'
const jenkinsApiBase = 'https://ci-api.essentialsx.net/job/EssentialsX/'
// const jenkinsApiBaseAlt = 'https://ci.lucko.me/job/EssentialsX/'
const jenkinsApiSuffix = 'lastSuccessfulBuild/api/json'

export type JenkinsArtifact = {
  displayPath: string
  fileName: string
  relativePath: string
}

export type JenkinsBuild = {
  commit?: string
  artifacts: JenkinsArtifact[]
  number: number
  displayName: string
}

export type GithubReleaseAsset = {
  name: string
  // eslint-disable-next-line camelcase
  browser_download_url: string
}

export type GithubRelease = {
  // eslint-disable-next-line camelcase
  tag_name: string
  assets: GithubReleaseAsset[]
}

export async function fetchLatestStable(
  axios: NuxtAxiosInstance
): Promise<GithubRelease> {
  return await axios.$get(githubUrl)
}

export async function fetchLatestDev(
  axios: NuxtAxiosInstance
): Promise<JenkinsBuild> {
  return await axios.$get(`${jenkinsApiBase}${jenkinsApiSuffix}`)
}
