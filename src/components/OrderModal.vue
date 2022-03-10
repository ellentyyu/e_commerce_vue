<template>
  <div
    class="modal fade"
    id="orderModal"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="orderModalLabel">
            <span>修改訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="tempOrder.user">
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <p class="mb-3">訂單號碼</p>
                <p>{{tempOrder.id}}</p>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="name" class="form-label">訂購人</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="tempOrder.user.name"
                    placeholder="請輸入姓名"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="email" class="form-label">E-mail</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="tempOrder.user.email"
                    placeholder="請輸入email"
                  />
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="tel" class="form-label">聯絡電話</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="tel"
                    v-model="tempOrder.user.tel"
                    placeholder="請輸入電話"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="address" class="form-label">收件地址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    v-model="tempOrder.user.address"
                    placeholder="請輸入地址"
                  />
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="true"
                    :false-value="false"
                    v-model="tempOrder.is_paid"
                    id="is_paid"
                  />
                  <label class="form-check-label" for="is_paid">
                    是否付款
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-success" @click="$emit('update-order', tempOrder)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from "@/mixins/modalMixin";
export default {
  mixins: [modalMixin],
  props: {
    order: {
      type: Object,
      default() { return {};}
    }
  },
  watch: {
    order() {
      this.tempOrder = this.order;
    }
  },
  data() {
    return {
      modal: {},
      tempOrder: {}
    };
  }
};
</script>