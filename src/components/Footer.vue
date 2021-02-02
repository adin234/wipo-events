<template>
  <div class="footer">
    <SmallCard v-for="item in items"
      v-bind:key="item.title"
      :title="item.title"
      :content="item.content" />
  </div>  
</template>
<style lang="postcss" scoped>
  .footer {
    display: flex;
  }

  .footer > * {
    flex: 1
  }
</style>
<script lang="ts">
import SmallCard from './SmallCard.vue'

export default {
  name: 'Footer',
  components: {
    SmallCard
  },
  data: () => {
    return {
      items: [
        {
          title: 'Organizing and promoting World IP Day events',
          content: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit. Sed id sapien euismod, malesuada' +
          'eros sit amet, tempor odio. Ut id vestibulum justo. Proin posuere posuere pharetra. Aenean hendrerit' +
          'convallis felis, eu tincidunt ex. Vestibulum non commodo purus, vitae feugiat nulla. Curabitur ultrices' + 
          'non purus sit amet egestas. Nullam lacinia purus metus, eget vestibulum enim pretium sed. Phasellus vulputate' +
          'convallis est vitae molis'
        },
        {
          title: 'About World IP Day',
          content: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit. Sed id sapien euismod, malesuada' +
          'eros sit amet, tempor odio. Ut id vestibulum justo. Proin posuere posuere pharetra. Aenean hendrerit' +
          'convallis felis, eu tincidunt ex. Vestibulum non commodo purus, vitae feugiat nulla. Curabitur ultrices' + 
          'non purus sit amet egestas. Nullam lacinia purus metus, eget vestibulum enim pretium sed. Phasellus vulputate' +
          'convallis est vitae molis'
        }
      ]
    }
  }
}
</script>