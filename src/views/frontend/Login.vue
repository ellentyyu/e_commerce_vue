<template>
  <ToastMessages/>
  <div class="login">
    <div class="container container-custom py-6"> 
      <div class="row justify-content-center">
        <div class="col-md-4 col-lg-3 bg-cover login-img" style="background-image:url(https://images.unsplash.com/photo-1519831802596-6aadd85ff671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80)"></div>
        <div class="col-md-5 col-lg-4 bg-white">
          <form class="py-4 px-3 d-flex flex-column h-100" @submit.prevent="signIn">
            <h1 class="fs-4 mb-3 fw-bold text-center">後台登入</h1>
            <div class="mb-3 position-relative">
              <input
                type="email"
                id="inputEmail"
                class="input-login"
                placeholder="Email address"
                required
                autofocus
                v-model="user.username"
              />
              <label for="inputEmail" class="position-absolute">Email</label>
            </div>
            <div class="mb-3 position-relative">
              <input
                type="password"
                id="inputPassword"
                class="input-login"
                placeholder="Password"
                required
                v-model="user.password"
              />
               <label for="inputPassword" class="position-absolute">Password</label>
            </div>
            <div class="mt-5 mt-lg-auto">
              <button class="btn btn-custom-primary w-100 mb-1" type="submit">
                登入
              </button>
              <router-link to="/" class="btn btn-custom-gray w-100">
                回首頁
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ToastMessages from '@/components/ToastMessages.vue'
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  components:{
    ToastMessages
  },
  inject: ['pushMessagesState'],
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http.post(api, this.user).then((res) => {
        let vm = this;
        setTimeout(function() {
          vm.pushMessagesState(res, res.data.message);
          });
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expired=${new Date(expired)}`;
          this.$router.push("/admin/products");
        }
      })
      .catch((e) => {
        console.error(e);
      });
    }
  }
};
</script>
