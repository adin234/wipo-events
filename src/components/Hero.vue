<template>
  <section class="grid-container">
    <Content class="content" />
    <GetInvolved class="action" />
  </section>
</template>
<style lang="postcss" scoped>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "content content action";
  }
  .content {
    grid-area: content;
    padding-right: 32px;
  }
  .action {
    margin-top: 60px;
    grid-area: action;
  }

  @media (max-width:767px) {
    .grid-container {
      display: flex;
      flex-direction: column;
    }

    .action {
      margin-top: 32px;
    }
  }
</style>
<script lang="ts">
import Content from './Content.vue'
import GetInvolved from './GetInvolved.vue'

export default {
  name: 'Hero',
  components: {
    Content,
    GetInvolved
  }
}
</script>