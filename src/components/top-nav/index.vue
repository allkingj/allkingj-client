<template>
  <div :class="$style.root" :style="ENV.border">
    <div :class="$style.container">
      <!-- logo -->
      <div :class="$style.logo">
        <img :src="ENV.logoSrc" alt="logo">
      </div>
      <!-- home -->
      <div v-if="ENV.target==='home'">
        <div :class="$style.menus">
          <el-menu
            :default-active="activeIndex"
            :mode="ENV.type"
            :text-color="ENV.textColor"
            :active-text-color="ENV.textColor"
            background-color="transparent"
          >
            <el-menu-item v-for="(menu,i) in menus" :key="i" :index="menu.path"  @click="jumpRouter(menu.path)">
              {{menu.name}}
            </el-menu-item>
          </el-menu>
          <!-- left -->
          <div :class="$style.left">
            <el-menu
              :default-active="activeIndex"
              :mode="ENV.type"
              :text-color="ENV.textColor"
              :active-text-color="ENV.textColor"
              background-color="transparent"
            >
              <el-menu-item index="1-1" @click="logout()">
                退出
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </div>
      <!-- entry -->
      <div v-if="ENV.target==='entry'">
        <div :class="$style.menus"></div>
        <!-- left -->
        <div :class="$style.left">
          <el-menu
            :default-active="activeIndex"
            :mode="ENV.type"
            :text-color="ENV.textColor"
            :active-text-color="ENV.textColor"
            background-color="transparent"
          >
            <el-menu-item v-for="(menu,i) in menus" :key="i" :index="menu.path"  @click="jumpRouter(menu.path)">
              {{menu.name}}
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get } from '@/lib/axios'
export default {
  name: 'TopNav',
  props: {
    ENV: Object, // nav类型
    menus: Array // nav数据
  },
  data () {
    return {
      activeIndex: '' // 当前选中
    }
  },
  methods: {
    jumpRouter (...args) {
      if (args[0]) {
        this.$router.push(args[0])
      }
    },
    logout () {
      get('api/logout', {type: 'content'}).then(resp => {
        this.$message.success(resp.msg)
        this.$router.push('/entry')
      }).catch(err => {
        this.$message.error(err)
      })
    }
  }
}
</script>
<style lang="less" module>
  @logo-height:36px;
  .root{
    width: 100%;
    .container{
      min-width: 768px;
      max-width: 1440px;
      margin: 0 auto;
      position: relative;
      .logo{
        position: absolute;
        top: 50%;
        left:20px;
        margin-top: -@logo-height/2;
        img{
          width: @logo-height;
          height: @logo-height;
        }
      }
      .menus{
        height:60px;
        margin: 0 150px;
      }
      .left{
        position: absolute;
        top: 0;
        right:20px;
        height: 60px;
        width: 73px;
      }
      // 全局更改menu样式
      :global(.el-menu--horizontal){
        border: 0;
      }
      :global(.el-menu-item){
        border: 0;
      }
      :global(.el-menu-item:not(.is-disabled)){
        &:hover{
          color:#00c1de!important;
          background-color: transparent!important;
        }
        &:focus{
          color:#00c1de!important;
          background-color: transparent!important;
        }
      }
      :global(.el-menu-item.is-active){
        border: 0;
      }
    }
  }

</style>
