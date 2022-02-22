<template>
<div></div>
  <Layout>
    <div class="pt-8 about-bg-lightgray">
      <section class="mb-7">
        <div class="about-banner-gray">
          <h1 class="pt-7 pt-md-9 text-center fs-4 mb-4">關於<span class="font-logo">Solljus</span></h1>
        </div>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-11 px-md-3">
              <div class="about-banner bg-cover mx-n12 mx-md-0" style="background-image:url(https://images.unsplash.com/photo-1620154562329-b4d6c9fac183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80);"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="container-fluid about-intro pb-6">
        <!-- <h2 class="fs-4 fw-bold">Solljus</h2> -->
        <p class="col-12 col-md-8 mx-auto mb-7 about-text">Solljus於2016年誕生於東海岸的一間倉庫中，是一間以山海為鄰的獨立烘豆工作室。solljus為瑞典語的「陽光」，表達對於陽光、自然、咖啡以及北歐極淺烘焙風格的熱愛。希望以細膩的手法與大膽的實驗，表達風土賦予每一種咖啡的獨特個性。</p>
        <div class="row mb-5 mb-md-9">
          <div class="col-12 col-md-6">
             <div class="bg-cover about-img mx-lg-n12" style="background-image:url(https://images.unsplash.com/photo-1607681034540-2c46cc71896d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);"></div>
          </div>
          <div class="col-12 col-md-6">
            <div class="about-text-wrap fade-in-left" :class="{'fade-in':roastFadeIn}" ref="roast" id="roast">
              <h2 class="about-title">關於焙度</h2>
              <p class="about-text">
                主打淺焙是為了最大程度保留咖啡豆本身的特性，以品嚐屬於不同產區、品種的風味細節。
              </p>
              <p class="about-text">
                經過北歐深造及各大賽事的淬鍊，不斷探索極淺焙度的無限可能，Solljus創造出酸質明亮、富有甜感的單品咖啡，適合各種手沖手法。另外也發展出義式濃縮也好喝的單品豆以及獨家義式配方。
              </p>
            </div>
          </div>
        </div>
        <div class="row mb-md-5">
          <div class="col-12 col-md-6 order-md-1">
            <div class="bg-cover about-img mx-lg-n12" style="background-image:url(https://images.unsplash.com/photo-1579293907155-c60dcd630d3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80);"></div>
          </div>
          <div class="col-12 col-md-6 order-md-0">
            <div class="about-text-wrap fade-in-left" :class="{'fade-in':brandFadeIn}" ref="brand" id="brand">
              <h2 class="about-title">品牌經營</h2>
              <p class="about-text">
                持續耕耘技術，Solljus現在除了擴大烘豆工作室規模，也在充滿陽光的東海岸有了品牌咖啡店和立飲吧，並且開始提供訂閱制咖啡服務，專注生活的同時也可以持續享受充實身心的咖啡補給。
              </p>
              <!--  省去反覆找尋訂購的麻煩 -->
              <p class="about-text">無論是店內交流，還是線上相遇，Solljus都期待將職人烘焙的細緻風味分享給每個熱愛咖啡的朋友。
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  </Layout>
  <ScrollTop></ScrollTop>
</template>

<script>
// @ is an alias to /src
import ScrollTop from '@/components/ScrollTop.vue'
export default {
  components: {
    ScrollTop,
  },
  data() {
    return {
      roastFadeIn: false,
      brandFadeIn: false
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    // console.log(this.$route.hash);
  },
  methods: {
    handleScroll() {
      if (this.$refs.roast) {
        if (window.scrollY + window.outerHeight * 0.7 >= this.$refs.roast.offsetTop) {
          this.roastFadeIn = true;
        }
        if (window.scrollY + window.outerHeight * 0.7 >= this.$refs.brand.offsetTop) {
          this.brandFadeIn = true;
        }
      }
    },
  },
}
</script>