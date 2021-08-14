<template>
  <div>
    <b-table
      :data="entries"
      detailed>
      <b-table-column
        field="name"
        label="Name"
        sortable
        searchable>
        <template #searchable="props">
          <b-input
            v-model="props.filters[props.column.field]"
            placeholder="Filter names..."
            type="search"
            icon="search"
            size="is-small" />
        </template>
        <template #default="props">
          {{ props.row.name }}
        </template>
      </b-table-column>
      <b-table-column
        field="version"
        label="Version"
        v-slot="props">
        {{ props.row.version }}
      </b-table-column>
      <b-table-column
        field="status"
        label="Status"
        v-slot="props">
        <b-taglist>
          <b-tag
            v-if="props.row.enabled"
            type="is-success">
            ENABLED
          </b-tag>
          <b-tag
            v-else
            type="is-danger">
            DISABLED
          </b-tag>
          <b-tag
            v-if="props.row.official"
            type="is-info">
            OFFICIAL
          </b-tag>
          <b-tag
            v-if="props.row.unsupported"
            type="is-danger">
            UNSUPPORTED
          </b-tag>
        </b-taglist>
      </b-table-column>

      <template #detail="props">
        <div class="content">
          <p>
            <b>Main class:</b> {{ props.row.main }}
          </p>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    entries: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>
.b-table .table th .th-wrap .control .icon.is-left {
  margin-left: 0;
}
</style>