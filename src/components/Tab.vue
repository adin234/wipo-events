<template>
  <div v-show="isActive"><slot></slot></div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      default: ''
    },
    selected: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    date: {
      type: String as PropType<string>,
      default: ''
    }
  },
  created() {
    this.$parent.tabs.push(this);
  },
  data() {
    return {
      isActive: false
    }
  },
  computed:{
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  mounted() {
    this.isActive = this.selected
  }
})
</script>