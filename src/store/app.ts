import { Module } from 'vuex'
import RootStateTypes from './interface'
import i18n from '../i18n'

/** App Module 的 state 的接口类型定义 */
export interface AppModuleTypes {
    lang: string
}

/** App Module 本体 */
export default <Module<AppModuleTypes, RootStateTypes>>{
  /** 是否开启命名空间（对 state 无效，state 始终具有层级） */
  namespaced: false,
  state: {
    /** 语言 */
    lang: ''
  },
  mutations: {
    mSetAppLang (state: AppModuleTypes, lang: string):void { state.lang = lang }
  },
  actions: {
    /** 设置 APP 语言 */
    setAppLang ({ commit }, lang: string) {
      /** 存储到 localStore */
      const localStore = window.localStorage || localStorage
      if (localStore && localStore.setItem) localStore.setItem('locale_lang', lang)
      else console.warn('无法获取 localStore，语言设定保存失败')

      commit('mSetAppLang', lang)
      i18n.global.locale.value = lang
      localStore.lang
    }
  }
}
