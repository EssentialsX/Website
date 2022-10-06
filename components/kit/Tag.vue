<template>
  <span :class="tagClass">
    <Icon v-if="iconLeft" :name="iconLeft" class="mr-1" />
    <span v-if="label">{{ label }}</span>
    <slot v-else></slot>
    <Icon v-if="iconRight" :name="iconRight" class="ml-1" />
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  bgColor?: string;
  textColor?: string;
  textSize?: string;
  rounded?: boolean;
  iconLeft?: string;
  iconRight?: string;
  label?: string;
}>(), {
  bgColor: 'bg-red-600'
})

const tagClass = computed(() => ({
  'px-2': true,
  'py-1': true,
  [props.bgColor]: true,
  [props.textColor]: true,
  [props.textSize]: true,
  'rounded-full': props.rounded, // eslint-disable-line prettier/prettier
}))
</script>
