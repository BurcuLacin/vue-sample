<template>
  <header class="header">
    <container class="header-inner">
      <router-link to="/" class="logo">
        Instagram
      </router-link>

      <form class="search">
        <input type="text" placeholder="Search" />
      </form>
<!-- v-if="$route.name === '/'" -->
      <nav class="navigation">
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'"/>
          <IconHome v-else />
        </router-link>
        <router-link to="/explore">
        <IconExploreFill v-if="$route.name === 'Explore'"/>
        <IconExplore v-else />
        </router-link>
        <router-link to="/direct">
        <IconDirectFill v-if="$route.name === 'Direct'"/>
        <IconDirect v-else/>
        </router-link>
        <router-link to="/profile">Profile</router-link>
      </nav>
    </container>
  </header>
</template>

<script>
import IconHome from '../icons/home.svg'
import IconHomeFill from '../icons/home-fill.svg'
import IconDirect from '../icons/direct.svg'
import IconDirectFill from '../icons/direct-fill.svg'
import IconExplore from '../icons/explore.svg'
import IconExploreFill from '../icons/explore-fill.svg'
import Container from './Container.vue'

export default {
  name: 'MainHeader',
  components: {
    IconHome,
    IconHomeFill,
    IconDirect,
    IconDirectFill,
    IconExplore,
    IconExploreFill,
    Container
  }
}
</script>

<style lang="less" scoped>
header {
  border-bottom: 1px solid rgb(var(--b6a));
 
}

.header-inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 60px;
}

.logo {
  font-size: 1.6rem;
  font-weight: bold;
}

.search {
  text-align: center;

  input {
    width: 215px;
    height: 28px;
    border: solid 1px rgba(var(--b6a), 1);
    background-color: rgb(var(b3f));
    border-radius: 4px;
    padding: 0 20px;
  }
}

.navigation{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a{
    margin-right: 20px;
  }
}

</style>
