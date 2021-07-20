<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
// 使用方法请查阅位于 @/icons/doc.md 位置的文档

import { computed, toRefs } from 'vue'

export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup (props: any) {
    const { iconClass, className } = toRefs(props)
    const iconName = computed(() => {
      return `#icon-${iconClass.value}`
    })
    const svgClass = computed(() => {
      if (className.value) {
        return 'svg-icon ' + className.value
      } else {
        return 'svg-icon'
      }
    })
    return {
      iconName,
      svgClass
    }
  }
}

</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
