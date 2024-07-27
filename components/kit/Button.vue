<template>
  <component :is="tag" v-bind="$attrs" :class="buttonClass">
    <span :class="innerSpanClass">
      <slot name="iconLeft" class="mr-1" />
      <span class="px-2 first:pl-0 last:pr-0" v-if="label">{{ label }}</span>
      <slot v-else></slot>
      <slot name="iconRight" class="ml-1" />
    </span>
    <div
      v-if="loading"
      class="absolute top-0 left-0 h-full w-full z-2 flex justify-center items-center"
    >
      <KitLoader size="xs" />
    </div>
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  tag?: string;
  bgColor?: string;
  textColor?: string;
  inverted?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  label?: string;
  loading?: boolean;
}>(), {
  tag: 'a',
  bgColor: 'bg-primary',
  textColor: 'text-white',
  inverted: false,
  disabled: false,
  rounded: true,
  loading: false,
})

const buttonClass = computed(() => ({
  'px-3': true,
  'py-2': true,
  relative: true,
  'bg-transparent': !!props.inverted,
  [props.bgColor]: !props.inverted,
  [props.textColor]: true,
  'rounded-md': props.rounded, // eslint-disable-line prettier/prettier
  'border': !!props.inverted, // eslint-disable-line prettier/prettier
  'border-white': true,
  'hover:ring': !props.disabled,
  'cursor-default': props.disabled,
  'cursor-pointer': !props.disabled,
}))

const innerSpanClass = computed(() => ({
  'opacity-0': props.loading,
  'flex-inline': true,
  'items-center': true,
}))
</script>
