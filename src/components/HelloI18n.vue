<template>
  <h3>
    i18n Test ({{ appLang }})
  </h3>
  <button @click="setAppLang('zh')" style="margin-right:5px;">
    zh
  </button>
  <button @click="setAppLang('en')">
    en
  </button>
  <p>
    {{ $t('message') }}
  </p>
  <p>{{ t('hello') }}</p>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'

export default defineComponent({
  name: 'HelloI18n',
  setup () {
    // useI18n 方法返回值中的 t 方法可以在 setup 内使用多语言支持，
    // vue 文件中单独定义的 <i18n> 标签内的多语言字段也需要使用这个 t 来访问，全局 $t 无法访问。
    // const { t } = useI18n()
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

    const store = useStore()
    /** 当前语言 */
    const appLang = computed(() => store.state.app.lang)
    /** 更改语言 */
    const setAppLang = (lang: string) => store.dispatch('setAppLang', lang)

    // Something todo ..

    return { t, appLang, setAppLang }
  }
})
</script>

<i18n>
{
  "en": {
    "hello": "Hello, i18n in \"setup\""
  },
  "zh": {
    "hello": "你好，“setup” 中的 i18n"
  }
}
</i18n>
