<template>
  <swiper
    :modules="modules"
    :slides-per-view="slidesNum"
    :space-between="25"
    :slides-offset-before="0"
    navigation
    :loop="true"
    :draggable="true"
    id="products-swiper"
    class="py-3"
  >
    <swiper-slide class="position-relative" v-for="item in products" :key="item.id">
      <ProductCard :productItem="item" :loadingItem="status.loadingItem" @view-product="viewProduct" @add-cart="addCart"></ProductCard>
    </swiper-slide>
  </swiper>
</template>
<script>
  import { Navigation} from 'swiper';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

  // Import Swiper styles
  import 'swiper/swiper-bundle.css';

  import ProductCard from '@/components/ProductCard.vue'
  export default {
    data() {
      return{
        slidesNum: 3,
        products: [],
        status: {
          loadingItem: "", //對應品項id 該品項轉為disabled並加入讀取效果
        },
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      ProductCard
    },
    inject: ['pushMessagesState'],
    created() {
      window.addEventListener("resize", this.handleWidth);
      this.getProducts();
    },
    methods: {
      handleWidth() {
        if(screen.width >= 768){
          this.slidesNum = 3;
        }
        else if(screen.width < 768 && screen.width >= 576){
          this.slidesNum = 2;
        }
        else if(screen.width < 576){
          this.slidesNum = 1;
        }
      },
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
            this.$emit('get-cart');
            //this.$refs.layout.getCart();
          }
        });
      },
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
</script>