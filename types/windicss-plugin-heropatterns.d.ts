declare module '@windicss/plugin-heropatterns' {
  import { PluginWithOptions } from 'windicss/types/interfaces'

  const _default: PluginWithOptions<{
    variants?: string[] | undefined
    patterns?: string[] | undefined
    colors?: { [key: string]: string } | undefined
    opacity?: { [key: string]: string } | undefined
    includeThemeColors?: boolean | undefined
  }>

  export default _default
}
