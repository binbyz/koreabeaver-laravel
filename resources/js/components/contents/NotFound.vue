<template lang="pug">
.not-found
  span 페이지를 찾을 수 없습니다.
</template>

<style lang="scss" scoped>
@import '@/sass/_variables.scss';
@import '@/sass/_mixins.scss';

.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  > span {
    font-size: 200%;
    @include highlight-text();
  }
}
</style>
