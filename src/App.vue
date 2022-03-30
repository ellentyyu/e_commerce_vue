<template>
  <router-view></router-view>
</template>
<script>
import pushMessagesState from './methods/pushMessagesState'
export default {
  provide() {
    return {
      pushMessagesState,
    }
  },
  mounted(){
    this.$store.dispatch('getProductsAll');
  },
}
</script>
<style lang="scss">
@import "./assets/scss/all";
</style>
