<template>
  <div class="event">
    <span class="time">{{ event.time }}</span>
    <span class="event-title">{{ event.title }}</span>
    <span class="content" v-html="event.description"></span>
    <dl>
      <dt>Organizer:</dt>
      <dd>{{ event.company }}</dd>
      <dt>Language:</dt>
      <dd>{{ event.languages.join(', ') }}</dd>
      <dt>Country:</dt>
      <dd>{{ event.country }}</dd>
    </dl>
    <a :href="event.link">
      Find out more
      <div class="icon">
        <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="feather feather-chevron-right">
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </span>
      </div>
    </a>
  </div>
</template>
<style lang="postcss" scoped>
  * {
    display: block;
  }

  .event {
    position: relative;
    padding-bottom: 64px!important;
  }

  a {
    margin-top: 14px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #6f91c8;
    position: absolute;
    bottom: 24px;
    right: 12px;
  }

  .icon  {
    position: relative;
    width: 24px;
    height: 24px;
    fill: #6f91c8;
    color: #6f91c8;
    margin-right: 10px;
  }

  .event-title {
    color: #93add6;
    font-weight: bold;
    line-height: 1.5;
    font-size: 125%;
    margin: 8px 0;
  }

  .time {
    font-weight: bold;
    color: #9d9d9d;
  }

  .content {
    margin: 8px 0;
    line-height: 1.5;
  }

  .event {
    border-left: 3px solid #6f91c8;
    padding: 24px;
    background: white;
    display: flex;
    flex-direction: column;
  }

  dt {
    display: inline-block;
  }
  dd {
    font-weight: bold;
    display: inline;
    margin-left: 10px;
  }
  dd:after{
    display: block;
    content: '';
  }
  dl {
    margin: 0;
    margin-top: 16px;
  }
  dl > * {
    line-height: 1.75;
  }
</style>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { WipoEvent } from '../../types/index'

export default defineComponent({
  props: {
    event: {
      type: Object as PropType<WipoEvent>,
      default: ''
    }
  }
})
</script>