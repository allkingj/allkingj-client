/**
* 用户信息状态管理
*/

import { get } from '@/lib/axios'
import { Message } from 'element-ui'

// state
const state = {
  userInfo: {}
}

// getters
const getters = {

}

// actions
const actions = {
  async getUser ({commit}) {
    const userInfo = await get('api/user', {type: 'content'}).then(resp => {
      return resp.data
    }).catch(err => {
      Message.error(err)
      return null
    })
    commit('setUserInfo', userInfo)
  }
}

// mutations
const mutations = {
  setUserInfo (state, nv) {
    state.userInfo = nv
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
