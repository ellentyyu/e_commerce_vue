<template>
<div class="container-fluid ">
  <!-- vh-100可以加在row -->
  <div class="row vh-100"> 
    <nav class="admin-nav px-4 col-md-2 d-flex d-md-block">
      <a href="#" class="font-logo fs-3 text-white py-3">
        <h1>Solljus</h1>
      </a>
      <a class="admin-nav-link pt-2 pb-3 active" href="#">商品管理</a>
      <a class="admin-nav-link pt-2 pb-3" href="#">優惠券管理</a>
      <a class="admin-nav-link pt-2 pb-3" href="#">訂單管理</a>
    </nav>
    <header class="col-md-10 bg-white">
      <div class="header-bar py-3 px-2 d-flex align-items-center">
        <div class="d-flex align-items-center me-auto">
          <p class="admin-page">後台管理</p>
          <i class="fas fa-chevron-right fs-xs mx-2"></i>
          <p>商品管理</p>
        </div>
        <div class="d-flex align-items-center">
          <p class="text-success">登入中</p>
          <button class="btn btn-secondary ms-3" @click="logout">登出</button>
        </div>
      </div>
      <!-- slot插入後台替換的內容 -->
      <slot></slot>
    </header>
  </div>
</div>
</template>

<script>
export default {
    methods:{
        logout(){
            const api = `${process.env.VUE_APP_API}/logout`;
            this.$http.post(api)
            .then((res)=>{
                if(res.data.success){
                    this.$router.push('/login');
                }
            });
        }
    }
}
</script>