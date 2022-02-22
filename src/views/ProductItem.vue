<template>
  <ToastMessages></ToastMessages>
  <Loading :active="isLoading"></Loading>
  <Layout ref="layout">
    <div>
      <section class="container-fluid container-custom pt-9 mb-8">
        <div class="row ind-pro">
          <div class="col-md-6">
            <div class="row g-3">
              <div class="col-12">
                <div class="photo-lg bg-cover" :style="`background-image:url(${product.images[imgKey]});`" v-if="product.images"></div>
                <div class="photo-lg bg-cover" :style="`background-image:url(${product.imageUrl});`" v-else></div>
              </div>
              <div class="col-4 photo-sm-wrap" v-for="(image, index) in product.images" :key="index" @mouseover="imgKey=index">
                <div class="photo-sm bg-cover position-relative" :style="`background-image:url(${image});`" >
                  <div class="shade-layer" :class="{'show':index !== imgKey}"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mx-2 ms-md-3">
              <div class="d-flex align-items-center text-fade fs-s my-4 mt-md-0">
                <a href="#" class="ind-pro-nav">首頁</a><span class="mx-2">/</span>
                <a href="#/products" class="ind-pro-nav">商店</a><span class="mx-2">/</span>
                <span class="fs-s text-darkgray">{{product.category}}</span>
              </div>
              <h1 class="fs-4 mb-3">{{product.title}}</h1>
              <div class="ind-pro-content ls-1 mb-4 mb-md-5">
                <p class="mb-2"><span class="aste">★</span><span>處理：</span>{{productContent.process}}</p>
                <p class="mb-2"><span class="aste">★</span><span>焙度：</span>{{productContent.roast}}</p>
                <p class="mb-2"><span class="aste">★</span><span>風味：</span>{{productContent.flavor}}</p>
                <p class="mb-2 lh-custom">{{product.description}}</p>
              </div>
              <div class="mb-4">
                <span class="fs-4 fw-bold me-2" :class="{' text-primary':product.price !== product.origin_price}">NT$ {{product.price}}</span>
                <span class="fs-6 text-decoration-line-through" v-if="product.price !== product.origin_price">$ {{product.origin_price}}</span>
                <span> / 磅</span>
              </div>
              <div class="d-md-flex col-md-8">
                <input class="input-ind-pro me-2 text-center text-md-start" v-model="qty" type="number">
                <button class="btn-ind-pro col-12 col-md-7 mt-2 mt-md-0 position-relative" :class="{'disabled':product.id===status.loadingItem}" @click.prevent="addCart(product.id, qty)">加入購物車
                  <div v-if="product.id===status.loadingItem" class="spinner-custom spinner-ind-pro">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container-fluid guide mb-8">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="py-5 px-3">
              <h2 class="fs-4 mb-3">注意事項</h2>
              <ul>
                <li class="guide-list-item">
                  <i class="fab fa-envira"></i>
                  <p class="guide-text">養豆是我們耐心等待風味熟成的過程，行者的所有咖啡豆皆經過仔細測試，請依造包裝上的Brewing date進行開封沖煮，若提前開封，請在研磨後靜置15分鐘以後再進行沖煮。</p>
                </li>
                <li class="guide-list-item">
                  <i class="fab fa-envira"></i>
                  <p class="guide-text">產品最佳風味期以包裝上標示為準，咖啡豆自製造日起約可存放十二個月。</p>
                </li>
                <li class="guide-list-item">
                  <i class="fab fa-envira"></i>
                  <p class="guide-text">咖啡豆開封後請勿冷藏，以免受潮，並請在三個月內沖煮完畢。</p>
                </li>
              </ul>

            </div>
          </div>
          <div class="d-none d-md-block col-md-6">
            <div class="bg-cover h-100 mx-n12" style="background-image:url(https://images.unsplash.com/photo-1509395595438-0a9e68bffa4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80);"></div>
          </div>
        </div>
      </section>
      <section class="container-fluid container-custom related-products pb-5">
        <h2 class="fs-4 mb-4 text-center">更多商品</h2>
        <HomeSwiper @get-cart="this.$refs.layout.getCart();"></HomeSwiper>
      </section>
    </div>

  </Layout>
  <ScrollTop></ScrollTop>
</template>
<script>
import ToastMessages from '../components/ToastMessages.vue'
import ScrollTop from '@/components/ScrollTop.vue'
import HomeSwiper from '@/components/HomeSwiper.vue'
export default {
  data() {
    return {
      isLoading: false,
      productId: '',
      productContent: {},
      product: {},
      qty: 1,
      imgKey: 0,
      status: {
        loadingItem: "", //對應品項id 該品項轉為disabled並加入讀取效果
      },
    };
  },
  components: {
    ToastMessages,
    ScrollTop,
    HomeSwiper
  },
  inject: ['pushMessagesState'],
  methods: {
    getSingleProduct() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.productId}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.product = res.data.product;
          this.parseContent();
        }
      });
    },
    parseContent() {
      let product = { ...this.product };
      if (product.content) {
        product.content = JSON.parse(`${product.content}`);
      }
      this.productContent = product.content;
    },
    addCart(id, qty) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: qty,
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
    // productContent () {
    //   let product = { ...this.product };
    //   if (product.content) {
    //     product.content = JSON.parse(`${product.content}`);
    //   }
    //   return product.content;
    // }
  },
  created() {
    this.productId = this.$route.params.productId;
    this.getSingleProduct();
  },
};
</script>