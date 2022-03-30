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
    <swiper-slide class="position-relative" v-for="item in productsSameCate" :key="item.id">
      <ProductCard :productItem="item" :loadingItem="status.loadingItem" @add-cart="addCart"/>
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
    props: {
      currCategory: {
        default: '單品'
      }
    },
    data() {
      return{
        slidesNum: 3,
        status: {
          loadingItem: '',
        }
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
      // 載入時先算一次slidesNum
      this.handleWidth();
    },
    methods: {
      handleWidth() {
        if (screen.width >= 992) {
          this.slidesNum = 3;
        }
        else if (screen.width < 992 && screen.width >= 576) {
          this.slidesNum = 2;
        }
        else if (screen.width < 576) {
          this.slidesNum = 1;
        }
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
          }
        })
        .catch((e) => {
          console.error(e);
        });
      }
    },
    computed: {
      productsAll() {
        return this.$store.state.productsAll;
      },
      productsSameCate() {
        return this.productsAll.filter(item => item.category == this.currCategory);
      }
    },
    setup() {
      return {
        modules: [Navigation],
      };
    }
  };
</script>