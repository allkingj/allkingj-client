<template>
  <div :class="$style.root">
    <div :class="$style.container">
      <!-- 基本信息 -->
      <ul :class="$style.ulBlock">
        <li v-for="(data,i) in footerData" :key="i" :class="$style.liBlock">{{data.key}} : {{data.value}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    ENV: Object, // footer类型
    footerData: Array // footer数据
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" module>
  .root{
    width: 100%;
    background-color: #373d41;
    .container{
      min-width: 768px;
      max-width: 1440px;
      margin: 0 auto;
      line-height: 60px;
      height: 60px;
      .ulBlock{
        margin: 0 20px;
        .liBlock{
          font-size: 14px;
          color: #9b9ea0;
          margin-right: 35px;
          float: left;
          transition: color .3s;
          transition-property: color;
          transition-duration: 0.3s;
          transition-timing-function: ease;
          transition-delay: 0s;
          &:hover{
            color:#28d0e9;
          }
        }
      }
    }
  }
</style>
