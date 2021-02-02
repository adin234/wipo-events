<template>
  <ul class="list">
    <BreadcrumbItem
      v-for="(item, index) in links"
      v-bind:key="item.link"
      class="item"
      :link="item.link"
      :text="item.text"
      :hasIcon="index > 0"/>
  </ul>
</template>
<style scoped>
  .list {
    display: flex;
    list-style-type: disc;
    padding: 0;
  }

  .list > .item:not(:last-child) {
    margin-right: 10px;
  }

  .list > .item {
    list-style-type: none;
    display: flex;
    align-items: center;
    font-size: 13px;
    font-family: Arial,sans-serif;
  }

  .list > .item a {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(111, 145, 200);
  }
</style>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import BreadcrumbItem from './BreadcrumbItem.vue'

export default defineComponent({
  components: {
    BreadcrumbItem
  },
  props: {
    links: {
      type: Array as PropType<Array<{ link: string, text: string }>>,
      default: []
    }
  }
})
</script>