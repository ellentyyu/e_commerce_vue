<template>
  <ToastMessages></ToastMessages>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import ToastMessages from '../components/ToastMessages.vue'
export default {
    components:{
    ToastMessages,
  },
  created() {
  }
}
</script>