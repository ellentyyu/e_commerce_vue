<template>
  <ToastMessages/>
  <Loading :active="!products.length"/>
  <Layout ref="layout">
    <div class="container-fluid container-custom pt-9 pb-7">
      <h1 class="fs-3 text-center font-logo mb-4 d-none d-lg-block">Solljus Shop</h1>
      <ul class="mb-4 d-flex justify-content-center">
        <li>
          <a href="#" class="mx-1 cate-link" :class="{ 'active':this.selectedCate == 'all' }" @click.prevent="switchCate('all')">全部</a>
        </li>
        <li>
          <a href="#" class="mx-1 cate-link" :class="{ 'active':this.selectedCate == '單品' }" @click.prevent="switchCate('單品')">單品</a>
        </li>
        <li>
          <a href="#" class="mx-1 cate-link" :class="{ 'active':this.selectedCate == '配方' }" @click.prevent="switchCate('配方')">配方</a>
        </li>
        <li>
          <a href="#" class="mx-1 cate-link" :class="{ 'active':this.selectedCate == '周邊' }" @click.prevent="switchCate('周邊')">周邊</a>
        </li>
      </ul>
      <div class="row gy-6">
        <div class="col-sm-6 col-lg-4" v-for="item in displayedProducts" :key="item.id">
          <ProductCard :productItem="item" :loadingItem="status.loadingItem" @add-cart="addCart"/>
        </div>
      </div>
      <Pagination class="mt-5" v-if="pagination.total_pages" :pages="pagination" @emit-pages="switchPage"/>
    </div>
  </Layout>
  <ScrollTop/>
</template>
<script>
import ToastMessages from '@/components/ToastMessages.vue'
import ProductCard from '@/components/ProductCard.vue'
import ScrollTop from '@/components/ScrollTop.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  data() {
    return {
      filProductLength: 0,
      status: {
        loadingItem: "",
      },
    };
  },
  components: {
    ToastMessages,
    ProductCard,
    ScrollTop,
    Pagination
  },
  inject: ['pushMessagesState'],
  methods: {
    switchCate(cate) {
      this.$router.push(`/products?category=${cate}&page=1`);
    },
    switchPage(page) {
      this.$router.push(`/products?category=${this.selectedCate}&page=${page}`);
    },
    addCart(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(api, { data: cart }).then((res) => {
        this.pushMessagesState(res, res.data.message);
        if (res.data.success) {
          this.status.loadingItem = "";
          this.$refs.layout.getCart();
        }
      })
      .catch((e) => {
        console.error(e);
      });
    }
  },
  computed: {
    products() {
      return this.$store.state.productsAll;
    },
    filteredProducts() {
      // 篩選產品分類
      let productsAry = [];
      if (this.selectedCate == 'all' || !this.selectedCate){
        productsAry = this.products;
      }else {
        let ary = [ ...this.products.filter(item => item.category == this.selectedCate) ];
        productsAry = ary;
      }
      return productsAry;
    },
    selectedCate() {
      return this.$route.query.category;
    },
    selectedPage() {
      return this.$route.query.page;
    },
    // 每頁顯示的九筆資料
    displayedProducts() {
      let ary = [ ...this.filteredProducts ];
      return ary.splice((this.selectedPage - 1) * 9, 9);
    },
    pagination() {
      let total_pages, has_next, has_pre, current_page;
      // 當前頁決定於路由
      current_page = parseInt(this.selectedPage);
      // 用篩選後商品算總頁數
      // 外層if條件只影響ajax時會不會先顯示頁碼
      if (this.filteredProducts.length > 0) {
        if (Number.isInteger(this.filteredProducts.length / 9)) {
          total_pages = this.filteredProducts.length / 9;
        }else {
          total_pages = Math.trunc(this.filteredProducts.length / 9) + 1;
        }
      }
      // 樣式
      if (total_pages === 1) {
        has_pre = false;
        has_next = false;
      }else if (current_page === 1){
        has_pre = false;
      }else if (total_pages === current_page){
        has_next = false;
      }else{
        has_pre = true;
        has_next = true;
      }
      return {
        current_page: current_page,
        has_next: has_next,
        has_pre: has_pre,
        total_pages: total_pages
      };
    }
  },
  created() {
    if (this.$route.fullPath == '/products') {
      this.$router.replace({ path: '/products', query: { category: 'all', page: '1'} });
    }
  },
};
</script>