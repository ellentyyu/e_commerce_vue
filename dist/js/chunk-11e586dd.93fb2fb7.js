(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11e586dd"],{"00b4":function(t,e,r){"use strict";r("ac1f");var a=r("23e7"),n=r("da84"),c=r("c65b"),i=r("e330"),o=r("1626"),s=r("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=n.Error,d=i(/./.test);a({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!o(e))return d(this,t);var r=c(e,this,t);if(null!==r&&!s(r))throw new l("RegExp exec method returned something other than an Object or null");return!!r}})},1799:function(t,e,r){"use strict";var a=r("7a23"),n={"aria-label":"Page navigation example"},c={class:"pagination border-0 justify-content-center"},i=Object(a["h"])("span",{"aria-hidden":"true"},"«",-1),o=[i],s=["onClick"],u=Object(a["h"])("span",{"aria-hidden":"true"},"»",-1),l=[u];function d(t,e,r,i,u,d){return Object(a["B"])(),Object(a["g"])("nav",n,[Object(a["h"])("ul",c,[Object(a["h"])("li",{class:Object(a["s"])(["page-item",{disabled:!1===r.pages.has_pre}])},[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=Object(a["Y"])((function(t){return d.updatePage(r.pages.current_page-1)}),["prevent"]))},o)],2),(Object(a["B"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(r.pages.total_pages,(function(t){return Object(a["B"])(),Object(a["g"])("li",{class:Object(a["s"])(["page-item",{active:t===r.pages.current_page}]),key:t},[Object(a["h"])("a",{class:"page-link",href:"#",onClick:Object(a["Y"])((function(e){return d.updatePage(t)}),["prevent"])},Object(a["M"])(t),9,s)],2)})),128)),Object(a["h"])("li",{class:Object(a["s"])(["page-item",{disabled:!1===r.pages.has_next}])},[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=Object(a["Y"])((function(t){return d.updatePage(r.pages.current_page+1)}),["prevent"]))},l)],2)])])}var f={props:["pages"],methods:{updatePage:function(t){this.$emit("emit-pages",t)}}},h=r("6b0d"),b=r.n(h);const p=b()(f,[["render",d]]);e["a"]=p},"4df4":function(t,e,r){"use strict";var a=r("da84"),n=r("0366"),c=r("c65b"),i=r("7b0b"),o=r("9bdd"),s=r("e95a"),u=r("68ee"),l=r("07fa"),d=r("8418"),f=r("9a1f"),h=r("35a1"),b=a.Array;t.exports=function(t){var e=i(t),r=u(this),a=arguments.length,p=a>1?arguments[1]:void 0,g=void 0!==p;g&&(p=n(p,a>2?arguments[2]:void 0));var v,j,O,m,y,C,k=h(e),w=0;if(!k||this==b&&s(k))for(v=l(e),j=r?new this(v):b(v);v>w;w++)C=g?p(e[w],w):e[w],d(j,w,C);else for(m=f(e,k),y=m.next,j=r?new this:[];!(O=c(y,m)).done;w++)C=g?o(m,p,[O.value,w],!0):O.value,d(j,w,C);return j.length=w,j}},"853a":function(t,e,r){"use strict";r.r(e);var a=r("7a23"),n={class:"container-fluid container-custom pt-9 pb-7"},c=Object(a["h"])("h1",{class:"fs-3 text-center font-logo mb-4 d-none d-lg-block"},"Solljus Shop",-1),i={class:"mb-4 d-flex justify-content-center"},o={class:"row gy-5"};function s(t,e,r,s,u,l){var d=this,f=Object(a["J"])("ToastMessages"),h=Object(a["J"])("Loading"),b=Object(a["J"])("ProductCard"),p=Object(a["J"])("Pagination"),g=Object(a["J"])("Layout"),v=Object(a["J"])("ScrollTop");return Object(a["B"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(f),Object(a["k"])(h,{active:!l.products.length},null,8,["active"]),Object(a["k"])(g,{ref:"layout"},{default:Object(a["V"])((function(){return[Object(a["h"])("div",n,[c,Object(a["h"])("ul",i,[Object(a["h"])("li",null,[Object(a["h"])("a",{href:"#",class:Object(a["s"])(["mx-1 cate-link",{active:"all"==d.selectedCate}]),onClick:e[0]||(e[0]=Object(a["Y"])((function(t){return l.switchCate("all")}),["prevent"]))},"全部",2)]),Object(a["h"])("li",null,[Object(a["h"])("a",{href:"#",class:Object(a["s"])(["mx-1 cate-link",{active:"單品"==d.selectedCate}]),onClick:e[1]||(e[1]=Object(a["Y"])((function(t){return l.switchCate("單品")}),["prevent"]))},"單品",2)]),Object(a["h"])("li",null,[Object(a["h"])("a",{href:"#",class:Object(a["s"])(["mx-1 cate-link",{active:"配方"==d.selectedCate}]),onClick:e[2]||(e[2]=Object(a["Y"])((function(t){return l.switchCate("配方")}),["prevent"]))},"配方",2)]),Object(a["h"])("li",null,[Object(a["h"])("a",{href:"#",class:Object(a["s"])(["mx-1 cate-link",{active:"周邊"==d.selectedCate}]),onClick:e[3]||(e[3]=Object(a["Y"])((function(t){return l.switchCate("周邊")}),["prevent"]))},"周邊",2)])]),Object(a["h"])("div",o,[(Object(a["B"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(l.displayedProducts,(function(t){return Object(a["B"])(),Object(a["g"])("div",{class:"col-sm-6 col-lg-4",key:t.id},[Object(a["k"])(b,{productItem:t,loadingItem:u.status.loadingItem,onAddCart:l.addCart},null,8,["productItem","loadingItem","onAddCart"])])})),128))]),l.pagination.total_pages?(Object(a["B"])(),Object(a["e"])(p,{key:0,class:"mt-5",pages:l.pagination,onEmitPages:l.switchPage},null,8,["pages","onEmitPages"])):Object(a["f"])("",!0)])]})),_:1},512),Object(a["k"])(v)],64)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function l(t){if(Array.isArray(t))return u(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function d(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function f(t,e){if(t){if("string"===typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(t){return l(t)||d(t)||f(t)||h()}r("99af"),r("4de4"),r("a434"),r("b65f"),r("5319");var p=r("f367"),g=r("e915"),v=r("7fd9"),j=r("1799"),O={data:function(){return{filProductLength:0,status:{loadingItem:""}}},components:{ToastMessages:p["a"],ProductCard:g["a"],ScrollTop:v["a"],Pagination:j["a"]},inject:["pushMessagesState"],methods:{switchCate:function(t){this.$router.push("/products?category=".concat(t,"&page=1"))},switchPage:function(t){this.$router.push("/products?category=".concat(this.selectedCate,"&page=").concat(t))},addCart:function(t){var e=this,r="".concat("https://vue3-course-api.hexschool.io","/api/").concat("a93a93","/cart");this.status.loadingItem=t;var a={product_id:t,qty:1};this.$http.post(r,{data:a}).then((function(t){e.pushMessagesState(t,t.data.message),t.data.success&&(e.status.loadingItem="",e.$refs.layout.getCart())}))}},computed:{products:function(){return this.$store.state.productsAll},filteredProducts:function(){var t=this,e=[];if("all"!=this.selectedCate&&this.selectedCate){var r=b(this.products.filter((function(e){return e.category==t.selectedCate})));e=r}else e=this.products;return e},selectedCate:function(){return this.$route.query.category},selectedPage:function(){return this.$route.query.page},displayedProducts:function(){var t=b(this.filteredProducts);return t.splice(9*(this.selectedPage-1),9)},pagination:function(){var t,e,r,a;return a=parseInt(this.selectedPage),this.filteredProducts.length>0&&(t=(this.filteredProducts.length/9).isInteger?this.filteredProducts.length/9:Math.trunc(this.filteredProducts.length/9)+1),1===t?(r=!1,e=!1):1===a?r=!1:t===a?e=!1:(r=!0,e=!0),{current_page:a,has_next:e,has_pre:r,total_pages:t}}},created:function(){this.$router.replace({path:"/products",query:{category:"all",page:"1"}})}},m=r("6b0d"),y=r.n(m);const C=y()(O,[["render",s]]);e["default"]=C},"9bdd":function(t,e,r){var a=r("825a"),n=r("2a62");t.exports=function(t,e,r,c){try{return c?e(a(r)[0],r[1]):e(r)}catch(i){n(t,"throw",i)}}},a434:function(t,e,r){"use strict";var a=r("23e7"),n=r("da84"),c=r("23cb"),i=r("5926"),o=r("07fa"),s=r("7b0b"),u=r("65f0"),l=r("8418"),d=r("1dde"),f=d("splice"),h=n.TypeError,b=Math.max,p=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var r,a,n,d,f,j,O=s(this),m=o(O),y=c(t,m),C=arguments.length;if(0===C?r=a=0:1===C?(r=0,a=m-y):(r=C-2,a=p(b(i(e),0),m-y)),m+r-a>g)throw h(v);for(n=u(O,a),d=0;d<a;d++)f=y+d,f in O&&l(n,d,O[f]);if(n.length=a,r<a){for(d=y;d<m-a;d++)f=d+a,j=d+r,f in O?O[j]=O[f]:delete O[j];for(d=m;d>m-a+r;d--)delete O[d-1]}else if(r>a)for(d=m-a;d>y;d--)f=d+a-1,j=d+r-1,f in O?O[j]=O[f]:delete O[j];for(d=0;d<r;d++)O[d+y]=arguments[d+2];return O.length=m-a+r,n}})},a630:function(t,e,r){var a=r("23e7"),n=r("4df4"),c=r("1c7e"),i=!c((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:i},{from:n})},b0c0:function(t,e,r){var a=r("83ab"),n=r("5e77").EXISTS,c=r("e330"),i=r("9bf2").f,o=Function.prototype,s=c(o.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=c(u.exec),d="name";a&&!n&&i(o,d,{configurable:!0,get:function(){try{return l(u,s(this))[1]}catch(t){return""}}})},b65f:function(t,e,r){var a=r("23e7"),n=Math.ceil,c=Math.floor;a({target:"Math",stat:!0},{trunc:function(t){return(t>0?c:n)(t)}})},d28b:function(t,e,r){var a=r("746f");a("iterator")},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),c=r("da84"),i=r("e330"),o=r("1a2d"),s=r("1626"),u=r("3a9b"),l=r("577e"),d=r("9bf2").f,f=r("e893"),h=c.Symbol,b=h&&h.prototype;if(n&&s(h)&&(!("description"in b)||void 0!==h().description)){var p={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(b,this)?new h(t):void 0===t?h():h(t);return""===t&&(p[e]=!0),e};f(g,h),g.prototype=b,b.constructor=g;var v="Symbol(test)"==String(h("test")),j=i(b.toString),O=i(b.valueOf),m=/^Symbol\((.*)\)[^)]+$/,y=i("".replace),C=i("".slice);d(b,"description",{configurable:!0,get:function(){var t=O(this),e=j(t);if(o(p,t))return"";var r=v?C(e,7,-1):y(e,m,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:g})}},fb6a:function(t,e,r){"use strict";var a=r("23e7"),n=r("da84"),c=r("e8b5"),i=r("68ee"),o=r("861d"),s=r("23cb"),u=r("07fa"),l=r("fc6a"),d=r("8418"),f=r("b622"),h=r("1dde"),b=r("f36a"),p=h("slice"),g=f("species"),v=n.Array,j=Math.max;a({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var r,a,n,f=l(this),h=u(f),p=s(t,h),O=s(void 0===e?h:e,h);if(c(f)&&(r=f.constructor,i(r)&&(r===v||c(r.prototype))?r=void 0:o(r)&&(r=r[g],null===r&&(r=void 0)),r===v||void 0===r))return b(f,p,O);for(a=new(void 0===r?v:r)(j(O-p,0)),n=0;p<O;p++,n++)p in f&&d(a,n,f[p]);return a.length=n,a}})}}]);
//# sourceMappingURL=chunk-11e586dd.93fb2fb7.js.map