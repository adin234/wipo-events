<template>
  <tabs class="bg">
    <tab 
      v-for="date in dates"
      v-bind:key="date"
      :date="date.date"
      class="events-container">
      <Event v-for="(event, index) in date.events" :event="event" v-bind:key="index" />
    </tab>
    
  </tabs>
</template>
<style lang="postcss" scoped>
  .events-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px 32px;
  }
  .bg {
    background-color: #f1f1f1;
    padding:32px;
  }
</style>
<script lang="ts">
import Event from './Event.vue'
import Tabs from '../Tabs.vue'
import Tab from '../Tab.vue'

import events from '../../config/events'

export default {
  name: 'Calendar',
  components: {
    Event,
    Tabs,
    Tab
  },
  methods: {
    formatEvents(events) {
      const dates = {};
      events.forEach((event) => {
        if (!dates[event.date]) {
          dates[event.date] = {
            date: event.date,
            events: []
          }
        }

        dates[event.date].events.push(event)
      })

      return dates
    }
  },
  data() {
    return  {
      dates: this.formatEvents(events)
    }
  }
}
</script>