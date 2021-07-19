import { AppModuleTypes } from './app'

/** 根结点的 State 接口类型 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface RootStateTypes {
  // store 根结点的 state 类型
}

/**
 * 包含所有 Module 节点的 State 接口类型，
 * 将引入的 Module 接口类型添加到这里。
 */
export interface AllStateTypes extends RootStateTypes {
  app: AppModuleTypes
}
