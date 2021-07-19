import { computed } from 'vue'
import { useStore } from '@/store'
import moment from 'moment'

const appLang = computed(() => {
  const store = useStore()
  return store.state.app.lang
})

/** 响应式适更新语言的 moment 方法 */
export default function (inp?: moment.MomentInput, strict?: boolean | undefined) {
  return moment(inp, strict).locale(appLang.value)
}
