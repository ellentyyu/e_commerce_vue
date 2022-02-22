<template>
  <div
    class="modal fade"
    id="delModal"
    tabindex="-1"
    aria-labelledby="delModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0 mx-auto">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="delModalLabel">
            <span>刪除 {{product.title}}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
        <p>是否刪除 <span class="text-danger fw-bold">{{product.title}}</span>？<br>刪除後將無法恢復。</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="$emit('delete-product')">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from "@/mixins/modalMixin"
export default {
  props: {
    product: {
      type: Object,
      default() { return {};}
    }
  },
  data() {
    return {
      modal: {},
    };
  },
  mixins: [modalMixin]
};
</script>