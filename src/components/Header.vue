<template>
  <!-- <Loading :active="isLoading"></Loading> -->
  <div class="position-sticky nav-sticky" ref="navbar">
    <nav class="navbar navbar-expand-lg navbar-light" :class="{'scrolling':isScroll || isOpen}">
      <div class="container-fluid navbar-p">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="addBg">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <h1 class="mb-0 fs-2 font-logo">Solljus</h1>
        </a>    
        <div class="collapse navbar-collapse order-4 order-lg-3" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link px-3" aria-current="page" href="#/products">
                <span class="link-underline">Shop</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" href="#">
                <span class="link-underline">About</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" href="#">
                <span class="link-underline">FAQs</span>
              </a>
            </li>
          </ul>
        </div>
        <ul class="d-flex list-unstyled mb-0 order-3 orger-lg-4">
          <li><a href="#" class="fas fa-heart nav-icon p-3"></a></li>
          <li><a href="#" class="fas fa-shopping-cart nav-icon p-3" @click.prevent="isShow=true; getCart()"></a></li>
        </ul>
      </div>
    </nav>
    <div>
      <div class="cart position-fixed overflow-auto col-12 col-md-5 col-lg-4 d-flex flex-column" :class="{'show':isShow}">
        <div class="cart-header p-4 d-flex align-items-center">
          <p class="title text-fade fs-s me-auto">購物車</p>
          <a href="#" class="px-3 fas fa-times fs-l link-fade" @click.prevent="isShow=false"></a>
        </div>
        <template v-if="cart.final_total !== 0">
          <div class="cart-body p-4">
            <ul>
              <li v-for="item in cart.carts" :key="item.id" class="mb-3 row gx-0 align-items-center position-relative">
                <a href="#" class="col-3 me-2 bg-cover cart-img" style="background-image:url(https://images.unsplash.com/photo-1542238060-3d3fc9856473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);"></a>
                <div class="col me-3">
                  <a href="#" class="text-white mb-1">{{item.product.title}}</a>
                  <p class="ls-1 mb-1">NT$ {{item.final_total}}</p>
                  <a href="#" class="link-fade fs-s d-inline-block cart-del" :class="{'disabled':item.id===status.loadingItem}" @click.prevent="delCart(item.id)">刪除商品</a>
                </div>
                <div class="col-2">
                  <input type="number" class="form-control" min="1" :disabled="item.id===status.loadingItem" v-model.number="item.qty" @change="updateCart(item)">
                </div>
                <div class="col-auto spinner spinner-cart position-absolute" v-if="item.id===status.loadingItem">
                  <div class="bounce1"></div>
                  <div class="bounce2"></div>
                  <div class="bounce3"></div>
                </div>         
              </li>
            </ul>
          </div>
          <div class="cart-footer px-4 pt-4 pb-5">
            <p class="text-end mb-5 ls-1">總金額 NT$ {{cart.final_total}}</p>
            <div class="text-center ls-1">
              <button class="w-100 btn btn-custom-gray ls-1 mb-4">確認結帳</button>
              <button class="btn btn-custom-transparent ls-1">清空購物車</button>
            </div>
          </div>
        </template>
        <div class="text-fade text-center py-8" v-else>
          <i class="fs-1 mb-3 fas fa-exclamation-circle"></i>
          <p class="ls-1 mb-3">購物車內沒有商品</p>
          <button class="btn btn-custom-gray ls-1 px-4 py-2">挑選商品</button>
        </div>
      </div>
      <div class="cart-overlay position-fixed" :class="{'show':isShow}" @click.prevent="isShow=false"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      isScroll: false,
      isShow: false,
      isOpen: false,
      cart: {},
      status: {
        loadingItem: "", //對應品項id 該品項轉為disabled並加入讀取效果
      },
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.getCart();
  },
  inject: ['pushMessagesState'],
  methods: {
    handleScroll() {
      this.isScroll = window.scrollY > 50 ? true : false;
    },
    addBg() {
      this.isOpen = !this.isOpen;
      if(this.isOpen && window.scrollY==0){
        this.isScroll = true;
      }else if(!this.isOpen && window.scrollY==0){
        this.isScroll = false;
      }
    },
    openCart() {
      this.isShow=true;
      this.getCart();
      this.$emit('lock-scroll', true);
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        this.cart = res.data.data;
        console.log(this.cart.carts.length);
      });
    },
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      };
      this.$http.put(api, {'data':cart}).then((res) => {
        this.pushMessagesState(res, res.data.message);
        this.status.loadingItem = '';
        this.getCart();
      });
    },
    delCart(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.status.loadingItem = id;
      this.$http.delete(api).then((res) => {
        this.pushMessagesState(res, res.data.message);
        this.status.loadingItem = '';
        this.getCart();
      });
    },
    /*
        check_scroll_time(){
      now = new Date();
      console.log(123);
      if ((now.getTime() - scroll_timer.getTime())/1000 > 2){
        //No scrolling - do something
      }else{
        //Scrolling is active - do nothing
      }
      setTimeout(function(){ check_scroll_time() },300); //<==== call ad-infinitum
    }*/
  }
}
</script>