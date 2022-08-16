import { Dump } from '~/store/dump'

export class DumpProxy {
  dump: Dump

  constructor(dump: Dump) {
    this.dump = dump
  }

  get essVersion() {
    return this.dump.data['ess-data'].version
  }

  get essBranch() {
    return this.dump.data['ess-data']['update-data'].branch
  }

  get essLayer() {
    return this.dump.data['ess-data']['economy-layer'].enabled
      ? this.dump.data['ess-data']['economy-layer'].name === 'null'
        ? 'None'
        : this.dump.data['ess-data']['economy-layer'].name
      : 'Disabled'
  }

  get essBackend() {
    return this.dump.data['ess-data']['economy-layer']['backend-name'] ===
      'null'
      ? 'N/A'
      : this.dump.data['ess-data']['economy-layer']['backend-name']
  }

  get srvBrand() {
    return this.dump.data['server-data']['server-brand']
  }

  get srvVersion() {
    return this.dump.data['server-data']['server-version']
  }

  get srvBukkitVersion() {
    return this.dump.data['server-data']['bukkit-version']
  }

  get srvOnlineMode() {
    return this.dump.data['server-data']['online-mode'] || 'Not Provided'
  }

  get srvSupport() {
    return (
      this.dump.data['server-data']['support-status'].status +
      ' (' +
      (this.dump.data['server-data']['support-status'].supported
        ? 'Supported'
        : 'Unsupported') +
      ')'
    )
  }

  get srvTrigger() {
    return this.dump.data['server-data']['support-status'].trigger === null
      ? 'N/A'
      : this.dump.data['server-data']['support-status'].trigger
  }

  get envJava() {
    return this.dump.data.environment['java-version']
  }

  get envOs() {
    return this.dump.data.environment['operating-system']
  }

  get envUptime() {
    return this.dump.data.environment.uptime
  }

  get envMemory() {
    return this.dump.data.environment['allocated-memory']
  }

  get addons() {
    return this.dump.data['ess-data'].addons
  }

  get plugins() {
    return this.dump.data.plugins
  }

  get timestamp() {
    return this.dump.data.meta.timestamp
  }

  get sender() {
    return this.dump.data.meta.sender
  }

  get senderUuid() {
    return this.dump.data.meta.senderUuid
  }
}
