<template lang="pug">
main.app-body
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style lang="scss" scoped>
@import '@/sass/_variables.scss';
@import '@/sass/_mixins.scss';

.app-body {
  @include box-center;
  flex-grow: 1;
  width: 100%;
}
</style>
