(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9d35"],{3530:function(e,t,c){"use strict";c.r(t);var s=c("7a23");function a(e,t,c,a,n,o){var r=Object(s["J"])("ToastMessages"),i=Object(s["J"])("router-view"),u=Object(s["J"])("Navbar");return Object(s["B"])(),Object(s["g"])(s["a"],null,[Object(s["k"])(r),Object(s["k"])(u,null,{default:Object(s["V"])((function(){return[Object(s["k"])(i)]})),_:1})],64)}c("ac1f"),c("5319");var n=c("f367"),o={class:"container-fluid"},r={class:"row vh-100"},i={class:"admin-nav px-4 col-md-2 d-flex align-items-center d-md-block"},u=Object(s["h"])("a",{href:"#",class:"font-logo fs-3 text-white me-4 md-md-0 py-3 mb-md-3 d-none d-ss-block"},[Object(s["h"])("h1",null,"Solljus")],-1),d={class:"col-md-10 bg-white"},l={class:"header-bar py-3 px-2 d-flex align-items-center"},h={class:"d-flex align-items-center me-auto"},p=Object(s["h"])("p",{class:"admin-page"},"後台管理",-1),b=Object(s["h"])("i",{class:"fas fa-chevron-right fs-xs mx-2"},null,-1),m={class:"d-flex align-items-center"},j=Object(s["h"])("p",{class:"text-success"},"登入中",-1);function f(e,t,c,a,n,f){return Object(s["B"])(),Object(s["g"])("div",o,[Object(s["h"])("div",r,[Object(s["h"])("nav",i,[u,Object(s["h"])("a",{class:Object(s["s"])(["admin-nav-link py-3 px-2 px-md-0 pt-md-2 pb-md-3",{active:"/admin/products"===f.currPage}]),href:"#/admin/products"},"商品管理",2),Object(s["h"])("a",{class:Object(s["s"])(["admin-nav-link py-3 px-2 px-md-0 pt-md-2 pb-md-3",{active:"/admin/coupons"===f.currPage}]),href:"#/admin/coupons"},"優惠券管理",2),Object(s["h"])("a",{class:Object(s["s"])(["admin-nav-link py-3 px-2 px-md-0 pt-md-2 pb-md-3",{active:"/admin/orders"===f.currPage}]),href:"#/admin/orders"},"訂單管理",2)]),Object(s["h"])("header",d,[Object(s["h"])("div",l,[Object(s["h"])("div",h,[p,b,Object(s["h"])("p",null,Object(s["M"])(f.pageName),1)]),Object(s["h"])("div",m,[j,Object(s["h"])("button",{class:"btn btn-secondary ms-3",onClick:t[0]||(t[0]=function(){return f.logout&&f.logout.apply(f,arguments)})},"登出")])]),Object(s["I"])(e.$slots,"default")])])])}var O={inject:["pushMessagesState"],methods:{logout:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/logout");this.$http.post(t).then((function(t){var c=e;setTimeout((function(){c.pushMessagesState(t,t.data.message)})),t.data.success&&e.$router.push("/login")}))},selectedPage:function(e){this.currPage=e}},computed:{currPage:function(){return this.$route.path},pageName:function(){switch(this.currPage){case"/admin/products":return"商品管理";case"/admin/coupons":return"優惠券管理";case"/admin/orders":return"訂單管理"}}}},g=c("6b0d"),v=c.n(g);const x=v()(O,[["render",f]]);var k=x,w={components:{ToastMessages:n["a"],Navbar:k},created:function(){var e=this,t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t;var c="".concat("https://vue3-course-api.hexschool.io","/api/user/check");this.$http.post(c).then((function(t){t.data.success||e.$router.push("/login")}))}};const $=v()(w,[["render",a]]);t["default"]=$}}]);
//# sourceMappingURL=chunk-2d0b9d35.f45c6356.js.map