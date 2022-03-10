<template>
  <div class="admin-coupons admin-table pt-4 pb-5" style="margin-left:-12px; margin-right:-12px">
    <Loading :active="isLoading"></Loading>
    <div class="d-flex flex-column h-100">
      <div class="text-end mb-3">
        <button class="btn btn-custom-primary-rounded" type="button" @click="openModal(true)">
          <i class="fas fa-plus"></i>
          增加一個優惠券
        </button>
      </div>
      <table class="table mb-auto">
        <thead>
          <tr>
            <th>名稱</th>
            <th>百分比</th>
            <th>期限</th>
            <th>啟用</th>
            <th class="column-edit">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.id">
            <td>{{item.title}}</td>
            <td>{{item.percent}}%</td>
            <td>{{item.due_date}}</td>
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
      <Pagination class="mt-4" :pages="pagination" @emit-pages="getCoupons"></Pagination>
    </div>
    <CouponModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon"></CouponModal>
    <DelModal ref="delModal" :delItem="delCoupon" @delete-item="deleteCoupon"></DelModal>

  </div>
</template>
<script>
import CouponModal from '@/components/CouponModal.vue'
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'
import {currency} from '@/methods/filters' // 匯入具名函式

export default {
  data() {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {},
      delCoupon: {},
      isNew: false,
      isLoading: false,
    };
  },
  components:{
    CouponModal,
    DelModal,
    Pagination
  },
  inject: ['pushMessagesState'],
  methods: {
    currency,
    getCoupons(page=1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
      .then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.coupons = res.data.coupons;
          this.processDate(this.coupons)
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(isNew, item){
      //打開modal 用是否為新品來決定modal中顯示內容
      if (isNew) {
        this.tempCoupon = {};
      }else{
        this.tempCoupon = { ...item };
      }
      this.isNew = isNew;
      this.$refs.couponModal.showModal();
    },
    updateCoupon(item){
      // 將modal傳出的日期改為timestamp
      let couponData = { ...item }
      let date = couponData.due_date.split('-').map(n => parseInt(n));
      let d = new Date(date[0], date[1]-1, date[2]);
      couponData.due_date = d.getTime();
     // this.tempCoupon = couponData;
     // 新增商品是以this.tempProduct新增，這裡若如上一行賦值tempCoupon可以運作，但會將timestamp傳回去modal裡，modal的date input會跳格式不符警告

      //新增
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = 'post';
      //編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        httpMethod = 'put';
      }
      const couponComponent = this.$refs.couponModal;
      this.$http[httpMethod](api, {data : couponData})
      .then((res) => {
        couponComponent.hideModal();
        this.pushMessagesState(res);
        if (res.data.success) {
          this.getCoupons();
        }
      });
    },
    openDelModal(item){
      this.delCoupon = item;
      this.$refs.delModal.showModal();
    },
    deleteCoupon(){
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.delCoupon.id}`;
      this.$http.delete(api)
      .then((res) => {
        if(res.data.success){
          this.$refs.delModal.hideModal();
          this.pushMessagesState(res);
          this.getCoupons();
        }
      });
    },
    processDate(ary) {
      ary.forEach(item => {
        let d = new Date(item.due_date);
        let mm = (d.getMonth() + 1).toString();
        let dd = d.getDate().toString();
        if(mm.length == 1) {
          mm = '0' + mm;
        }
        if(dd.length == 1) {
          dd = '0' + dd;
        }
        item.due_date = `${d.getFullYear()}-${mm}-${dd}`
      });
    }
  },
  created(){
     this.getCoupons();
  }
};
</script>