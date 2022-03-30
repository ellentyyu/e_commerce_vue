<template>
  <Navbar>
    <div class="admin-orders admin-table pt-4 pb-5" style="margin-left:-12px; margin-right:-12px">
      <Loading :active="isLoading"/>
      <div class="d-flex flex-column h-100">
        <table class="table mb-auto">
          <thead>
            <tr>
              <th class="column-id">訂單號碼</th>
              <th class="column-date">訂單日期</th>
              <th class="column-name" width="60">訂購人</th>
              <th>付款</th>
              <th class="column-edit">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orders" :key="item.id">
              <td class="text-break">{{ item.id }}</td>
              <td class="text-break">{{ item.create_at }}</td>
              <td v-if="item.user">{{ item.user.name }}</td>
              <td>
                <span class="text-success" v-if="item.is_paid"><i class="fas fa-check"></i></span>
                <span class="text-muted" v-else><i class="fas fa-times"></i></span>
              </td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-outline-success btn-sm" type="button" @click="openModal(item)">編輯</button>
                  <button class="btn btn-outline-danger btn-sm" type="button" @click="openDelModal(item)">刪除</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination class="mt-4" :pages="pagination" @emit-pages="getOrders"/>
      </div>
      <OrderModal ref="orderModal" :order="tempOrder" @update-order="updateOrder"/>
      <DelModal ref="delModal" :delItem="delOrder" @delete-item="deleteOrder"/>
    </div>
  </Navbar>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import OrderModal from '@/components/OrderModal.vue'
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'
import { currency } from '@/methods/filters'

export default {
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      delOrder: {},
      isLoading: false
    };
  },
  components: {
    Navbar,
    OrderModal,
    DelModal,
    Pagination
  },
  inject: ['pushMessagesState'],
  methods: {
    currency,
    getOrders(page=1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
      .then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.orders = res.data.orders;
          this.processData(this.orders);
          this.pagination = res.data.pagination;
        }
      })
      .catch((e) => {
        console.error(e);
      });
    },
    openModal(item) {
      this.tempOrder = { ...item };
      this.$refs.orderModal.showModal();
    },
    updateOrder(item) {
    // 將modal傳出的日期改為timestamp
      let orderData = { ...item }
      let date = orderData.create_at.split('-').map(n => parseInt(n));
      let d = new Date(date[0], date[1]-1, date[2]);
      orderData.create_at = d.getTime() / 1000;

      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const couponComponent = this.$refs.orderModal;
      this.$http.put(api, {data : orderData})
      .then((res) => {
        couponComponent.hideModal();
        this.pushMessagesState(res);
        if (res.data.success) {
          this.getOrders(this.pagination.current_page);
        }
      })
      .catch((e) => {
        console.error(e);
      });
    },
    openDelModal(item) {
      this.delOrder = item;
      this.$refs.delModal.showModal();
    },
    deleteOrder() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.delOrder.id}`;
      this.$http.delete(api)
      .then((res) => {
        if (res.data.success) {
          this.$refs.delModal.hideModal();
          this.pushMessagesState(res);
          this.getOrders(this.pagination.current_page);
        }
      })
      .catch((e) => {
        console.error(e);
      });
    },
    processData(ary) {
      ary.forEach(item => {
        // 金額
        item.total = Math.round(item.total);
        // 日期
        let d = new Date(item.create_at * 1000);
        let mm = (d.getMonth() + 1).toString();
        let dd = d.getDate().toString();
        if (mm.length == 1) {
          mm = '0' + mm;
        }
        if (dd.length == 1) {
          dd = '0' + dd;
        }
        item.create_at = `${d.getFullYear()}-${mm}-${dd}`
      });
    }
  },
  created() {
    this.getOrders();
  }
};
</script>