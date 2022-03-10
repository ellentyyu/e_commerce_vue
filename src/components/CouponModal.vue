<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="productModalLabel">
            <span>新增優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="title" class="form-label">優惠券名稱</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempCoupon.title"
                  placeholder="請輸入名稱"
                />
              </div>
              <div class="mb-3">
                <label for="code" class="form-label">優惠券代碼</label>
                <input
                  type="text"
                  class="form-control"
                  id="code"
                  v-model="tempCoupon.code"
                  placeholder="請輸入代碼"
                />
              </div>
              <div class="mb-3">
                <label for="percent" class="form-label">優惠百分比</label>
                <input
                  type="number"
                  class="form-control"
                  id="percent"
                  v-model="tempCoupon.percent"
                  placeholder="請輸入數字"
                />
              </div>
               <div class="mb-3">
                <label for="due_date" class="form-label">期限</label>
                <input
                  type="date"
                  class="form-control"
                  id="due_date"
                  v-model="tempCoupon.due_date"
                  placeholder="請輸入日期"
                />
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempCoupon.is_enabled"
                    id="is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
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
          <button type="button" class="btn btn-success" @click="$emit('update-coupon', tempCoupon)">確認</button>
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
    coupon: {
      type: Object,
      default() { return {};}
    }
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      this.tempCoupon.is_enabled = 1;
    }
  },
  data() {
    return {
      modal: {},
      tempCoupon: {}
    };
  },
};
</script>