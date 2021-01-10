<template>
  <div class="App">
    <MasterHeader />

    <main class="main">
      <container>
      <router-view />
      </container>
    </main>
  </div>
</template>

<script>
import Container from './components/Container.vue'
import MasterHeader from './components/Header'
export default {
  name: 'App',
  components: {
    MasterHeader,
    Container
  }
}
</script>

    Container
<style lang="less" scoped>
.main {
  padding-top: 40px;
}
</style>
