<template>
  <Layout>
    <div>
      <section>
        <div class="help-banner bg-cover" :style="`background-image: url(${require('@/assets/images/help_banner.jpg')})`"></div>
      </section>
      <section class="container-fluid container-custom pt-7 mb-8 q-text">
        <div class="row g-5 justify-content-end pe-md-3 pe-lg-6">
          <div class="col-12 col-md-7">
            <h1 class="fs-4 fw-bold mb-4">常見問題</h1>
            <div class="mb-6">
              <h2 class="fs-6 fw-bold">關於咖啡</h2>
              <div class="accordion accordion-flush" id="accordionCoffee">
              <div class="accordion-item">
                <h2 class="accordion-header" id="coffee-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coffee-One" aria-expanded="false" aria-controls="coffee-One">
                    為什麼Solljus的單品豆以淺焙居多？
                  </button>
                </h2>
                <div id="coffee-One" class="accordion-collapse collapse" aria-labelledby="coffee-headingOne" data-bs-parent="#accordionCoffee">
                  <div class="accordion-body">Solljus專攻北歐風格的極淺焙度，主要因為淺焙最能保留咖啡豆本身的風味。讓客人可以喝到有個性的單品是我們進步和努力的動力。</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="coffee-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coffee-Two" aria-expanded="false" aria-controls="coffee-Two">
                    淺焙咖啡都很酸嗎？我不習慣咖啡的酸感怎麼辦？
                  </button>
                </h2>
                <div id="coffee-Two" class="accordion-collapse collapse" aria-labelledby="coffee-headingTwo" data-bs-parent="#accordionCoffee">
                  <div class="accordion-body">
                    在專業烘焙師的把關下，Solljus呈現豆子天然、平衡的風味，並避免烘烤不完全所產生的草木味，以及過於尖銳的酸澀味道。如果還不太確定喜不喜歡酸感，也可以與我們討論，選擇酸感柔和或以苦甜為主調的單品。
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="coffee-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coffee-Three" aria-expanded="false" aria-controls="coffee-Three">
                    什麼是養豆？
                  </button>
                </h2>
                <div id="coffee-Three" class="accordion-collapse collapse" aria-labelledby="coffee-headingThree" data-bs-parent="#accordionCoffee">
                  <div class="accordion-body">
                    剛烘好的咖啡豆建議經過七至十天的養豆過程，風味會更加完整成熟。養豆期間請將咖啡豆存放在無陽光直射的室內，再進行開封沖煮。若提前開封，請在研磨後靜置15分鐘。
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="coffee-headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coffee-Four" aria-expanded="false" aria-controls="coffee-Four">
                    我是手沖新手，完全不懂沖煮參數怎麼辦？
                  </button>
                </h2>
                <div id="coffee-Four" class="accordion-collapse collapse" aria-labelledby="coffee-headingFour" data-bs-parent="#accordionCoffee">
                  <div class="accordion-body">
                    專業烘焙的咖啡豆不需要華麗的手法或昂貴的器材也能很好喝。除了用自己習慣的方式沖煮，我們的咖啡豆包裝上都附有建議的沖煮參數，讓你可以簡單享受好喝單品。
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div class="mb-6">
              <h2 class="fs-6 fw-bold">訂閱服務</h2>
              <div class="accordion accordion-flush" id="accordionSubscribe">
              <div class="accordion-item">
                <h2 class="accordion-header" id="subsribe-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#subscribe-One" aria-expanded="false" aria-controls="subscribe-One">
                    咖啡訂閱是什麼？
                  </button>
                </h2>
                <div id="subscribe-One" class="accordion-collapse collapse" aria-labelledby="subsribe-headingOne" data-bs-parent="#accordionSubscribe">
                  <div class="accordion-body">
                    每個月第一週Solljus會寄送精心搭配的兩款咖啡豆，讓你可以省去反覆尋找、下單的麻煩，專注享受生活及每日的咖啡。
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="subscribe-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#subscribe-Two" aria-expanded="false" aria-controls="subscribe-Two">
                    咖啡訂閱的內容可以選擇嗎？
                  </button>
                </h2>
                <div id="subscribe-Two" class="accordion-collapse collapse" aria-labelledby="subscribe-headingTwo" data-bs-parent="#accordionSubscribe">
                  <div class="accordion-body">
                    目前提供單品或配方兩種訂閱選擇，每月的詳細品項則依當期選豆為主。
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="subscribe-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#subsribe-Three" aria-expanded="false" aria-controls="subsribe-Three">
                    咖啡訂閱只能使用信用卡付款嗎？要怎麼取消訂閱？
                  </button>
                </h2>
                <div id="subsribe-Three" class="accordion-collapse collapse" aria-labelledby="subscribe-headingThree" data-bs-parent="#accordionSubscribe">
                  <div class="accordion-body">
                    咖啡訂閱目前僅提供信用卡每月扣款方式付款。取消咖啡訂閱請<a href="tel:+8860900000000" class="link-underline-reverse">來電</a>或<a href="mailto:solljus@solljus.com" class="link-underline-reverse">來信</a>Solljus。
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div class="mb-6">
              <h2 class="fs-6 fw-bold">商品使用與保存</h2>
              <div class="accordion accordion-flush" id="accordionPreserve">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="preserve-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#preserve-One" aria-expanded="false" aria-controls="preserve-One">
                      咖啡豆多久要用完？
                    </button>
                  </h2>
                  <div id="preserve-One" class="accordion-collapse collapse" aria-labelledby="preserve-headingOne" data-bs-parent="#accordionPreserve">
                    <div class="accordion-body">
                      咖啡豆自製造日起約可存放十二個月，但請盡量在三個月內沖煮完畢，以享用最佳美味。其他食品類商品最佳賞味期請參考包裝上日期。
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="preserve-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#preserve-Two" aria-expanded="false" aria-controls="preserve-Two">
                      開封後的咖啡豆如何存放？
                    </button>
                  </h2>
                  <div id="preserve-Two" class="accordion-collapse collapse" aria-labelledby="preserve-headingTwo" data-bs-parent="#accordionPreserve">
                    <div class="accordion-body">
                      咖啡豆皆以具單向排氣閥的深色豆袋包裝，開封後每次取用該次沖煮所需量即可，剩餘豆子可以繼續置於袋中保鮮，請勿冷藏，以免受潮。
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-6">
              <h2 class="fs-6 fw-bold">付款與運送</h2>
              <div class="accordion accordion-flush" id="accordionShipping">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="shipping-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#shipping-One" aria-expanded="false" aria-controls="shipping-One">
                      付款及運送方式有哪些？
                    </button>
                  </h2>
                  <div id="shipping-One" class="accordion-collapse collapse" aria-labelledby="shipping-headingOne" data-bs-parent="#accordionShipping">
                    <div class="accordion-body">
                      付款方式：信用卡付款、超商取貨付款、LINE PAY。<br>
                      運送方式：超商取貨(7-11、全家)、宅配(新竹貨運、黑貓宅急便)
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="shipping-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#shipping-Two" aria-expanded="false" aria-controls="shipping-Two">
                      多久可以收到商品？
                    </button>
                  </h2>
                  <div id="shipping-Two" class="accordion-collapse collapse" aria-labelledby="shipping-headingTwo" data-bs-parent="#accordionShipping">
                    <div class="accordion-body">
                      商品將於完成付款後三至五個工作日內出貨，不含例假日。配送時間為週一至週五10:00-18:00。若節慶假日遇訂單較多或不可抗力天災因素，則可能延遲出貨。
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="shipping-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#shipping-Three" aria-expanded="false" aria-controls="shipping-Three">
                      可以開發票嗎？
                    </button>
                  </h2>
                  <div id="shipping-Three" class="accordion-collapse collapse" aria-labelledby="shipping-headingThree" data-bs-parent="#accordionShipping">
                    <div class="accordion-body">
                      為因應政府無紙化政策，系統會在您付款後 12 小時內自動開立電子發票，並直接寄送至您的 email 信箱。
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-6">
              <h2 class="fs-6 fw-bold">退換貨政策</h2>
              <div class="accordion accordion-flush" id="accordionRefund">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="refund-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#refund-One" aria-expanded="false" aria-controls="refund-One">
                      多久內可以退換貨？
                    </button>
                  </h2>
                  <div id="refund-One" class="accordion-collapse collapse" aria-labelledby="refund-headingOne" data-bs-parent="#accordionRefund">
                    <div class="accordion-body">
                      Solljus提供商品自取貨起七天鑑賞期。如您在這段期間商品未拆封、使用，或發現有非人為造成的瑕疵、故障或是其他任何因素，可以提出退、換貨。
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="refund-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#refund-Two" aria-expanded="false" aria-controls="refund-Two">
                      退換貨有哪些限制或注意事項？
                    </button>
                  </h2>
                  <div id="refund-Two" class="accordion-collapse collapse" aria-labelledby="refund-headingTwo" data-bs-parent="#accordionRefund">
                    <div class="accordion-body">
                      1. 咖啡豆及任何食品如已拆封，恕無法接受退換。<br>
                      2. 請先透過<a href="tel:+8860900000000" class="link-underline-reverse">電話</a>或<a href="mailto:solljus@solljus.com" class="link-underline-reverse">email</a>與我們聯絡退換貨事宜。退換貨時，請將商品恢復為送達時的完整樣貌，連同單據及贈品一併裝進原包裝箱中，以確保您的權益。若商品不齊全或因包裝不妥導致寄送過程產生損壞，恕無法辦理退換貨，敬請見諒。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <h3 class="fs-6 fw-bold mb-2 mb-md-3 mt-1">有話想直接告訴Solljus？</h3>
            <p class="mb-4 email-us">找不到想問的問題嗎？或想跟我們分享寶貴的意見？歡迎直接寄 email 給我們！</p>
            <a href="mailto:solljus@solljus.com" class="email-us-link link-underline-reverse">Email Solljus</a>
          </div>
        </div>
      </section>
    </div>
  </Layout>
  <ScrollTop/>
</template>

<script>
import ScrollTop from '@/components/ScrollTop.vue'
export default {
  components: {
    ScrollTop
  }
}
</script>
