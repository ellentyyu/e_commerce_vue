<template>
<div></div>
  <Layout>
    <div>
      <section>
        <div class="help-banner bg-cover" style="background-image:url(https://images.unsplash.com/photo-1515215234071-62cca5638e20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);background-position: 50% 50%;"></div>
      </section>
      <section class="container-fluid container-custom pt-7 mb-8 q-text">
        <div class="row g-5 justify-content-end pe-md-3 pe-lg-6">
          <div class="col-12 col-md-7">
            <h1 class="fs-4 fw-bold mb-4">常見問題</h1>
            <div class="mb-6">
              <h2 class="fs-6 fw-bold">關於咖啡</h2>
              <div class="accordion accordion-flush" id="accordionCoffee">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coffee-One" aria-expanded="false" aria-controls="coffee-One">
                    Accordion Item #1
                  </button>
                </h2>
                <div id="coffee-One" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionCoffee">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coffee-Two" aria-expanded="false" aria-controls="coffee-Two">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="coffee-Two" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionCoffee">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coffee-Three" aria-expanded="false" aria-controls="coffee-Three">
                    Accordion Item #3
                  </button>
                </h2>
                <div id="coffee-Three" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionCoffee">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              </div>
            </div>
            <div>
              <h2 class="fs-6 fw-bold">商品寄送</h2>
              <div class="accordion accordion-flush" id="accordionCoffee">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coffee-One" aria-expanded="false" aria-controls="coffee-One">
                    Accordion Item #1
                  </button>
                </h2>
                <div id="coffee-One" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionCoffee">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coffee-Two" aria-expanded="false" aria-controls="coffee-Two">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="coffee-Two" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionCoffee">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coffee-Three" aria-expanded="false" aria-controls="coffee-Three">
                    Accordion Item #3
                  </button>
                </h2>
                <div id="coffee-Three" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionCoffee">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <h3 class="fs-6 fw-bold mb-4">有話想直接告訴Solljus？</h3>
            <p class="mb-3">找不到想問的問題嗎？或想跟我們分享寶貴的意見？歡迎直接歡迎直接寄e-mail給我們！</p>
            <a href="#" class="fw-bold">Email Solljus</a>
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
    }
  },
  methods: {
  },

}
</script>
