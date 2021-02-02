<template>
  <div class="centerWrapper">
    <Nav/>
    <Breadcrumbs :links="links" class="crumbs" />
    <Hero />
    <Calendar class="calendar" />
    <Footer />
  </div>
</template>
<style>
  a {
    text-decoration: none;
    text-decoration-line: none;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .calendar {
    margin: 64px 0;
  }

  .crumbs {
    margin: 32px 0;
    display: inline-flex!important;
  }
</style>
<script>
import Nav from './components/Nav.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'
import Calendar from './components/Calendar/Calendar.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Hero,
    Footer,
    Calendar,
    Breadcrumbs
  },
  data: () => {
    return {
      links: [
        {
          link: 'https://www.google.com',
          text: 'Google'
        },
        {
          link: 'https://www.yahoo.com',
          text: 'Yahoo'
        }
      ]
    }
  }
}
</script>
