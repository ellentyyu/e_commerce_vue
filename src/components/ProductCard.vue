<template>
<div class="h-100 d-flex flex-column">
  <router-link :to="`/product/${productItem.id}`" class="product-img mb-3 position-relative">
    <!-- 靜態圖片 寫法 :src="`/images/products/${productItem.images[0]}`"-->
    <!-- 動態 :src="getImgUrl(productItem.images[0])" -->
    <img
      :src="getImgUrl(productItem.images[0])"
      alt="product" v-if="productItem.images[0]"
    />
    <p class="position-absolute font-logo on-sale" v-if="productItem.price!==productItem.origin_price">On Sale</p>
  </router-link>
  <div class="text-center mb-auto">
    <router-link :to="`/product/${productItem.id}`" class="text-black mb-2">
      <h3 class="fs-6 fw-bold mb-1">{{ productItem.title }}
        <span v-if="productContent && productItem.unit !== '月' && productItem.category == '單品'"> : {{ productContent.process }}&nbsp;</span>
        <span v-if="productContent && productItem.unit !== '月' && productItem.category == '單品'"> {{ productContent.roast }}</span>
      </h3>
    </router-link>
    <span class="fs-6 fw-bold fst-italic text-primary me-2" v-if="productItem.price!==productItem.origin_price">NT$ {{ currency(productItem.price) }}</span>
    <span class="fs-s fst-italic" :class="{ 'text-decoration-line-through':productItem.price!==productItem.origin_price }">NT$ {{ currency(productItem.origin_price) }}</span>
  </div>
  <div class="text-center mt-3">
      <a href="#" class="product-cart-btn position-relative" :class="{ 'disabled':productItem.id===loadingProduct }" @click.prevent="$emit('add-cart', productItem.id)">
        加入購物車
        <div v-if="productItem.id===loadingProduct" class="spinner-custom spinner-productcard position-absolute">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </a>
  </div>
</div>
</template>

<script>
import { currency } from '../methods/filters'
export default {
  props:{
    productItem: {
      type: Object,
      default() {return {}}
    },
    loadingItem: ''
  },
  emits: ['view-product', 'add-cart'],
  watch: {
    loadingItem() {
      this.loadingProduct = this.loadingItem;
    }
  },
  data() {
    return {
      loadingProduct: '',
      productContent: {}
    };
  },
  mounted() {
    this.parseContent();
  },
  methods: {
    currency,
    parseContent() {
      let product = { ...this.productItem };
      if (product.content) {
        product.content = JSON.parse(`${product.content}`);
      }
      this.productContent = product.content;
    },
    getImgUrl(pic) {
      return require('@/assets/images/products/'+ pic);
    }
  }
}
</script>