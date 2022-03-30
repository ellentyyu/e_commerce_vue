<template>
  <Loading :active="isLoading"/>
  <ToastMessages/>
  <Layout ref="layout">
    <div class="pt-9 pb-6 order-bg-lightgray container-fluid container-custom">
      <section class="order-three-sqs mb-6">
        <div class="row">
          <div class="col-4">
            <div class="sq-item">
              <p>STEP 1</p>
              <p>確認訂單</p>
            </div>
          </div>
          <div class="col-4">
            <div class="sq-item" :class="{ 'active':!order.is_paid }">
              <p>STEP 2</p>
              <p>建立訂單</p>
            </div>
          </div>
          <div class="col-4">
            <div class="sq-item" :class="{ 'active':order.is_paid }">
              <p>STEP 3</p>
              <p>完成訂單</p>
            </div>
          </div>
        </div>
      </section>
      <section class="payment-success row justify-content-center mb-5" v-if="order.is_paid">
        <div class="col-12 col-md-6">
          <div class="payment-success-bg py-5">
            <div class="text-center mb-4">
              <h2 class="mb-1 fs-5 fw-bold ls-1">感謝您的訂購</h2>
              <p class="fw-bold ls-1">訂單為您盡速處理中<i class="ms-2 fas fa-shipping-fast"></i></p>
            </div>
            <div class="d-flex justify-content-center">
              <router-link to="/" class="col-5 col-sm-3 mx-3 btn-back-home">回到首頁</router-link>
              <router-link to="/products" class="col-5 col-sm-3 mx-3 btn-back-shop">繼續逛逛</router-link>
            </div>
          </div>
        </div>
      </section>
      <section class="order-placed row justify-content-center">
        <div class="col-12 col-md-6">
          <div v-if="order.user">
            <h1 class="header">訂購資訊</h1>
            <ul class="order-details px-1 px-sm-0">
              <li class="d-flex mb-3">
                <p class="col-4 fw-bold">下單日期：</p>
                <p>{{ order.create_at }}</p>
              </li>
              <li class="d-flex mb-3">
                <p class="col-4 fw-bold">訂單編號：</p>
                <p class="text-break">{{ order.id }}</p>
              </li>
              <li class="d-flex mb-3">
                <p class="col-4 fw-bold">顧客姓名：</p>
                <p>{{ order.user.name }}</p>
              </li>
              <li class="d-flex mb-3">
                <p class="col-4 fw-bold">聯絡電話：</p>
                <p>{{ order.user.tel }}</p>
              </li>
              <li class="d-flex mb-3">
                <p class="col-4 fw-bold">電子郵件：</p>
                <p class="text-break">{{ order.user.email }}</p>
              </li>
              <li class="d-flex mb-3">
                <p class="col-4 fw-bold">收件地址：</p>
                <p>{{ order.user.address }}</p>
              </li>
              <li class="d-flex mb-3" v-if="order.message">
                <p class="col-4 fw-bold">備註：</p>
                <p>{{ order.message }}</p>
              </li>
              <li>
                <div class="d-flex mb-3 align-items-center">
                  <p class="col-4 fw-bold">訂單金額：</p>
                  <p>NT$ {{ currency(order.total) }}</p>
                  <a href="#" class="ms-4 px-3 fs-5 fas fa-chevron-circle-down" :class="{ 'show':isShow }" @click.prevent="isShow=!isShow" ></a>
                </div>
                <div class="products-details" ref="details" :style="detailsHeight">
                  <p class="fw-bold mb-3">訂單明細：</p>
                  <ul class="px-2 px-sm-4">
                    <li v-for="item in order.products" :key="item.id" class="mb-3 row g-3 align-items-center">
                      <div class="col-auto d-none d-ss-block">
                        <div class="bg-cover order-img" :style="`background-image:url(${getImgUrl(item.product.images[0])});`"></div>
                      </div>
                      <div class="col">
                        <p class="mb-1">{{ item.product.title }}</p>
                        <p class="">數量 : {{ item.qty }}</p>
                      </div>
                      <div class="col-auto col-sm-3">
                        <p class="">NT$ {{ currency(item.total) }}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="d-flex mb-3">
                <p class="col-4 fw-bold">付款狀態：</p>
                <p v-if="!order.is_paid" class="text-primary">尚未付款</p>
                <p v-if="order.is_paid" class="text-success">付款成功</p>
              </li>
            </ul>
            <button class="btn btn-payment w-100 mt-3" type="button" @click="payOrder" v-if="!order.is_paid">確認結帳</button>
            <button class="btn btn-goback w-100 mt-3"  type="button" @click="this.$router.back()" v-if="!order.is_paid">回上一頁</button>
          </div>
        </div>
      </section>
    </div>
  </Layout>
  <ScrollTop/>
</template>

<script>
import ScrollTop from '@/components/ScrollTop.vue'
import ToastMessages from '@/components/ToastMessages.vue'
import { currency } from '@/methods/filters'

export default {
  components: {
    ScrollTop,
    ToastMessages
  },
  inject: ['pushMessagesState'],
  data() {
    return {
      isShow: false,
      isLoading: false,
      order: {},
    }
  },
  methods: {
    currency,
    getOrder() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.order = res.data.order;
          this.order.total = Math.round(this.order.total);
          this.order.create_at = this.processDate(this.order.create_at);
        }
      })
      .catch((e) => {
        console.error(e);
      });
    },
    getImgUrl(pic) {
      return require('@/assets/images/products/'+ pic);
    },
    processDate(timestamp) {
      let d = new Date(timestamp*1000);
      let yy = d.getFullYear();
      let mm = d.getMonth() + 1;
      let dd = d.getDate();
      return `${yy}-${mm}-${dd}`;
    },
    payOrder() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.isLoading = true;
      this.$http.post(api).then((res) => {
        this.isLoading = false;
        this.pushMessagesState(res, res.data.message);
        if (res.data.success) {
          this.getOrder();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
    }
  },
  computed: {
    detailsHeight() {
      return {
        'max-height': this.isShow? `${this.$refs.details.scrollHeight}px`: '0',
      }
    },
    orderId() {
      return this.$route.params.orderId;
    }
  },
  created() {
    this.getOrder();
  }
}
</script>