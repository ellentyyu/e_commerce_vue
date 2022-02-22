<template>
<div class="h-100 d-flex flex-column">
  <a href="#" class="product-img mb-3 position-relative" @click.prevent="$emit('view-product', productItem.id)">
    <img
      :src="productItem.imageUrl"
      alt="product"
    />
    <!-- <a href="#" class="far fa-heart position-absolute fs-5"></a> -->
    <p class="position-absolute text-white font-logo on-sale" v-if="productItem.price!==productItem.origin_price">On Sale</p>
  </a>
  <div class="product-text mb-auto">
    <a href="#" class="text-black mb-2" @click.prevent="$emit('view-product', productItem.id)">
      <h3 class="fs-6 fw-bold mb-1">{{ productItem.title }}
        <span v-if="productContent"> : {{ productContent.process}}&nbsp;</span>
        <span v-if="productContent"> {{ productContent.roast}}</span>
      </h3>
      <!-- <p class="fs-6">{{ productItem.description }}</p> -->
    </a>
    <!-- <div class="prices-wrap"> -->
      <span class="fs-6 fw-bold fst-italic text-primary me-2" v-if="productItem.price!==productItem.origin_price">NT$ {{ productItem.price }}</span>
      <span class="fs-s fst-italic" :class="{'text-decoration-line-through':productItem.price!==productItem.origin_price}">NT$ {{ productItem.origin_price }}</span>
   
  </div>
  <div class="text-center mt-2">
      <a href="#" class="product-cart-btn position-relative" :class="{'disabled':productItem.id===loadingProduct}" @click.prevent="$emit('add-cart', productItem.id)">
        加入購物車
        <div v-if="productItem.id===loadingProduct" class="spinner-custom spinner-productcard position-absolute">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
        <!-- v-if="productItem.id===loadingProduct" -->
      </a>
  </div>
</div>
</template>

<script>
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
    parseContent() {
      let product = { ...this.productItem };
      if (product.content) {
        product.content = JSON.parse(`${product.content}`);
      }
      this.productContent = product.content;
    }
  }
}
</script>