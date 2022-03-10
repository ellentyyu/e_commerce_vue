<template>
<div class="vh-100 nf-bg">
  <section class="not-found nf-text">
    <h1 class="nf-title pb-3">404 NOT FOUND</h1>
    <p class="nf-content">您訪問的頁面不存在，那就...喝杯咖啡再出發吧！</p>
    <div class="position-relative d-flex justify-content-center pt-3 pb-1">
      <div class="loader">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="cup"><span></span></div>
      </div>
    </div>
    <a href="#" class="mx-auto col-5 col-sm-3 col-lg-2 btn-back-home">回<span class="font-logo fw-normal">Solljus</span>首頁</a>

  </section>
</div>

</template>

<script>
export default {
  components:{
  },
  created() {
  }
}
</script>