<template>
<div></div>
  <ToastMessages></ToastMessages>
  <Layout ref="layout">
    <div>
      <section class="home-banner position-relative mb-4" ref="banner">
        <div class="container-fluid">
          <div class="row vh-100">
            <div class="col-lg-9 bg-cover position-relative" style="background-image:url(https://images.unsplash.com/photo-1579293907405-b0642bdd3d15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80); background-position: 50% 52%">
              <div class="shade-layer"></div>
            </div>
            <div class="d-none d-lg-flex col-lg-3"></div>
          </div>
        </div>
        <div class="home-slogan position-absolute">
          need some
          <div class="rotate-text-wrap">
            <p class="rotate-text">coffee ?</p>
            <p class="rotate-text">energy ?</p>
            <p class="rotate-text">inspiration ?</p>
            <p class="rotate-text brand-name d-inline-block">Solljus <span class="text-white">?</span></p>
          </div>
        </div>
      </section>
      <section class="container-fluid container-custom py-6 three-features fade-in-up" :class="{'fade-in':featuresFadeIn}" ref="threefeatures">
        <div class="row gx-3 gy-5">
          <div class="col-12 col-md-4 feature-item">
            <div class="row g-0 flex-column flex-lg-row">
              <div class="col-lg-6" >
                <div class="bg-cover features-img main-img" style="background-image:url(https://images.unsplash.com/photo-1553292218-4892c2e7e1ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)">
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center justify-content-lg-center justify-content-start">
                <div>
                  <h2 class="fs-6 fw-bold mt-3 mt-lg-0 mb-1">北歐系淺焙</h2>
                  <p class="mb-3">保留咖啡風味特性</p>
                  <a href="#/about/#roast" class="fs-s text-black">
                    <span class="link-underline-reverse">
                      了解更多
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 feature-item">
            <div class="row g-0 flex-column flex-lg-row">
              <div class="col-lg-6" >
                <div class="bg-cover features-img" style="background-image:url(https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80); background-size:130%">
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center justify-content-lg-center justify-content-start">
                <div>
                  <h2 class="fs-6 fw-bold mt-3 mt-lg-0 mb-1">職人杯測沖煮</h2>
                  <p class="mb-3">手沖義式表現俱佳</p>
                  <a href="#/about/#roast" class="fs-s text-black ">
                    <span class="link-underline-reverse">
                      了解更多
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 feature-item">
            <div class="row g-0 flex-column flex-lg-row">
              <div class="col-lg-6" >
                <div class="bg-cover features-img" style="background-image:url(https://images.unsplash.com/photo-1532444564054-53f6d85adb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80)"></div>
              </div>
              <div class="col-lg-6 d-flex align-items-center justify-content-lg-center justify-content-start">
                <div>
                  <h2 class="fs-6 fw-bold mt-3 mt-lg-0 mb-1">咖啡訂閱系統</h2>
                  <p class="mb-3">新鮮咖啡雙週快送</p>
                  <a href="#/about/#brand" class="fs-s text-black">
                    <span class="link-underline-reverse">
                      了解更多
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container-fluid container-custom py-4 home-products fade-in-up" :class="{'fade-in':productsFadeIn}" ref="productions">
        <div class="mb-3 d-flex justify-content-between align-items-end">
          <h2 class="fs-4 fw-bold">精選商品</h2>
          <a href="#/shop/products" class="fw-bold text-primary go-to-shop me-2">逛逛商店
            <i class="fas fa-angle-double-right fs-s ps-1"></i>
          </a>
        </div>
        <HomeSwiper @get-cart="this.$refs.layout.getCart();"></HomeSwiper>
      </section>
      <section class="container-fluid container-custom py-6 mb-5 phy-stores fade-in-up" :class="{'fade-in':phyStoresFadeIn}" ref="phystores">
        <h2 class="fs-4 fw-bold">實體商店</h2>
        <div class="row">
          <div class="col-12 col-md-6 phy-stores-item">
            <div class="bg-cover position-relative phy-stores-info" style="background-image:url(https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80); height:350px" @click="phyStoreShow=!phyStoreShow">
              <div class="d-flex justify-content-center align-items-center h-100">
                <div class="phy-stores-hours" :class="{'show':phyStoreShow}">
                  <h3 class="fs-5 fw-bold mb-3">烘豆工作室 @台東</h3>
                  <ul>
                    <li class="phy-hours-list">
                      <i class="fab fa-envira"></i>
                      <p class="phy-hours-text">台東縣台東市臨海路一段1999巷99號 
                      <a href="https://www.google.com.tw/maps/place/%E8%87%BA%E6%9D%B1%E6%B5%B7%E6%BF%B1%E5%85%AC%E5%9C%92/@22.7496663,121.1571583,19.06z/data=!4m13!1m7!3m6!1s0x346f69439aa9b877:0xc158ea740df1f3b8!2z5rW35bK45bGx6ISI!3b1!8m2!3d23.2591667!4d121.3691667!3m4!1s0x0:0x22ea95e5a3a76810!8m2!3d22.7499!4d121.157638?hl=zh-TW" target="_blank" class="px-2 fas fa-location-arrow"></a></p>
                    </li>
                    <li class="phy-hours-list">
                      <i class="fab fa-envira"></i>
                      <p class="phy-hours-text">11:00 - 18:00 週四公休</p>
                    </li>
                    <li class="phy-hours-list">
                      <i class="fab fa-envira"></i>
                      <p class="phy-hours-text">09-789-9999</p>
                    </li>
                    <li class="phy-hours-list">
                      <i class="fab fa-envira"></i>
                      <p class="phy-hours-text">臨時公休及菜單更新請參考</p>
                      <a href="https://www.facebook.com/" target="_blank" class="media-link align-self-end">社群</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mt-2 phy-stores-text">
              <h3 class="mb-1 fw-bold fs-l link-underline d-inline-block" @click="phyStoreShow=!phyStoreShow">東海岸工作室</h3>
              <p>海景。內用座位。咖啡豆選購。私房甜點。</p>
            </div>
          </div>
          <div class="col-12 col-md-6 phy-stores-item">
            <div class="bg-cover position-relative phy-stores-info" style="background-image:url(https://images.unsplash.com/photo-1573840357491-06851c72e0d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80); height:350px" @click="phyStore2Show=!phyStore2Show">
              <div class="d-flex justify-content-center align-items-center h-100">
                <div class="phy-stores-hours" :class="{'show':phyStore2Show}">
                  <h3 class="fs-5 fw-bold mb-3">咖啡立飲吧 @屏東</h3>
                  <ul>
                    <li class="phy-hours-list">
                      <i class="fab fa-envira"></i>
                      <p class="phy-hours-text">屏東縣屏東市公園路1888巷88號 
                      <a href="https://www.google.com.tw/maps/place/%E5%B1%8F%E6%9D%B1%E5%85%AC%E5%9C%92/@22.674704,120.490899,17.4z/data=!4m13!1m7!3m6!1s0x3471d94ee1742281:0xed215194b3a68355!2z5bGP5p2x57ij!3b1!8m2!3d22.5519759!4d120.5487597!3m4!1s0x346e179a8dfb27cf:0x8903295b6b83b6b7!8m2!3d22.6746753!4d120.4923113?hl=zh-TW" target="_blank" class="px-2 fas fa-location-arrow"></a></p>
                    </li>
                    <li class="phy-hours-list">
                      <i class="fab fa-envira"></i>
                      <p class="phy-hours-text">10:00 - 17:30 週二公休</p>
                    </li>
                    <li class="phy-hours-list">
                      <i class="fab fa-envira"></i>
                      <p class="phy-hours-text">08-789-9999</p>
                    </li>
                    <li class="phy-hours-list">
                      <i class="fab fa-envira"></i>
                      <p class="phy-hours-text">臨時公休及菜單更新請參考</p>
                      <a href="https://www.facebook.com/" target="_blank" class="media-link align-self-end">社群</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mt-2 phy-stores-text">
              <h3 class="mb-1 fw-bold fs-l link-underline d-inline-block" @click="phyStore2Show=!phyStore2Show">咖啡立飲吧</h3>
              <p>咖啡立飲。吧檯坐位。咖啡豆選購。外帶輕食。</p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-8 bg-cover news-letter position-relative" style="background-image:url(https://images.unsplash.com/photo-1502667300144-de6ba1304a27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);">
        <h2 class="fs-5 mb-4 text-center text-white">訂閱最新咖啡電子報</h2>
        <div class="continer">
          <form class="row justify-content-center w-75 px-4 mx-auto g-2">
            <div class="col-12 col-md-8 col-lg-5">
              <input type="email" id="email" class="input-subscribe mb-1" name="email" placeholder="customer@solljus.com">
              <span class="text-primary fs-s">驗證驗證</span>
            </div>
            <div class="col-12 col-md-3 col-lg-2">
              <button class="btn btn-custom-primary w-100">送出</button>
            </div>      
          </form>
        </div>
      </section>
    </div>
  </Layout>
  <ScrollTop></ScrollTop>
</template>

<script>
// @ is an alias to /src
import HomeSwiper from '@/components/HomeSwiper.vue'
import ScrollTop from '@/components/ScrollTop.vue'
import ToastMessages from '../components/ToastMessages.vue'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    ScrollTop,
    ToastMessages
  },
  data() {
    return {
      featuresFadeIn: false,
      productsFadeIn: false,
      phyStoresFadeIn: false,
      phyStoreShow: false,
      phyStore2Show: false,
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    //window.addEventListener("resize", this.handleWidth);
  },
  methods: {
    handleScroll() {
        //console.log(this.$refs.threefeatures.offsetTop, window.scrollY, window.innerHeight, this.$refs.banner.clientHeight);
      if (this.$refs.threefeatures) {
        if (window.scrollY + window.outerHeight * 0.7 >= this.$refs.threefeatures.offsetTop) {
        this.featuresFadeIn = true;
        }
        if (window.scrollY + window.outerHeight * 0.7 >= this.$refs.productions.offsetTop) {
          this.productsFadeIn = true;
        }
        if (window.scrollY + window.outerHeight * 0.7 >= this.$refs.phystores.offsetTop) {
          this.phyStoresFadeIn = true;
        }
      }
    },
    // handleWidth() {
    //   console.log(screen.width);
    // }
  },

}
</script>
