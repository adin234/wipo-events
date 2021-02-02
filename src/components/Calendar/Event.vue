<template>
  <div class="event">
    <span class="time">{{ event.time.start }} - {{ event.time.end }}</span>
    <span class="title">{{ event.title }}</span>
    <span class="content" v-html="event.description"></span>
    <dl>
      <dt>Organizer:</dt>
      <dd>{{ event.organizer }}</dd>
      <dt>Language:</dt>
      <dd>{{ event.languages.join(', ') }}</dd>
      <dt>Country:</dt>
      <dd>{{ event.country }}</dd>
    </dl>
  </div>
</template>
<style lang="postcss" scoped>
  * {
    display: block;
  }

  .title {
    color: #93add6;
    font-weight: bold;
    font-size: 1.25em;
    line-height: 1.5;
  }

  .time {
    font-weight: bold;
    color: #9d9d9d;
    font-size: .9em;
  }

  .content {
    font-size: .87em;
  }

  .event {
    border-left: 3px solid #6f91c8;
    padding: 32px;
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
  }
  dl > * {
    line-height: 1.75;
    font-size: .9em;
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