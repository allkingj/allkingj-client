<template>
  <div :class="$style.root">
    <!-- nav -->
    <TopNav
      :ENV="menusType"
      :menus="menus"
    />
    <div :class="$style.content">
      <el-main>{{`欢迎--${_userName}`}}</el-main>
    </div>

  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import TopNav from '@/components/top-nav'
import logo from '@/assets/logo01.png'

export default {
  name: 'Home',
  components: {
    TopNav
  },
  data () {
    return {
      menusType: {
        type: 'horizontal',
        target: 'home',
        textColor: '#fff',
        logoSrc: logo,
        border: 'border-bottom: 1px solid rgba(255,255,255,0.3);'
      },
      menus: [
        {
          name: '首页',
          path: '/home/index'
        }
      ]
    }
  },
  computed: {
    ...mapState('user', ['userInfo']),
    _userName () {
      return this.userInfo ? this.userInfo.username : ''
    }
  },
  methods: {
    ...mapActions('user', ['getUser']),
    init () {
      this.getUser()
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less" module>
  .root{
    background: #1F2325;
    .content{
      min-width: 768px;
      max-width: 1440px;
      margin: 0 auto;
    }
  }
</style>
