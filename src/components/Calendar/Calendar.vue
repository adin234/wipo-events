<template>
  <tabs class="bg" ref="tabs">
    <div class="filters">
      <div class="filter">
        <span>Filter by: </span>
        <select @change="countrySelect">
          <option value="">Country</option>
          <option v-for="country in countries" v-bind:key="country">{{country}}</option>
        </select>
      </div>
      <div class="filter">
        <span>Filter by: </span>
        <select @change="languageSelect">
          <option value="">Language</option>
          <option v-for="language in languages" v-bind:key="language">{{language}}</option>
        </select>
      </div>
    </div>
    <tab 
      v-for="date in dates"
      v-bind:key="`${date.date}-${selectedLanguage}-${selectedCountry}`"
      :date="date.date"
      class="events-container">
      <Event v-for="event in date.events" :event="event" v-bind:key="event.title" />
    </tab>
    
  </tabs>
</template>
<style lang="postcss" scoped>
  .filters {
    text-align: right;
  }

  .filters > * {
    display: inline-block;
    margin: 16px 0;
  }

  .filters .filter span {
    font-weight: bold;
  }

  .filters > *:last-child {
    margin-left: 16px;
  }
  .events-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px 32px;
  }

  @media (max-width:1023px) {
    .events-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px 32px;
    }
  }

  @media (max-width:765px) {
    .events-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px 32px;
    }

    .filters > * {
      display: block;
      margin: 16px 0;
    }

    .filters > *:last-child {
      margin-left: 0;
    }
  }

  .bg {
    background-color: #f1f1f1;
    padding:32px;
  }
</style>
<script lang="ts">
import axios from 'axios'
import Event from './Event.vue'
import Tabs from '../Tabs.vue'
import Tab from '../Tab.vue'

export default {
  name: 'Calendar',
  components: {
    Event,
    Tabs,
    Tab
  },
  created() {
    axios.get('data.json')
      .then(e => {
        const { events, countries, languages } = this.formatEvents(e.data)
        this.baseEvents = events
        this.countries = [ ...new Set(countries)]
        this.languages = [ ...new Set(languages)]
      })
  },
  computed: {
    dates() {
      let first = true
      if (this.$refs.tabs) {
        this.$refs.tabs.clearTabs()
        first = false
      }

      return this.arrangeEvents(this.mFiltered(this.baseEvents), first)
    }
  },
  methods: {
    countrySelect(e) {
      this.selectedCountry = e.target.value
    },
    languageSelect(e) {
      this.selectedLanguage = e.target.value
    },
    mFiltered(events) {
      return events.filter((e) => {
        if (this.selectedLanguage && !e.languages.includes(this.selectedLanguage)) {
          return false
        }

        if (this.selectedCountry && e.country !== this.selectedCountry) {
          return false
        }

        return true
      })
    },
    arrangeEvents(events, first) {
      const dates = {}

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
    },
    formatEvents(events) {
      const dates = {}
      const countries = []
      const languages = []

      events.forEach((event) => {
        if (!dates[event.date]) {
          dates[event.date] = {
            date: event.date,
            events: []
          }
        }

        event.languages = [event.language_1]

        languages.push(event.language_1)
        countries.push(event.country)

        if (event.language_2) {
          event.languages.push(event.language_2)
          languages.push(event.language_2)
        }
      })

      return {
        events,
        countries,
        languages
      }
    }
  },
  data() {
    return  {
      baseEvents: [],
      countries: [],
      languages: [],
      selectedCountry: '',
      selectedLanguage: ''
    }
  }
}
</script>