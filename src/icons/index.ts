import svgIcon from '@/common/components/SvgIcon.vue'// svg组件
import { App } from 'vue'

export default function (app: App<Element>) {
  // register globally
  app.component('svg-icon', svgIcon)

  const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext)
  const req = require.context('./svg', false, /\.svg$/)
  requireAll(req)
}
