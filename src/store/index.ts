import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import RootStateTypes, { AllStateTypes } from './interface'

import app from './app'

/** store 根节点 */
export default createStore<RootStateTypes>({
  // 请将定义的 Module 添加到这里，并且在 interface 中引入对应的接口类型
  modules: {
    app
  }
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

/** 请使用我来获取 vuex store 实例 */
export function useStore<T = AllStateTypes> ():Store<T> {
  return baseUseStore<T>(key)
}
