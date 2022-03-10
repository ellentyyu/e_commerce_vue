
<template>
  <div class="loader-wrap">
    <div class="loader-bg"></div>
    <div class="loader-icon">
      <span>S</span>
      <span>o</span>
      <span>l</span>
      <span>l</span>
      <span>j</span>
      <span>u</span>
      <span>s</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 客製化loader 目前沒有放
.loader-wrap{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 150;
  display: none;
  align-items: center;
  justify-content: center;
  &.isActive{
    display: flex;
  }
  .loader-bg{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba($color: white, $alpha: .5);
  }
  .loader-icon span{
  display: inline-block;
  font-size: 50px;
  color: #443030da;
  font-family: $font-logo;
  animation: loading 2s infinite;

  &:nth-child(2){
    animation-delay: .1s
  }
  &:nth-child(3){
    animation-delay: .15s
  }
  &:nth-child(4){
    animation-delay: .2s
  }
  &:nth-child(5){
    animation-delay: .25s
  }
  &:nth-child(6){
    animation-delay: .3s
  }
  &:nth-child(7){
    animation-delay: .35s
    }
  &:nth-child(8){
    animation-delay: .4s
    }
  &:nth-child(9){
    animation-delay: .45s
    }
  &:nth-child(10){
    animation-delay: .5s
    }
  &:nth-child(11){
    animation-delay: .55s
    }
  &:nth-child(12){
    animation-delay: .6s
    }
  &:nth-child(13){
    animation-delay: .65s
    }
  &:nth-child(14){
    animation-delay: .7s
    }
  &:nth-child(15){
    animation-delay: .75s
    }
  &:nth-child(16){
    animation-delay: .8s
    }
  &:nth-child(17){
    animation-delay: .85s
    }
  &:nth-child(18){
    animation-delay: .9s
    }

  @keyframes loading  {
    0% {
      transform: translateY(0);
      filter: blur(0);
      opacity: 1;
    }
    30% {
    transform: translateY(15px);
    filter: blur(5px);
    opacity: .2;
    }
    60% {
      transform: translateY(0);
      filter: blur(0);
      opacity: 1;
    }
  }
}
}
</style>