<template lang="pug">
nav.search-bar
  Searchbar
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Searchbar from '@/js/components/searchbar/Searchbar.vue'

export default defineComponent({
  components: {
    Searchbar
  }
})
</script>

<style lang="scss" scoped>
.search-bar {
  min-height: 80px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
</style>
