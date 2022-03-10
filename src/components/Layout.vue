<template>
<div :class="{'overflow-hidden':isShow,'vh-100':isShow}">
  <header class="position-sticky nav-sticky" ref="navbar">
    <nav class="navbar navbar-expand-md navbar-light" :class="{'scrolling':isScroll || isOpen}">
      <div class="container-fluid navbar-p">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="addBg">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <h1 class="fs-2 font-logo">Solljus</h1>
        </a>    
        <div class="collapse navbar-collapse order-4 order-md-3" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#/products">
                <span class="link-underline">Shop</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/about">
                <span class="link-underline">About</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/help">
                <span class="link-underline">FAQs</span>
              </a>
            </li>
          </ul>
        </div>
        <ul class="d-flex align-items-center order-3 orger-lg-4">
          <li class="d-none d-md-block">
            <div class="search-wrap">
              <a href="#" class="fas fa-search nav-icon p-3" :class="{'show':isSearch}" @click.prevent="isSearch=!isSearch"></a>
              <input type="text" class="search-input" :class="{'show':isSearch}" v-model="searchStr" placeholder="商品名稱" @keyup.enter="forceSearch">
              <a href="#" class="fas fa-times close-icon" v-if="isSearch" @click.prevent="isSearch=false"></a>
              <ul class="search-list" v-if="searchMatch && isSearch">
                <li class="search-list-item" v-for="(item, index) in searchMatch" :key="index" @click="viewProduct(item.id)">{{item.title}}</li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#" class="fas fa-shopping-cart nav-icon p-3 position-relative" @click.prevent="isShow=true; getCart()">
              <span class="position-absolute cart-alert bg-primary text-white" :class="{'bouncy':isBounce}">{{qtyTotal}}
                <span class="visually-hidden">New alerts</span>
              </span>
            </a>
          </li>
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
                <a :href="`#/product/${item.product_id}`" class="col-3 me-2 bg-cover cart-img" :style="`background-image:url(${item.product.images[0]});`"></a>
                <div class="col me-3">
                  <a :href="`#/product/${item.product_id}`" class="text-white mb-1">{{item.product.title}}</a>
                  <p class="ls-1 mb-1">NT$ {{ currency(item.total) }}</p>
                  <a href="#" class="link-fade fs-s d-inline-block cart-del" :class="{'disabled':item.id===status.loadingItem}" @click.prevent="delCart(item.id)">刪除商品</a>
                </div>
                <div class="col-2">
                  <input type="number" class="form-control" min="1" :disabled="item.id===status.loadingItem" v-model.number="item.qty" @change="updateCart(item)">
                </div>
                <div class="col-auto spinner-custom spinner-cart position-absolute" v-if="item.id===status.loadingItem">
                  <div class="bounce1"></div>
                  <div class="bounce2"></div>
                  <div class="bounce3"></div>
                </div>         
              </li>
            </ul>
          </div>
          <div class="cart-footer px-4 pt-4 pb-5">
            <p class="text-end ls-1" :class="{'text-decoration-line-through':cart.total!==cart.final_total, 'mb-2':cart.total!==cart.final_total, 'mb-5':cart.total==cart.final_total}">總金額 NT$ {{ currency(cart.total) }}</p>
            <p class="text-end mb-5 ls-1" v-if="cart.total!==cart.final_total">折扣後金額 NT$ {{ currency(cart.final_total) }}</p>
            <div class="text-center ls-1">
              <a href="#/order" class="w-100 btn btn-custom-gray ls-1 mb-4" @click="checkout">確認結帳</a>
              <button class="btn btn-custom-fade ls-1" :class="{'disabled':isDelAll}" @click="delCartAll">清空購物車
                <div v-if="isDelAll" class="spinner-custom spinner-del-all">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
              </button>
            </div>
          </div>
        </template>
        <div class="text-fade text-center py-8" v-else>
          <i class="fs-1 mb-3 fas fa-exclamation-circle"></i>
          <p class="ls-1 mb-3">購物車內沒有商品</p>
          <a href="#/products" class="btn btn-custom-gray ls-1 px-4 py-2" @click="isShow=false">挑選商品</a>
        </div>
      </div>
      <div class="cart-overlay position-fixed" :class="{'show':isShow}" @click.prevent="isShow=false"></div>
    </div>
  </header>
  <slot></slot>
  <footer class="container-fluid container-custom pt-5 pb-6 text-center footer">
    <a href="#" class="font-logo text-primary d-inline-block mx-auto">
      <h2 style="font-size:40px">Solljus</h2>
    </a>        
    <ul class="row justify-content-center px-4 px-sm-0">
      <li class="col-6 col-sm-auto"><a href="#/products" class="footer-link px-sm-3 pt-3 pb-2">
              <span class="link-underline">商店逛逛</span>
          </a>
      </li>
      <li class="col-6 col-sm-auto"><a href="#/about" class="footer-link px-sm-3 pt-3 pb-2">
          <span class="link-underline">關於Solljus</span>
          </a></li>
      <li class="col-6 col-sm-auto"><a href="#/help" class="footer-link px-sm-3 pt-3 pb-2">
          <span class="link-underline">常見問題</span></a></li>
      <li class="col-6 col-sm-auto"><a href="#/admin/products" class="footer-link px-sm-3 pt-3 pb-2">
          <span class="link-underline">後台管理</span></a></li>
    </ul>
    <p class="fs-s text-fade">Solljus © 2022 COPYRIGHT</p>
    <ul class="d-flex justify-content-center">
      <li><a href="https://www.facebook.com/" class="fs-3 p-3 media-icon fab fa-facebook-f" target="_blank"></a></li>
      <li><a href="https://www.instagram.com/" class="fs-3 p-3 media-icon fab fa-instagram" target="_blank"></a></li>
      <li><a href="mailto:solljus@solljus.com" class="fs-3 p-3 media-icon far fa-envelope"></a></li>
    </ul>
  </footer>
