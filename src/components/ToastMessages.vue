
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
import emitter from '@/methods/emitter';
export default {
  components: { Toast },
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    //外部(其他元件)會觸發push-message事件 並將message傳入這裡
    //訊息被推入messages陣列中就會觸發單一toast生命週期
      emitter.on('push-message', (message)=>{
        const {style = 'success', title, content} = message;
        this.messages.push({style, title, content});
    })
  },
};
</script>