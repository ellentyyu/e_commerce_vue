<template>
    <ToastMessages></ToastMessages>
    <Navbar>
      <router-view></router-view>
    </Navbar>  
</template>

<script>
import ToastMessages from '../components/ToastMessages.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components:{
    ToastMessages,
    Navbar,
  },
  created() {
    //將token從cookie中取出 將token夾入headers中 之後每次發送請求會驗證headers中的authorization
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.post(api)
    .then((res)=>{
        if(!res.data.success){
            this.$router.push('/login');
        }
    });
  }
}
</script>