<template>
  <div>
    <div class="tabs">
      <perfect-scrollbar class="perfect-scrollbar">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }" v-bind:key="tab.name">
            <a href="javascript:void(0)" @click="selectTab(tab)">
              <span class="date">{{ getDate(tab.date) }}</span>
              <span class="day">{{ getDay(tab.date) }}</span>
            </a>
          </li>
        </ul>
      </perfect-scrollbar>
    </div>

    <div class="tabs-details">
        <slot></slot>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .tabs {
    align-items: stretch;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }

  .tabs ul {
    align-items: center;
    border-bottom-color: #dbdbdb;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    margin-top: 0;
    justify-content: center;
    list-style: none;
  }

  .tabs li.is-active a {
    border-bottom-color: #6f91c8;
    border-bottom-width: 2px;
  }

  .tabs a {
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    color: #6f91c8;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    margin-bottom: -1px;
    padding: .5em 1em;
    vertical-align: top;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
  }

  .tabs a:hover {
    border-bottom-color: #363636;
    color: #363636;
  }

  .date, .day {
    display: block;
  }

  .date {
    font-weight: bold;
  }

  .day {
    color: black;
  }

  .perfect-scrollbar {
    width: 100%;
  }
</style>
<script lang="ts">
import {PerfectScrollbar} from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import { defineComponent } from 'vue'
import moment from 'moment'

export default defineComponent({
  props: {
    
  },
  components: {
    PerfectScrollbar
  },
  data() {
    return {
      tabs: []
    }
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.date === selectedTab.date
      })
    },
    getDate(date) {
      return moment(date, "YYYY-MM-DD").format('MMMM D')
    },
    getDay(date) {
      return moment(date, "YYYY-MM-DD").format('dddd')
    }
  }
})
</script>