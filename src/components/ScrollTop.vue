<template>
  <div class="scroll-top position-fixed">
    <a href="#" class="fas fa-caret-up scroll-top-arrow fs-s text-center text-white" @click.prevent="scrollTop"></a>
  </div>
</template>
<script>
export default {
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
}
</script>