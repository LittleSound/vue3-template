<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <HelloI18n />
    <div title="element-plus test" style="margin: 0 auto;width:800px">
      <h3>
        Element Plus Test
      </h3>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import HelloI18n from '@/components/HelloI18n.vue'

@Options({
  components: {
    HelloWorld,
    HelloI18n
  }
})
export default class Home extends Vue {}
</script>