</div>
</template>

<script>
import {currency} from '../methods/filters'
export default {
  data() {
    return{
      isScroll: false,
      isShow: false,
      isSearch: false,
      isOpen: false,
      isBounce: false,
      isDelAll: false,
      cart: {},
      status: {
        loadingItem: '', //對應品項id 該品項轉為disabled並加入讀取效果
      },
      qtyTotal: '',
      searchStr: ''
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.getCart();
  },
  inject: ['pushMessagesState'],
  watch: {
    cart() {
      this.$emit('render-cart', this.cart);
    }
  },
  methods: {
    currency,
    handleScroll() {
      this.isScroll = window.scrollY > 50 ? true : false;
    },
    addBg() {
      this.isOpen = !this.isOpen;
      if(this.isOpen && window.scrollY==0) {
        this.isScroll = true;
      }else if(!this.isOpen && window.scrollY==0) {
        this.isScroll = false;
      }
    },
    getCart() {
      this.isBounce = false;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if(res.data.success) {
          this.cart = res.data.data;
          this.cart.final_total = Math.round(this.cart.final_total);
          let qtyTotal = 0;
          this.cart.carts.forEach(item => {
            qtyTotal += item.qty;
          });
          this.qtyTotal = qtyTotal;
          this.isBounce = true;
        }
      });
    },
    updateCart(item) {
      if(item.qty < 1){
        item.qty = 1;
      }
      if(item.qty > 1 && item.product.unit == '月') {
        item.qty = 1;
      }
      this.status.loadingItem = item.id;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      };
      this.$http.put(api, {'data':cart}).then((res) => {
        this.pushMessagesState(res, res.data.message);
        if(res.data.success) {
          this.status.loadingItem = '';
          this.getCart();
        }
      });
    },
    checkout() {
      if(this.$route.path == '/order'){
        this.isShow = false;
      }
    },
    delCart(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.status.loadingItem = id;
      this.$http.delete(api).then((res) => {
        this.pushMessagesState(res, res.data.message);
        if(res.data.success) {
          this.status.loadingItem = '';
          this.getCart();
        }
      });
    },
    delCartAll() {
      this.isDelAll = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(api).then((res) => {
        this.pushMessagesState(res, res.data.message);
        if(res.data.success) {
          this.isDelAll = false;
          this.getCart();
        }
      });
    },
    viewProduct(id) {
      this.$router.push(`/product/${id}`);
      this.searchStr = '';
    },
    forceSearch() {
      if(this.searchMatch.length !== 0) {
        return;
      }
      let res = {
          data: {
            success: false,
            message: ''
          }
        };
      this.pushMessagesState(res, '查無相關商品');
    }
  },
  computed: {
      productsAll() {
        return this.$store.state.productsAll;
      },
      productsTitles() {
        let titles = [];
        this.productsAll.forEach(item => {
          titles.push(item.title);
        });
        return titles;
      },
      searchMatch() {
        if(this.searchStr.trim() !== '') {
          let match = [];
          match = this.productsAll.filter(item => item.title.includes(this.searchStr.trim()));
          return match;
        }
      }
    },
}
</script>