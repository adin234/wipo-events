<template>
  <li class='item'>
    <div class="icon" v-if="hasIcon">
      <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="feather feather-chevron-right">
          <path d="M9 18l6-6-6-6"></path>
        </svg>
      </span>
    </div>
    <a :href="link">
      {{ text }}
    </a>
  </li>
</template>
<style lang="postcss" scoped>
  .item {
    list-style-type: none;
    display: flex;
    align-items: center;
    font-size: 13px;
    font-family: Arial,sans-serif;
  }

  .item a {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(111, 145, 200);
  }

  .icon  {
    position: relative;
    width: 14px;
    height: 14px;
    fill: #6f91c8;
    color: #6f91c8;
    margin-right: 10px;
  }
</style>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    link: {
      type: String as PropType<string>,
      default: ''
    },
    text: {
      type: String as PropType<string>,
      default: ''
    },
    hasIcon: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  }
})
</script>