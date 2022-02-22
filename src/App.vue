<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import "./assets/all";

</style>
<script>
import pushMessagesState from './methods/pushMessagesState'
export default {
  provide() {
    return {
      pushMessagesState,
    }
  },
}
</script>
