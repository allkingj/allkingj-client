<template>
  <div :class="$style.root">
    <!-- nav -->
    <TopNav
      :ENV="menusType"
      :menus="menus"
    />
    <div :class="$style.container">
      <div :class="$style.registerBlock">
        <div :class="$style.formBlock">
          <div :class="$style.registerHead">欢迎注册小鹿猪</div>
          <div :class="$style.registerTips">
            <span>{{tips.title}}</span>
            <router-link :class="$style.tipLinks" :to="tips.path">{{tips.label}}</router-link>
          </div>
          <form action="" :class="$style.form">
             <div :class="$style.registerInput">
                <el-input v-model="memberName" placeholder="设置会员名"></el-input>
              </div>
              <div :class="$style.registerInput">
                <el-input type="password" v-model="memberPassword" placeholder="设置你的登陆密码"></el-input>
              </div>
              <div :class="$style.registerInput">
                <el-input type="password" v-model="checkPassword" placeholder="设再次输入你的密码"></el-input>
              </div>
              <div :class="$style.registerInputMobile">
                <span :class="$style.contryCode">+86</span>
                <span :class="$style.inputMobile">
                  <el-input v-model="mobile" placeholder="请输入手机号码"></el-input>
                </span>
              </div>
              <div :class="$style.quickPass">
                <drag-verify
                  ref="quickPass"
                  :width="quickPass.width"
                  :height="quickPass.height"
                  :text="quickPass.text"
                  :success-text="quickPass.successText"
                  :background="quickPass.background"
                  :progress-bar-bg="quickPass.progressBarBg"
                  :completed-bg="quickPass.completedBg"
                  :handler-bg="quickPass.handlerBg"
                  :handler-icon="quickPass.handlerIcon"
                  :text-size="quickPass.textSize"
                  :success-icon="quickPass.successIcon"
                  :circle="quickPass.circle"
                  :color="quickPass.color"
                  >
                </drag-verify>
              </div>
              <el-button type="text" :class="$style.registerSubmit" @click="postMsg">
                注册
              </el-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CryptoJs from '@/lib/cryptoJs'
import { mapState, mapActions } from 'vuex'
import { post } from '@/lib/axios'
import dragVerify from 'vue-drag-verify'
import TopNav from '@/components/top-nav'
import logo from '@/assets/logo02.png'

export default {
  name: 'Register',
  components: {
    dragVerify,
    TopNav: TopNav
  },
  computed: {
    ...mapState('user', ['userInfo'])
  },
  data () {
    return {
      memberName: '',
      memberPassword: '',
      checkPassword: '',
      mobile: '',
      quickPass: {
        width: 320,
        height: 40,
        text: '按住滑块，拖动到最右边',
        successText: '验证通过',
        background: '#d7d8d9',
        progressBarBg: '#00c1de',
        color: '#4d4d4d',
        completedBg: '#67c23a',
        handlerBg: '#fff',
        handlerIcon: 'iconfont icon-doubleright',
        textSize: '12px',
        successIcon: 'iconfont icon-check-circle',
        circle: false
      },
      menusType: {
        type: 'horizontal',
        target: 'entry',
        textColor: '#373D41',
        logoSrc: logo,
        border: 'border-bottom: 1px solid #D7D8D9;'
      },
      menus: [
        {
          name: '登录',
          path: '/entry/login'
        }
      ],
      tips: {
        title: '已有账号？',
        label: '快速登陆>',
        path: '/entry/login'
      }
    }
  },
  methods: {
    ...mapActions('user', ['getUser']),

    // init
    init () {
      if (this.userInfo && this.userInfo.mobile) {
        this.$message.info('用户已登录')
        this.$router.push('/home')
      }
    },

    // 判断是否通过了验证
    async checkQuickPassStatus () {
      return new Promise((resolve, reject) => {
        resolve(this.$refs.quickPass.isPassing)
      })
    },
    handlepassword () {
      return this.memberPassword === this.checkPassword
    },
    async postMsg () {
      const isPassing = await this.checkQuickPassStatus()
      if (!isPassing) {
        return this.$message.error('请先完成验证')
      }
      const hascheck = this.handlepassword()
      if (!hascheck) {
        return this.$message.error('两次输入的密码不一致')
      }
      const params = {
        type: 'entry',
        username: this.memberName,
        mobile: this.mobile,
        password: this.memberPassword
      }
      post('api/register', params).then(resp => {
        this.$message.success(resp.msg)
        this.$router.push('/home')
      }).catch(err => {
        this.$message.error(err)
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less" module>
  .root{
    background:#f5f5f6;
    .container{
      padding: 80px 0;
      text-align: center;
      .registerBlock{
        position: relative;
        width: 1000px;
        background: #fff;
        margin: 0 auto;
        .formBlock{
          width: 320px;
          text-align: center;
          margin: 0 auto;
          .registerTips{
            position: absolute;
            top: 43px;
            right: 40px;
            font-size: 12px;
            color: #73777a;
            letter-spacing: .4px;
            line-height: 30px;
            text-align: left;
            .tipLinks{
              color:#00c1de;
              &:hover{
                color:#00b7d3;
              }
            }
          }
          .registerHead{
            padding-top: 40px;
            font-size: 30px;
            color: #373d41;
            letter-spacing: 1px;
            line-height: 36px;
          }
          .form{
            box-sizing: border-box;
            padding-top: 20px;
            color: #373d41;
            .registerInput{
              margin-top: 20px;
            }
            .registerInputMobile{
              display: table;
              margin-top: 20px;
              .contryCode{
                box-sizing: border-box;
                padding-top: 20px;
                display: inline-block;
                width: 48px;
                background: #fff;
                font-size: 14px;
                height: 40px;
                line-height: 38px;
                padding: 0 8px;
                color: #9b9ea0;
                border: 1px solid #dcdfe6;
                vertical-align: middle;
                border-right: 0;
              }
              .inputMobile{
                display: inline-block;
                width: 272px;
              }
            }
            .quickPass{
              margin-top: 20px;
              :global(.iconfont){
                font-size: 18px;
              }
              :global(.icon-doubleright){
                color: #d7d8d9;
              }
              :global(.icon-check-circle){
                color: #67c23a;
              }
            }
            .registerSubmit{
              margin: 20px 0 40px;
              background-color: #00c1de;
              font-size: 14px;
              box-shadow: 0 1px 1px #ebe7e6;
              zoom: 100%;
              border: 1px solid #00c1de;
              height: 42px;
              line-height: 42px;
              outline: none;
              color: #fff;
              width: 100%;
              cursor: pointer;
              padding: 0;
              border-radius: 0;
              font-weight: 400;
            }
            :global(.el-input__inner){
              border-radius: 0;
              font-size: 12px;
            }
          }
        }
      }

    }
  }
</style>
