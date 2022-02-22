<template>
  <div class="admin-products pt-4 pb-5" style="margin-left:-12px; margin-right:-12px">
    <Loading :active="isLoading"></Loading>
    <div class="d-flex flex-column h-100">
      <div class="text-end mb-3">
        <button class="btn btn-custom-primary-rounded" type="button" @click="openModal(true)">
          <i class="fas fa-plus"></i>
          增加一個產品
        </button>
      </div>
      <table class="table mb-auto">
        <thead>
          <tr>
            <th width="80">分類</th>
            <th>產品名稱</th>
            <th width="80">原價</th>
            <th width="80">售價</th>
            <th width="60" >啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">{{ currency(item.origin_price) }}</td>
            <td class="text-right">{{ currency(item.price) }}</td>
            <td>
              <span class="text-success" v-if="item.is_enabled"><i class="fas fa-check"></i></span>
              <span class="text-muted" v-else><i class="fas fa-times"></i></span>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-success btn-sm" @click="openModal(false, item)">編輯</button>
                <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
    </div>
    
    <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
    <DelModal ref="delModal" :product="delProduct" @delete-product="deleteProduct"></DelModal>

  </div>
</template>
<script>
import ProductModal from '../components/ProductModal.vue'
import DelModal from '../components/DelModal.vue'
import Pagination from '../components/Pagination.vue'
import {currency} from '../methods/filters' // 匯入具名函式

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      delProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components:{
    ProductModal,
    DelModal,
    Pagination
  },
  inject: ['pushMessagesState'],
  methods: {
    currency,
    getProducts(page=1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
      .then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(isNew, item){
      //打開modal 用是否為新品來決定modal中顯示內容
      if (isNew) {
        this.tempProduct = {};
      }else{
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      this.$refs.productModal.showModal();
    },
    updateProduct(item){
      this.tempProduct = item;
      //新增
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      //編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, {data : this.tempProduct})
      .then((res) => {
        productComponent.hideModal();
        this.pushMessagesState(res);
        if (res.data.success) {
          this.getProducts();
        }
      });
    },
    openDelModal(item){
      this.delProduct = { ...item };
      this.$refs.delModal.showModal();
    },
    deleteProduct(){
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.delProduct.id}`;
      this.$http.delete(api)
      .then((res) => {
        if(res.data.success){
          this.$refs.delModal.hideModal();
          this.pushMessagesState(res);
          this.getProducts();
        }
      });
    }
  },
  created(){
     this.getProducts();
  }
};
</script>