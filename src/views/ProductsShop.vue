<template>
  <ToastMessages></ToastMessages>
  <Loading :active="isLoading"></Loading>
  <Layout ref="layout">
    <div class="container-fluid container-custom pt-9 pb-5 mb-4">
      <h1 class="fs-3 text-center font-logo mb-4 d-none d-lg-block">Solljus Shop</h1>
      <ul class="mb-4 d-flex justify-content-center">
        <li>
          <a href="#" class="mx-1 cate-link" :class="{'active':this.selectedCate == 'all'}" @click.prevent="switchCate('all')">全部</a>
        </li>
        <li>
          <a href="#" class="mx-1 cate-link" :class="{'active':this.selectedCate == '單品'}" @click.prevent="switchCate('單品')">單品</a>
        </li>
        <li>
          <a href="#" class="mx-1 cate-link" :class="{'active':this.selectedCate == '配方'}" @click.prevent="switchCate('配方')">配方</a>
        </li>
        <li>
          <a href="#" class="mx-1 cate-link" :class="{'active':this.selectedCate == '器材'}" @click.prevent="switchCate('器材')">器材</a>
        </li>
      </ul>
      <div class="row gy-5">
        <div class="col-sm-6 col-lg-4" v-for="item in filteredProducts" :key="item.id">
          <ProductCard :productItem="item" :loadingItem="status.loadingItem" @view-product="viewProduct" @add-cart="addCart"></ProductCard>
        </div>
      </div>
    </div>
  </Layout>
  <ScrollTop></ScrollTop>
</template>
<script>
import ToastMessages from '../components/ToastMessages.vue'
import ProductCard from '@/components/ProductCard.vue'
import ScrollTop from '@/components/ScrollTop.vue'
export default {
  data() {
    return {
      products: [],
      isLoading: false,
      status: {
        loadingItem: "", //對應品項id 該品項轉為disabled並加入讀取效果
      },
    };
  },
  components: {
    ToastMessages,
    ProductCard,
    ScrollTop
  },
  inject: ['pushMessagesState'],
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
        }
      });
    },
    switchCate(cate){
      this.$router.push(`/products?category=${cate}`);
     // this.selectedCate = cate;
    },
    viewProduct(id) {
      this.$router.push(`/product/${id}`);
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
      });
    },
  },
  computed: {
    filteredProducts() {
      if (this.selectedCate == 'all' || !this.selectedCate){
        return this.products;
      }else {
        let ary = [ ...this.products.filter(item => item.category == this.selectedCate)];
        return ary;
      }
    },
    selectedCate() {
      return this.$route.query.category;
    }
  },
  created() {
    this.$router.replace({ path: '/products', query: { category: 'all' } });
    this.getProducts();
  },
};
</script>