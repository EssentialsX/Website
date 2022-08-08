<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 grid-auto-row gap-4">
    <KitCard title="EssentialsX info">
      <DumpTable>
        <DumpTableEntry title="Version" value="2.0.1-b370" />
        <DumpTableEntry title="Branch" value="2.x" />
        <DumpTableEntry title="Economy Layer" value="Register" />
        <DumpTableEntry title="Economy Backend" value="iConomy 4" />
      </DumpTable>
    </KitCard>
    <KitCard title="Server software">
      <DumpTable>
        <DumpTableEntry title="Server Brand" value="WooYeah" />
        <DumpTableEntry title="Server Version" value="1.2.5" />
        <DumpTableEntry title="Bukkit Version" value="1.2.5-R2" />
        <DumpTableEntry title="Online Mode" :value="true" />
        <DumpTableEntry title="Support Status" :value="null" />
        <DumpTableEntry title="Support Trigger" />
      </DumpTable>
    </KitCard>
    <KitCard title="Server environment">
      <DumpTable>
        <DumpTableEntry title="Java Version" value="1.5" />
        <DumpTableEntry title="Operating System" value="Windows NT 4.1" />
        <DumpTableEntry
          title="Server Uptime"
          value="10 years 293 days 22 hours 5 minutes 22 seconds"
        />
        <DumpTableEntry title="Allocated Memory" value="256MB" />
      </DumpTable>
    </KitCard>
  </div>
</template>
