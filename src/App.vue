<template>
  <h1>
    {{ appLang }}
  </h1>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { computed, getCurrentInstance, ref } from 'vue'
import { useStore } from '@/store'

export default {
  name: 'App',
  setup () {
    const appLang = initAppLang()
    return {
      appLang
    }
  }
}

/** 初始化语言 */
function initAppLang () {
  const { proxy } = getCurrentInstance() as any
  const lang = ref(proxy.$i18n.locale)
  const store = useStore()
  const appLang = computed(() => store.state.app.lang)
  const setAppLang = (lang: string) => store.dispatch('setAppLang', lang)
  setAppLang(lang.value)
  return appLang
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
