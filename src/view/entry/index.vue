<template>
  <div :class="$style.root">
    <!-- main -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- footer -->
    <Footer
      :ENV="commonFooter"
      :footerData="footerData"
    />
  </div>
</template>
<script>

import Footer from '@/components/footer'

export default {
  name: 'Entry',
  components: {
    Footer: Footer
  },
  data () {
    return {
      footerData: [
        {key: '备案信息', value: '冀ICP备15027350号-1'},
        {key: '域名', value: 'www.xiaoluzhu.net'},
        {key: '邮箱', value: '139009759@qq.com'}
      ],
      commonFooter: {}
    }
  }
}
</script>

<style lang="less" module>
  .root{
    position: relative;
  }
</style>
