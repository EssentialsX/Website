<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 grid-auto-row gap-4">
    <KitCard title="EssentialsX info">
      <DumpTable>
        <DumpTableEntry title="Version" :value="d.essVersion" />
        <DumpTableEntry title="Branch" :value="d.essBranch" />
        <DumpTableEntry title="Economy Layer" :value="d.essLayer" />
        <DumpTableEntry title="Economy Backend" :value="d.essBackend" />
      </DumpTable>
    </KitCard>
    <KitCard title="Server software">
      <DumpTable>
        <DumpTableEntry title="Server Brand" :value="d.srvBrand" />
        <DumpTableEntry title="Server Version" :value="d.srvVersion" />
        <DumpTableEntry title="Bukkit Version" :value="d.srvBukkitVersion" />
        <DumpTableEntry title="Online Mode" :value="d.srvOnlineMode" />
        <DumpTableEntry title="Support Status" :value="d.srvSupport" />
        <DumpTableEntry title="Support Trigger" :value="d.srvTrigger" />
      </DumpTable>
    </KitCard>
    <KitCard title="Server environment">
      <DumpTable>
        <DumpTableEntry title="Java Version" :value="d.envJava" />
        <DumpTableEntry title="Operating System" :value="d.envOs" />
        <DumpTableEntry title="Server Uptime" :value="d.envUptime" />
        <DumpTableEntry title="Allocated Memory" :value="d.envMemory" />
      </DumpTable>
    </KitCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Dump } from '@/store/dump'
import { DumpProxy } from '@/util/dump'

@Component
export default class DumpViewer extends Vue {
  @Prop() dump!: Dump

  get d() {
    return new DumpProxy(this.dump)
  }
}
</script>
