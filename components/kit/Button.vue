<template>
  <component :is="tag" v-bind="$attrs" :class="buttonClass">
    <span :class="$props.loading ? 'opacity-0' : ''">
      <Icon v-if="iconLeft" :name="iconLeft" class="mr-1" />
      <span v-if="label">{{ label }}</span>
      <slot v-else></slot>
      <Icon v-if="iconRight" :name="iconRight" class="ml-1" />
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
  iconLeft?: string;
  iconRight?: string;
  label?: string;
  loading?: boolean;
}>(), {
  tag: 'a',
  bgColor: 'bg-red-500',
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
</script>
