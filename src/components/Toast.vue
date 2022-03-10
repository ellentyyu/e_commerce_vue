<template>
  <div class="toast" :class="`toast-${msg.style}`" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="toast-header p-3 bg-transparent">
      <strong class="me-auto">{{ msg.title }}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body p-3 bg-transparent" v-if="msg.content && msg.content !== msg.title">
      {{ msg.content }}
    </div>
  </div>
</template>
<script>
import Toast from 'bootstrap/js/dist/toast';

export default {
  name: 'Toast',
  props: [
    'msg',
  ],
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 3000,
    });
    toast.show();
  },
};
</script>