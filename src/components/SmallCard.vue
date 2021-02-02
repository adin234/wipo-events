<template>
  <div class="card">
    <span class="title">
      {{ title }}
    </span>
    <p>
      {{ content }}
    </p>
  </div>
</template>
<style lang="postcss" scoped>
  .title {
    font-weight: bold;
    font-size: 1.5em;
  }
</style>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      default: ''
    },
    content: {
      type: String as PropType<string>,
      default: ''
    }
  }
})
</script>