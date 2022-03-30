<template>
<div></div>
  <Loading :active="isLoading"/>
  <ToastMessages/>
  <Layout ref="layout" @render-cart="renderCart">
    <div class="pt-9 pb-6 order-bg-lightgray container-fluid container-custom" v-if="cart.carts">
      <template v-if="cart.carts.length">
        <section class="order-three-sqs mb-6">
          <div class="row">
            <div class="col-4">
              <div class="sq-item active">
                <p>STEP 1</p>
                <p>確認訂單</p>
              </div>
            </div>
            <div class="col-4">
              <div class="sq-item">
                <p>STEP 2</p>
                <p>建立訂單</p>
              </div>
            </div>
            <div class="col-4">
              <div class="sq-item">
                <p>STEP 3</p>
                <p>完成訂單</p>
              </div>
            </div>
          </div>
        </section>
        <section class="order-info row gx-lg-5">
          <div class="col-12 col-md-6 mb-5 mb-md-0">
            <div class="order px-2 ps-md-3 ps-lg-5">
              <div class="position-relative">
                <h1 class="header">訂單資訊</h1>
                <button class="btn-edit" @click="this.$refs.layout.isShow = true">修改訂單</button>
              </div>
              <ul>
                <li v-for="item in cart.carts" :key="item.id" class="mb-4 row g-3 align-items-center">
                  <div class="col-auto d-none d-ss-block">
                    <div class="order-img bg-cover" :style="`background-image:url(${getImgUrl(item.product.images[0])});`"></div>
                  </div>
                  <div class="col">
                    <p class="mb-1">{{ item.product.title }}</p>
                    <p class="">數量 : {{ item.qty }}</p>
                  </div>
                  <div class="col-auto col-sm-3 col-lg-auto me-1 me-sm-0">
                    <p class="">NT$ {{ currency(item.total )}}</p>
                  </div>
                </li>
              </ul>
              <div class="input-group mb-4">
                <input v-model="couponCode" type="text" class="form-control text-center" :placeholder="couponPlaceholder" aria-label="coupon code" aria-describedby="coupon">
                <button class="btn btn-coupon" type="button" id="coupon" @click="useCoupon()">套用優惠券</button>
              </div>
              <div class="text-end">
                <p class="mb-2">總計金額<span class="ms-4" :class="{ 'text-decoration-line-through':cart.total!==cart.final_total, 'fs-5':cart.total==cart.final_total }">NT$ {{ currency(cart.total) }}</span></p>
                <p v-if="cart.total!==cart.final_total">折扣後金額 <span class="ms-4 fs-5">NT$ {{ currency(cart.final_total) }}</span></p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="customer px-2 pe-me-3 pe-lg-5">
              <h2 class="header">顧客資訊</h2>
              <Form @submit="createOrder" v-slot="{ errors }">
                <div class="form-item">
                  <label for="email" class="form-label">Email</label>
                  <Field type="email" name="email" rules="email|required" id="email" class="form-control" :class="{ 'is-invalid':errors['email'] }" placeholder="請輸入 Email" v-model="form.user.email"/>
                  <ErrorMessage name="email" class="invalid-feedback mt-1" />
                </div>
                <div class="form-item">
                  <label for="name" class="form-label">收件人姓名</label>
                  <Field type="text" name="收件人姓名" rules="required" id="name" class="form-control" :class="{ 'is-invalid':errors['收件人姓名'] }" placeholder="請輸入姓名" v-model="form.user.name" />
                  <ErrorMessage name="收件人姓名" class="invalid-feedback mt-1" />
                </div>
                <div class="form-item">
                  <label for="phonenb" class="form-label">聯絡電話</label>
                  <Field type="text" name="手機號碼" :rules="isPhone" id="phonenb" class="form-control" :class="{ 'is-invalid':errors['手機號碼'] }" placeholder="請輸入手機號碼" v-model="form.user.tel" />
                  <ErrorMessage name="手機號碼" class="invalid-feedback mt-1" />
                </div>
                <div class="form-item">
                  <label for="address" class="form-label">收件地址</label>
                  <Field type="text" name="收件地址" rules="required" id="address" class="form-control" :class="{ 'is-invalid':errors['收件地址'] }" placeholder="請輸入地址" v-model="form.user.address" />
                  <ErrorMessage name="收件地址" class="invalid-feedback mt-1" />
                </div>
                <div class="form-item">
                  <label for="notes" class="form-label">備註</label>
                  <textarea name="notes" id="notes" class="form-control" v-model="form.message"></textarea>
                </div>
                <button type="submit" class="btn btn-order w-100">送出訂單</button>
              </Form>
            </div>
          </div>
        </section>
      </template>
      <div class="text-center py-8 no-item" v-else>
        <i class="fs-1 mb-3 fas fa-exclamation-circle"></i>
        <p class="ls-1 mb-3">購物車內沒有商品</p>
        <router-link to="/products" class="btn-shop d-inline-block ls-1" @click="isShow=false">挑選商品</router-link>
      </div>
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
      isLoading: true,
      cart: {},
      couponCode: '',
      couponPlaceholder: '請輸入優惠券代碼',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    currency,
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入正確手機號碼'
    },
    renderCart(cart) {
      this.cart = cart;
      this.isLoading = false;
      if (this.cart.total !== this.cart.final_total) {
      this.couponPlaceholder = '已套用優惠券';
      }
    },
    getImgUrl(pic) {
      return require('@/assets/images/products/'+ pic);
    },
    useCoupon() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http.post(api, {data: {'code': this.couponCode}}).then((res) => {
        this.pushMessagesState(res, res.data.message);
        if (res.data.success) {
          this.$refs.layout.getCart();
        }
      })
      .catch((e) => {
        console.error(e);
      });
    },
    createOrder() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      this.$http.post(api, { data: this.form }).then((res) => {
        let vm = this;
        setTimeout(function() {
          vm.pushMessagesState(res, res.data.message);
        });
        if (res.data.success) {
          this.$router.push(`/checkout/${res.data.orderId}`);
        }
      })
      .catch((e) => {
        console.error(e);
      });
    }
  }
}
</script>