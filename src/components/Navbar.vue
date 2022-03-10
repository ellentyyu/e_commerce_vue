<template>
<div class="container-fluid ">
  <div class="row vh-100"> 
    <nav class="admin-nav px-4 col-md-2 d-flex align-items-center d-md-block">
      <a href="#" class="font-logo fs-3 text-white me-4 md-md-0 py-3 mb-md-3 d-none d-ss-block">
        <h1>Solljus</h1>
      </a>
      <a class="admin-nav-link py-3 px-2 px-md-0 pt-md-2 pb-md-3" :class="{'active':currPage==='/admin/products'}" href="#/admin/products">商品管理</a>
      <a class="admin-nav-link py-3 px-2 px-md-0 pt-md-2 pb-md-3" :class="{'active':currPage==='/admin/coupons'}" href="#/admin/coupons">優惠券管理</a>
      <a class="admin-nav-link py-3 px-2 px-md-0 pt-md-2 pb-md-3" :class="{'active':currPage==='/admin/orders'}" href="#/admin/orders">訂單管理</a>
    </nav>
    <header class="col-md-10 bg-white">
      <div class="header-bar py-3 px-2 d-flex align-items-center">
        <div class="d-flex align-items-center me-auto">
          <p class="admin-page">後台管理</p>
          <i class="fas fa-chevron-right fs-xs mx-2"></i>
          <p>{{pageName}}</p>
        </div>
        <div class="d-flex align-items-center">
          <p class="text-success">登入中</p>
          <button class="btn btn-secondary ms-3" @click="logout">登出</button>
        </div>
      </div>
      <!-- slot 後台替換的內容 -->
      <slot></slot>
    </header>
  </div>
</div>
</template>

<script>
export default {
  inject: ['pushMessagesState'],
  methods:{
    logout(){
        const api = `${process.env.VUE_APP_API}/logout`;
        this.$http.post(api)
        .then((res)=>{
          let vm = this;
          setTimeout(function(){
            vm.pushMessagesState(res, res.data.message);
          });
          if(res.data.success){
              this.$router.push('/login');
          }
        });
    },
    selectedPage(page) {
      this.currPage = page;
    }
  },
  computed: {
    currPage() {
      return this.$route.path;
    },
    pageName() {
      switch(this.currPage) {
      case '/admin/products':
        return '商品管理'
      case '/admin/coupons':
        return '優惠券管理';
      case '/admin/orders':
        return '訂單管理';
      }
    }
  }
}
</script>