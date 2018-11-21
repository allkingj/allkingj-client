<template>
  <div :class="$style.root">
    <!-- nav -->
    <TopNav
      :ENV="menusType"
      :menus="menus"
    />
    <div :class="$style.container">
      <div :class="$style.section">
        <div :class="$style.left">
          <h1>{{loginWord.title}}</h1>
          <template v-for="(words,i) in loginWord.options">
            <p :key="i">{{words}}</p>
          </template>
        </div>
        <div :class="$style.right">
          <div :class="$style.tapLoginMethod">
            <i class="iconfont icon-qrcode"></i>
          </div>
          <div :class="$style.loginModule">
            <div :class="$style.loginBox">
              <div :class="$style.loginHeader">
                <div :class="$style.title">
                  密码登录
                </div>
              </div>
              <div :class="$style.loginSection">
                <div :class="$style.loginForm">
                  <form action="post">
                    <div :class="$style.loginInput">
                      <el-input v-model="userName" placeholder="请输入手机号码"></el-input>
                    </div>
                    <div :class="$style.loginInput">
                      <el-input type="password" v-model="passWord" placeholder="请输入登录密码"></el-input>
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
                    <el-button type="text" :class="$style.loginSubmit" @click.stop="postMsg">
                      登录
                    </el-button>
                  </form>
                </div>
              </div>
              <div :class="$style.loginLinks">
                <router-link :class="$style.links" :to="link.value" v-for="(link,i) in linkData" :key='i'>
                  {{link.key}}
                </router-link>
              </div>
              <div :class="$style.loginTips">
                <p>{{loginTips}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import { get } from '@/lib/axios'
import dragVerify from 'vue-drag-verify'
import TopNav from '@/components/top-nav'
import logo from '@/assets/logo01.png'

export default {
  name: 'Login',
  components: {
    dragVerify,
    TopNav: TopNav
  },
  data () {
    return {
      userName: '',
      passWord: '',
      linkData: [
        {key: '忘记密码', value: ''},
        {key: '免费注册', value: '/entry/register'}
      ],
      loginTips: '建议使用google浏览器以便达到最好的用户体验',
      loginWord:
      {
        title: 'www.xiaoluzhu.net',
        options:
        [
          'A strong man will struggle with the storms of fate.',
          'He who seize the right moment, is the right man.',
          'Cease to struggle and you cease to live.'
        ]
      },
      quickPass: {
        width: 330,
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
        textColor: '#fff',
        logoSrc: logo,
        border: 'border-bottom: 1px solid rgba(255,255,255,0.3);'
      },
      menus: [
        {
          name: '注册',
          path: '/entry/register'
        }
      ]
    }
  },
  computed: {
    ...mapState('user', ['userInfo'])
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

    // 发送用户数据
    async postMsg () {
      const isPassing = await this.checkQuickPassStatus()
      if (!isPassing) {
        return this.$message.error('请先完成验证')
      }
      const params = {
        type: 'entry',
        mobile: this.userName,
        password: this.passWord
      }
      get('api/login', params).then(resp => {
        this.$message.success(resp.msg)
        this.$router.push('/home')
      }).catch(err => {
        this.$message.error(err)
      })
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    userInfo (nv, ov) {
      this.init()
    }
  }
}
</script>

<style lang="less" module>
  .root{
    background-color: #1F2325;
    .container{
      padding: 74px 0 118px;
      text-align: center;
      .section{
        width: 990px;
        margin: auto;
        position: relative;
        height: 388px;
        overflow: hidden;
        .left{
          float: left;
          width: 610px;
          color:#fff;
          text-align: left;
          h1{
            margin-top: 90px;
            font-size: 30px;
            line-height: 36px;
            margin-bottom: 19px;
            font-weight: bold;
          }
          p{
            font-size: 14px;
            letter-spacing: 0.47px;
            line-height: 30px;
          }
        }
        .right{
          float: left;
          width: 380px;
          height: 388px;
          .tapLoginMethod{
            position: absolute;
            top:22px;
            right: 25px;
            width: 40px;
            height: 40px;
            z-index: 1;
            :global(.iconfont){
              font-size: 40px;
              color:#999;
            }
          }
          .loginModule{
            box-sizing:border-box;
            width: 380px;
            height: 388px;
            padding-top: 22px;
            border: none;
            position: absolute;
            right: 0;
            background-color: #fff;
            .loginBox{
              width: 330px;
              color: #373d41;
              margin: 0 auto;
              min-height: 340px;
              .loginHeader{
                text-align: left;
                position: relative;
                height: 54px;
                width: 100%;
                margin: 0 auto;
                color:#373d41;
                .title{
                  font-size: 18px;
                  font-weight: 400;
                  margin-bottom: 15px;
                }
              }
              .loginSection{
                width: 100%;
                margin: 0 auto;
                padding-top: 2px;
                .loginForm{
                  :global(.el-input__inner){
                    border-radius: 0;
                    font-size: 12px;
                  }
                  .loginInput{
                    margin-bottom: 18px;
                  }
                  .quickPass{
                    margin-bottom: 18px;
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
                  .loginSubmit{
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
                }
              }
              .loginLinks{
                margin: 10px 0 8px 0;
                text-align: right;
                zoom: 1;
                .links{
                  color: #9b9ea0;
                  font-size: 12px;
                  margin-left: 10px;
                }
              }
              .loginTips{
                margin: 18px 0 0 0;
                text-align: center;
                zoom: 1;
                p{
                  color: #9b9ea0;
                  font-size: 12px;
                  margin-left: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
