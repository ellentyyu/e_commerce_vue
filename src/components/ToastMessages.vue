
<template>
<!-- 此元件為吐司列表(外框) 內可包含多個吐司元件(可以堆疊及有獨立生命週期) -->
  <div class="toast-container position-fixed pe-2 mt-8 top-0 end-0" style="z-index:99">
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue';
export default {
  components: { Toast },
  data() {
    return {
      messages: [],
    };
  },
  computed: {
    message() {
      return this.$store.state.message;
    }
  },
  watch: {
    message(val) {
      const { style = 'success', title, content } = val;
      this.messages.push({ style, title, content });
    }
  }
};
</script>